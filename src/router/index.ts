import {createRouter, createWebHashHistory} from `vue-router`
import Layout from '../views/Layout/index.vue'
import Home from '../views/Home/index.vue'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'layout',
            component: Layout,
            children: [
                {
                    path: '',
                    name: 'home',
                    component: Home
                },
            ]
        },

    ],
    scrollBehavior() {
        return {
            top: 0
        }
    }
})

export default router
