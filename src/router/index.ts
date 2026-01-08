import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layouts/app/IndexLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AppLayout,
    },
  ],
})

export default router
