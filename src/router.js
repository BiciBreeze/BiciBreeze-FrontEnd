import { createRouter, createWebHistory } from 'vue-router';
import Home from './layouts/home.vue';
import RentBike from "@/context/BikeRent/components/RentBike.vue";
import LoginForm from './context/Registration/components/login-form.component.vue';
import RegisterForm from './context/Registration/components/register-form.component.vue';
import Subscription from './context/Subscription/components/subscription.vue';
import UserProfile from './context/user-profile/components/userProfile.vue';
import Config from './layouts/config.vue';

const routes = [
  { path: '/', component: LoginForm },
  { path: '/home', component: Home },
  { path: '/bookings', component: RentBike },
  { path: '/register', component: RegisterForm },
  {path: '/subscription', component: Subscription},
  {path: '/user-profile', component: UserProfile},
  {path: '/settings', component: Config}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;