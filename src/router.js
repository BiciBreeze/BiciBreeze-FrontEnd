
import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from './context/Registration/components/LoginForm.vue'
import RegisterForm from './context/Registration/components/RegisterForm.vue'
const routes = [

  { path: '/', component: LoginForm },
  { path: '/Register', component: RegisterForm },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
