
import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from './context/Registration/components/login-form.component.vue'
import RegisterForm from './context/Registration/components/register-form.component.vue'
import RentBike from './context/BikeRent/components/RentBike.vue';

const routes = [

  { path: '/', component: LoginForm },
  { path: '/Register', component: RegisterForm },
  { path: '/Login', component: LoginForm },
  { path: '/rent-bike', component: RentBike }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
