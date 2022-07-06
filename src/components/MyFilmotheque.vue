<template>
  <main>
  <h1>Filmothèque</h1>


    <section class="form">
      <FilmForm @create="create"/>
    </section>

    <section class="btn-container">
      <button @click="this.filter = 'ALL'">Tout</button>
      <button @click="this.filter = true">Vus</button>
      <button @click="this.filter = false">Pas Vu</button>
    </section>

    <section class="grid">
      <MyCard v-for="f in filtered" :key="f.id" :f="f" @update="setVue"/>
    </section>
  </main>
</template>

<script>
import MyCard from "@/components/Card";
import {Film} from "@/models/Film";
import FilmForm from "@/components/FilmForm";


export default {
name: "MyFilmotheque",
  components: {FilmForm, MyCard},
  data() {
  return {
    films: [
      new Film(1, 'Retour vers le Futur 1', 'https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/35/91/26/18686482.jpg', true),
      new Film(2, 'Retour vers le Futur 2', 'https://fr.web.img4.acsta.net/c_310_420/pictures/15/10/20/15/48/474464.jpg', true),
      new Film(3, 'Retour vers le Futur 3', 'https://fr.web.img2.acsta.net/c_310_420/medias/nmedia/00/02/52/13/retour.jpg', true),
      new Film(4, 'Jurrassic Parc', 'https://fr.web.img2.acsta.net/c_310_420/pictures/20/07/21/16/53/1319265.jpg', true),
      new Film(6, 'Police Academy 2', 'https://fr.web.img2.acsta.net/c_310_420/medias/nmedia/18/95/77/86/20427446.jpg', true),
      new Film(5, 'Police Academy 3', 'https://fr.web.img4.acsta.net/c_310_420/medias/nmedia/18/95/99/34/20438281.jpg', true)
    ],
    filter: 'ALL'
  }
},
  methods: {
    setVue(id) {
      const index = this.films.findIndex(film => film.id === id);
      this.films[index].vu = !this.films[index].vu
    },
    create(film) {
      this.films.push(film)
    },
  },
  computed : {
    filtered()  {
      if(this.filter === 'ALL') return this.films;
      return this.films.filter(film => film.vu === this.filter )
    }
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