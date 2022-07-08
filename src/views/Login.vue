<template>
    <h1>Connexion</h1>

    <form @submit.prevent="submit">
      <p>
        <label for="email">Email</label>
        <input v-model="user.email" type="email" id="email">
      </p>
      <p>
        <label for="password">Mot de passe</label>
        <input v-model="user.password" type="password" id="password">
      </p>
      <p>
        <button>Connexion</button>
      </p>
    </form>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";

export default {
name: "LoginComponent",
  data() {
    return {
      user: {email: '', password: ''}
    }
  },
  methods: {
    async submit() {
      await AuthenticationService.login(this.user);
      this.$router.push({name: 'filmotheque'})
    }
  }
}
</script>

<style scoped>

</style>