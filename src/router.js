import { createRouter, createWebHistory } from 'vue-router';
import Home from './layouts/home.vue';
import RentBike from "@/context/BikeRent/components/RentBike.vue";
import LoginForm from './context/Registration/components/login-form.component.vue';
import RegisterForm from './context/Registration/components/register-form.component.vue';
import Subscription from "@/context/Subscription/components/subscription.vue";
import UserProfile from './context/user-profile/components/userProfile.vue';
import Config from "@/layouts/Config.vue";
import {authenticationGuard} from "@/context/iam/services/authentication.guard.js";

const routes = [
  { path: '/', redirect: '/login' }, // Default route redirection
  { path: '/login', name:'sign-in', component: LoginForm },
  { path: '/home', name:'home', component: Home, beforeEnter: authenticationGuard },
  { path: '/bookings', component: RentBike, beforeEnter: authenticationGuard },
  { path: '/register', name:'sign-up', component: RegisterForm },
  { path: '/subscription', component: Subscription, beforeEnter: authenticationGuard },
  { path: '/user-profile', component: UserProfile, beforeEnter: authenticationGuard },
  { path: '/settings', component: Config, beforeEnter: authenticationGuard }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;