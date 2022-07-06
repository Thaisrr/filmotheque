<template>
  <form @submit.prevent="emitFilm">
    <div>
      <label for="title">Titre</label>
      <input id="title" v-model="film.title" @input="this.title_dirty = true" @blur="title_dirty = true">
      <p class="error" v-show="title_dirty && titleError">Veuillez entrer un titre</p>
    </div>
    <div>
      <label for="img">Image</label>
      <input id="img" v-model="film.image" @input="img_dirty = true" @blur="img_dirty = true">
      <p class="error" v-show="img_dirty && imgError">Avec une image, ce serait plus joli</p>
    </div>

    <button>Enregistrer</button>
  </form>
</template>

<script>
import {Film} from "@/models/Film";

export default {
  name: "FilmForm",
  data: function () {
    return {
      film: new Film(-1, '', '', false),
      title_dirty: false,
      img_dirty: false
    }
  },
  methods: {
    emitFilm() {
      if(!this.titleError && !this.imgError)
        this.$emit('create', this.film)
      else
        console.error('Nope !')
    },
  },
  computed: {
    titleError() {
      console.log('title', !this.film.title)
      return !this.film.title
    },
    imgError() {
      console.log('image computed')
      return !this.film.image
    }
  }
}
</script>

<style scoped>
  .error {
    color: red;
  }
</style>