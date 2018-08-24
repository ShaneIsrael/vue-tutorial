<template lang='pug'>
  v-content
    v-container(fluid fill-height)
      v-layout(align-center justify-center)
        v-flex(xs6)
          .white.elevation-2
            v-toolbar.cyan(flat dense dark)
              v-toolbar-title Login
            div.pl-4.pr-4.pt-2.pb-2
              v-text-field(name='email', label='email', v-model='email')
              v-text-field(type='password' name='password', label='password', v-model='password')
              .error(v-html='error')
              v-btn.cyan(@click='login' dark) Login
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  watch: {
    email (value) {
      console.log('email has changed', value)
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token) // call stores setToken method, which calls mutations setToken method which updates state to token
        this.$store.dispatch('setUser', response.data.user)
      } catch (err) {
        this.error = err.response.data.error
      }
    }
  },
  mounted () {
    // setTimeout(() => {
    //   this.email = 'hello world'
    // }, 1000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error {
    color: white
  }
</style>
