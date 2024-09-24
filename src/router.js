
import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from './context/Registration/components/login-form.component.vue'
import RegisterForm from './context/Registration/components/register-form.component.vue'
const routes = [

  { path: '/', component: LoginForm },
  { path: '/Register', component: RegisterForm },
  { path: '/Login', component: LoginForm }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
