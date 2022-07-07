<template>
  <main>
  <h1>Filmothèque</h1>


    <section class="form">
      <FilmForm @reload="getFilms" :film-to-update="movieToUpdate"/>
    </section>

    <section class="btn-container">
      <button @click="this.filter = 'ALL'">Tout</button>
      <button @click="this.filter = true">Vus</button>
      <button @click="this.filter = false">Pas Vu</button>
    </section>

    <section class="grid">
      <MyCard v-for="f in filtered" :key="f.id" :f="f" @reload="getFilms"  @update="update"/>
    </section>
  </main>
</template>

<script>
import MyCard from "@/components/Card";
import FilmForm from "@/components/FilmForm";
import FilmService from "@/services/FilmService";


export default {
name: "MyFilmotheque",
  components: {FilmForm, MyCard},
  data() {
  return {
    films: [],
    filter: 'ALL',
    movieToUpdate: undefined
  }
},
  methods: {
    async getFilms() {
      this.movieToUpdate = undefined;
      this.films = await FilmService.getAll()
      // ou ( sans le async )
      // FilmService.getAll().then(films => this.films = films)
    },
    update(film) {
      console.log('in update', film)
      this.movieToUpdate = {...film}
    }
  },
  computed : {
    filtered()  {
      if(this.filter === 'ALL') return this.films;
      return this.films.filter(film => film.vu === this.filter )
    }
  },
  mounted() {
    this.getFilms();
  }
}
</script>

<style scoped>
h1 {
  margin-bottom: 50px;
}


.grid {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
}


main {
  width: 80%;
  margin: auto;
}

.form {
  margin: 100px 0;
}

.btn-container {
  margin-bottom: 50px;
}


</style>