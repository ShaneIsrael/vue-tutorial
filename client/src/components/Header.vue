<template lang="pug">
  v-toolbar.cyan(fixed dark)
    v-toolbar-title.mr-4
      span(flat dark @click="navigateTo({name: '/'})") TabTracker
    v-toolbar-items
      v-btn(flat dark router :to="{name: 'songs'}") Browse
    v-spacer
    v-toolbar-items
      v-btn(v-if="!$store.state.isUserLoggedIn" flat dark router :to="{name: 'login'}") Login
      v-btn(v-if="!$store.state.isUserLoggedIn" flat dark router :to="{name: 'register'}") Sign Up
      v-btn(v-if="$store.state.isUserLoggedIn" flat dark @click='logout') Logout
</template>

<script>
export default {
  methods: {
    // Change the page via a function call
    navigateTo (route) {
      this.$router.push(route.name)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      // TODO: redirect to homepage
      this.$router.push({
        name: 'root'
      })
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
</style>
