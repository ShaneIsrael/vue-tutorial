<template lang='pug'>
  v-content
    v-container(fluid fill-height)
      v-layout(align-center justify-center)
        v-flex(xs6)
          Panel(title='Register')
            v-text-field(name='email', label='email', v-model='email')
            v-text-field(type='password' name='password', label='password', v-model='password' autocomplete="new password")
            v-text-field(type='password' name='password', label='verify password', v-model='verifyPassword' autocomplete="new password")
            .error(v-html='error')
            v-btn.cyan(@click='register' dark) Register
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      verifyPassword: '',
      error: null
    }
  },
  watch: {
    email (value) {
      // console.log('email has changed', value)
    }
  },
  methods: {
    async register () {
      try {
        if (this.password !== this.verifyPassword) {
          this.error = 'Passwords do not match!'
          return
        }
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token) // call stores setToken method, which calls mutations setToken method which updates state to token
        this.$store.dispatch('setUser', response.data.user)
      } catch (err) {
        if (err.response) {
          this.error = err.response.data.error
        } else {
          this.error = err.message
          console.log(err)
        }
      }
    }
  },
  components: {
    Panel
  },
  mounted () {
    // setTimeout(() => {
    //   this.email = 'hello world'
    // }, 5000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error {
    color: white;
    font-weight: bold;
  }
</style>
