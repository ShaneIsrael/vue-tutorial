<template lang='pug'>
  v-content
    v-container(fluid fill-height)
      v-layout(align-center justify-center)
        v-flex(xs6)
          Panel(title="Songs")
            v-btn.green.accent-2(slot="action" light medium absolute right middle fab rourter :to="{name: 'songs-create'}")
              v-icon add
            div(v-for="song in songs" :key="song.id")
              | {{song.title}} -
              | {{song.artist}} -
              | {{song.album}}
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    // axios returns the data in .data
    this.songs = (await SongsService.index()).data
  }
}
</script>

<style scoped>

</style>
