import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter } from 'vue-router'
import router from '@/router.js'
import setupPrimeVue from './primevue-components'

//bike Rent


import 'animate.css';
import '@fortawesome/fontawesome-free/css/all.css';
import {createPinia} from "pinia";


const app = createApp(App)
const pinia = createPinia();

setupPrimeVue(app)

app.use(pinia);

app.use(router)

app.mount('#app')
