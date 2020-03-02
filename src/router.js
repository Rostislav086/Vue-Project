import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home.vue'
import men from './pages/men.vue'
import Checkout from './pages/Checkout.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/men',
            component: men
        },
        {
            path: '/checkout',
            component: Checkout
        }
    ]
})