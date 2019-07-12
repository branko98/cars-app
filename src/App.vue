<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/cars">Cars</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/add">Add</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-item nav-link" to="/login" v-if="!isAuthenticated">Login</router-link>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-item nav-link" @click="logout" v-if="isAuthenticated">Logout</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-item nav-link" to="/register" v-if="!isAuthenticated">Register</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
import AppCars from "./components/AppCars.vue";
import { authService } from "./services/authService";

export default {
  name: "app",
  components: {
    AppCars
  },

  data() {
    return {
      isAuthenticated: authService.isAuthenticated()
    };
  },

  methods: {
    logout() {
      authService.logout();
      this.isAuthenticated = false;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
