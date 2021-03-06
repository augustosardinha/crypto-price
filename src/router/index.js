import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HistoryView from '../views/HistoryView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const routes = [
  {
    path: '/crypto-price/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/crypto-price/crypto/:id/history',
    name: 'crypto',
    component: HistoryView
  },
  {
    path: '/crypto-price/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
