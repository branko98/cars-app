import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import AppCars from '@/components/AppCars'
import AddCar from '@/components/AddCar'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/', component: AppCars },
  { path: '/cars', component: AppCars },
  { path: '/add', component: AddCar },
]

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
