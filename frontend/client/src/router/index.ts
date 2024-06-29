import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/collaberation',
      name: 'collaberation',
      component: () => import('../views/Collaberation.vue')
    },
    {
      path: '/networking',
      name: 'networking',
      component: () => import('../views/Networking.vue')
    },
    {
      path: '/security',
      name: 'security',
      component: () => import('../views/Security.vue')
    },
    {
      path: '/managed-services',
      name: 'managed-services',
      component: () => import('../views/ManagedServices.vue')
    },
    {
      path: '/pro-services',
      name: 'pro-services',
      component: () => import('../views/ProServices.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutUs.vue')
    }
  ]
})



export default router
