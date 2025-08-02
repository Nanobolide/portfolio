import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import CV from '../pages/CV.vue'

const routes = [
  { path: '/', component: Home, meta: { title: 'Accueil' } },
  { path: '/cv', component: CV, meta: { title: 'Mon CV' } },
  { path: '/:pathMatch(.*)*', redirect: '/' } // pour gérer les routes inconnues
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80
      }
    }
    return { top: 0 }
  }
})

export default router
