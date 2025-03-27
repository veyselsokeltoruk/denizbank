import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GuvenilirView from '../views/GuvenilirView.vue'
import IyiVatandasView from '../views/IyiVatandasView.vue'
import SorumluOpView from '../views/SorumluOpView.vue'
import RaporlarView from '../views/RaporlarView.vue'
import DegerYaratmaView from '../views/DegerYaratmaView.vue'

const router = createRouter({
  history: createWebHistory('/ir/2023/2023TR/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { scrollToTop: true }
    },
    {
      path: '/guvenilir',
      name: 'guvenilir',
      component: GuvenilirView,
      meta: { scrollToTop: true }
    },
    {
      path: '/iyivatandas',
      name: 'iyivatandas',
      component: IyiVatandasView,
      meta: { scrollToTop: true }
    },
    {
      path: '/sorumluop',
      name: 'sorumluop',
      component: SorumluOpView,
      meta: { scrollToTop: true }
    },
    {
      path: '/raporlar',
      name: 'raporlar',
      component: RaporlarView,
      meta: { scrollToTop: true }
    },
    {
      path: '/degeryaratma',
      name: 'degeryaratma',
      component: DegerYaratmaView,
      meta: { scrollToTop: true }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.meta.scrollToTop) {
      return { top: 0 }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})


export default router
