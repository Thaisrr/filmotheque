<template>
  <form @submit.prevent="create">
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
import FilmService from "@/services/FilmService";

export default {
  name: "FilmForm",
  data: function () {
    return {
      film:  new Film('', '', false),
      title_dirty: false,
      img_dirty: false,
      is_update: false
    }
  },
  props: {
    filmToUpdate: Film
  },
  methods: {
    create() {
      if(!this.titleError && !this.imgError) {
        if(!this.is_update) {
          FilmService.create(this.film).then(() => this.$emit('reload'));
        } else {
          FilmService.update(this.film).then(() => this.$emit('reload'));
        }
        this.reset();
      }
      else
        console.error('Nope !')
    },
    reset() {
      this.is_update = false;
      this.title_dirty = false;
      this.img_dirty = false;
      this.film = new Film( '', '', false);
    }
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
  },
  watch: {
    filmToUpdate() {
      console.info('---- updating prop', this.filmToUpdate)
      if(this.filmToUpdate) {
        this.film = this.filmToUpdate;
        this.is_update = true;
      } else {
        this.reset()
      }
    }
  }
}
</script>

<style scoped>
  .error {
    color: red;
  }
</style>