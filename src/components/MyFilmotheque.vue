<template>
  <main>
  <h1>Filmothèque</h1>


    <section class="grid">
      <div class="card" v-for="(f) of films" :key="f.id">
        <div class="c-header">
          <img :src="f.img" :alt="f.title">
        </div>
        <div class="c-body">
          <h3 :class="{seen: f.vu}">{{f.title}}</h3>
          <button @click="setVue(f)">{{ f.vu? 'Marquer comme non vu'  : 'Marquer comme vu' }}</button>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
name: "MyFilmotheque",
data() {
  return {
    films: [
      {id: 1, title: 'Retour vers le Futur 1', img : '', vu: true},
      {id: 2, title: 'Retour vers le Futur 2', img : '', vu: true},
      {id: 3, title: 'Retour vers le Futur 3', img : '', vu: true},
      {id: 4, title: 'Jurrassic Parc', img : '', vu: true},
      {id: 5, title: 'Police Academy 1', img : '', vu: false},
      {id: 6, title: 'Police Academy 2', img : '', vu: false},
    ]
  }
},
  methods: {
    setVue(film) {
      film.vu = !film.vu;
    }
  }
}
</script>

<style scoped>
h1 {
  margin-bottom: 50px;
}
.seen::before {
  content: "✔️" ;
}

.grid {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
}

.card {
  width: min(100%, 300px);
  box-shadow: 2px 2px 8px #a9a9a9;
  padding: 20px;
  border-radius: 5px;
}

main {
  width: 80%;
  margin: auto;
}


</style>