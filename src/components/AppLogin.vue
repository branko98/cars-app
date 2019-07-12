<template>
  <div>
    <form @submit.prevent="login">
      <input type="text" id="email" placeholder="Email" v-model="email" minlength="2" />
      <br />
      <input type="password" id="password" placeholder="Password" v-model="password" minlength="2" />
      <br />
      <button class="btn btn-primary" type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { authService } from "../services/authService";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },

  methods: {
    login() {
      authService.login(this.email, this.password).then(() => {
        this.$router.push({ name: "cars" });
      });
    }
  }
};
</script>
    