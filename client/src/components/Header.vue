<template lang="pug">
  v-toolbar.cyan(fixed dark)
    v-toolbar-title.mr-4
      span(flat dark @click="navigateTo({name: '/'})") TabTracker
    //- v-toolbar-items
    //-   v-btn(flat dark) Browse
    v-spacer
    v-toolbar-items
      v-btn(flat dark router to='login') Login
      v-btn(flat dark router to='register') Sign Up
</template>

<script>
export default {
  methods: {
    // Change the page via a function call
    navigateTo (route) {
      this.$router.push(route.name)
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
</style>
