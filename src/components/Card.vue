<template>
  <div class="card" :key="f.id">
    <div class="c-header">
      <img :src="f.image" :alt="f.title">
    </div>
    <div class="c-body">
      <h3 :class="{seen: f.vu}">{{f.title}}</h3>
      <div>
        <button @click="update">{{ f.vu? 'Marquer comme non vu'  : 'Marquer comme vu' }}</button>
        <button @click="remove">Supprimer</button>
        <button @click="emitUpdate">Modifier</button>
      </div>
      <p>
        <router-link :to="{name: 'details', params: {id: f.id}}">Détails</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import {Film} from "@/models/Film";
import FilmService from "@/services/FilmService";

export default {
  name: "MyCard",
  props: {
    f: Film
  },
  methods: {
    update() {
      const updated = {...this.f};
      updated.vu = !updated.vu;
      FilmService.update(updated)
          .then(() => this.$emit('reload') )
    },
    remove() {
      FilmService.delete(this.f.id)
      .then(() => this.$emit('reload'))
    },
    emitUpdate() {
      this.$emit('update', this.f)
    }
  }
}
</script>

<style scoped>
.card {
  width: min(100%, 300px);
  box-shadow: 2px 2px 8px #a9a9a9;

  border-radius: 5px;
  height: 350px;
}

.c-header {
  height: 50%;
  overflow: hidden;
}

img {
  width: 100%;
}

.c-body {
  padding: 20px;
}

.seen::before {
  content: "✔️" ;
}
</style>