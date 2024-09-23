import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter } from 'vue-router'
import router from '@/router.js'
import setupPrimeVue from './primevue-components'
const app = createApp(App)

setupPrimeVue(app)


app.use(router)

app.mount('#app')
