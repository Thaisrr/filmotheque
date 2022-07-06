<template>
  <div class="card" :key="f.id">
    <div class="c-header">
      <img :src="f.image" :alt="f.title">
    </div>
    <div class="c-body">
      <h3 :class="{seen: f.vu}">{{f.title}}</h3>
      <button @click="emitUpdate(f)">{{ f.vu? 'Marquer comme non vu'  : 'Marquer comme vu' }}</button>
    </div>
  </div>
</template>

<script>
import {Film} from "@/models/Film";

export default {
  name: "MyCard",
  props: {
    f: Film
  },
  methods: {
    emitUpdate() {
      this.$emit('update', this.f.id)
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