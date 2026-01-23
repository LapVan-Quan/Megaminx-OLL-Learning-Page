import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Library from '../pages/Library.vue'
import Practice from '../pages/Practice.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/library', component: Library },
  { path: '/practice', component: Practice },
]

const router = createRouter({
  history: createWebHistory('/Megaminx-OLL-Learning-Page/'),
  routes,
})

export default router
