import { createRouter, createWebHistory } from 'vue-router';
import UserProfile from './user-profile/components/user-profile.component.vue';
const routes = [

    {
        path: '/profile',
        name: 'UserProfile',
        component: UserProfile
    }
    // puedes agregar más rutas aquí
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;