<template lang='pug'>
  v-layout
    v-flex(xs4)
      Panel(title="Song Metadata")
        v-text-field(label='Title' v-model='song.title' required :rules="[required]")
        v-text-field(label='Artist' v-model='song.artist' required :rules="[required]")
        v-text-field(label='Genre' v-model='song.genre' required :rules="[required]")
        v-text-field(label='Album' v-model='song.album' required :rules="[required]")
        v-text-field(label='Album Image URL' v-model='song.albumImageUrl' required :rules="[required]")
        v-text-field(label='YouTube ID' v-model='song.youtubeId' required :rules="[required]")
    v-flex(xs8)
      Panel.ml-2(title="Song Structure")
        v-textarea(label='Tab', v-model='song.tab')
        v-textarea(label='Lyrics', v-model='song.lyrics')
      v-alert.ml-2(v-if="error" :value="true" type="error" transition="scale-transition") {{error}}
      v-btn.green(dark @click="create") Create Song
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      required: (value) => !!value || 'Required',
      error: null
    }
  },
  methods: {
    async create () {
      // Call API
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }
      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>

</style>
