import {createRouter, createWebHashHistory} from "vue-router"
import Nav from '../views/Nav/index.vue'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'nav',
            component: Nav,
        },

    ],
    scrollBehavior() {
        return {
            top: 0
        }
    }
})

export default router
