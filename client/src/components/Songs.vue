<template lang='pug'>
  v-content
    v-container(fluid fill-height)
      v-layout(align-center justify-center)
        v-flex(xs6)
          Panel(title="Songs")
            v-btn.green.accent-2(slot="action" light medium absolute right middle fab rourter :to="{name: 'songs-create'}")
              v-icon add
            .song(v-for="song in songs" :key="song.id")
              v-layout
                v-flex(xs6)
                  .song-title {{song.title}}
                  .song-artist {{song.artist}}
                  .song-genre {{song.genre}}
                  v-btn.cyan(dark :to="{name: 'song', params: {songId: song.id}}") View
                v-flex(xs6)
                  img.album-image(:src="song.albumImageUrl")
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
  .song {
    padding: 20px;
    height: 330px;
    overflow: hidden;
  }
  .song-title {
    font-size: 30px
  }
  .song-artist {
    font-size: 30px
  }
  .song-genre {
    font-size: 30px
  }
  .album-image {
    width: 70%;
    margin: 0 auto;
  }
</style>
