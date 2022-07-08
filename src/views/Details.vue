<template>
   <div v-if="film">
     <h1>{{film.title}}</h1>

     <p>{{film.vu ? 'Déjà vu' : 'A voir'}}</p>

     <div>
       <img :src="film.image">
     </div>
   </div>
  <div v-else>
    <p>Chargement en cours...</p>
  </div>

  <router-link :to="{name: 'filmotheque'}">Retour à la filmothèque</router-link>
</template>

<script>
import FilmService from "@/services/FilmService";

export default {
  name: "DetailsComponent",
  data: () => ({
    film: undefined
  }),
  props: {
    id: Number
  },
  mounted() {
    FilmService.getById(this.id)
        .then(film => this.film = film)
  }
}
</script>

<style scoped>

</style>