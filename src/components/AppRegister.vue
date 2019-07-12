<template>
  <div>
    <form @submit.prevent="register">
      <input type="text" id="username" placeholder="Username" v-model="user.username" />
      <br />
      <input type="text" id="email" placeholder="Email" v-model="user.email" />
      <br />
      <input type="password" id="password" placeholder="Password" v-model="user.password" />
      <br />
      <input
        type="password"
        id="password_confirmation"
        placeholder="Confirm password"
        v-model="user.password_confirmation"
      />
      <br />
      <button class="btn btn-primary" type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import { authService } from "../services/authService";

export default {
  data() {
    return {
      user: {
        username: "",
        email: "",
        password: "",
        password_confirmation: ""
      }
    };
  },

  methods: {
    register() {
      authService.register(this.user).then(() => {
        this.$router.push({ name: "login" });
      });
    }
  }
};
</script>

<style>
</style>
