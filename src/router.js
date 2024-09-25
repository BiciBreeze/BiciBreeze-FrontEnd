import { createRouter, createWebHistory } from "vue-router";
import UserProfile from '@/user-profile/components/user-profile.component.vue';

const routes = [
    {
        path: "/",
        name: "UserProfile",
        component: UserProfile,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
