import { createRouter,createWebHistory } from 'vue-router'

const routerHistory = createWebHistory()
const routes  = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/user-home.vue') 
    },
    {
        path: '/index',
        name: 'index',
        component: () => import('@/views/index.vue') 
    },
]

const router = createRouter({
    history: routerHistory,
    routes,
})

export default router;
