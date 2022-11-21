import { createRouter,createWebHistory } from 'vue-router'
// import home from '@/routers/home/index.js'
import Home from '@/views/user-home'


const routerHistory = createWebHistory()
const routes  = [
    {
        path: '/',
        name: 'home',
        component: Home,
    }
]

const router = createRouter({
    history: routerHistory,
    routes,
})

export default router;
