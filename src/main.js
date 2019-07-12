import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import AppCars from '@/components/AppCars'
import AddCar from '@/components/AddCar'
import AppLogin from '@/components/AppLogin'
import AppRegister from '@/components/AppRegister'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/', component: AppCars },
  { path: '/cars', component: AppCars, name: 'cars' },
  { path: '/add', component: AddCar },
  { path: '/edit/:id', component: AddCar },
  { path: '/login', component: AppLogin, name: 'login' },
  { path: '/register', component: AppRegister },
]

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
