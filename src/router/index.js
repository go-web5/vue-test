import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import PageA from '../components/PageA.vue'
import PageB from '../components/PageB.vue'
import PageC from '../components/PageC.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/page-a',
    name: 'page-a',
    component: PageA
  },
  {
    path: '/page-b',
    name: 'page-b',
    component: PageB
  },
  {
    path: '/page-c',
    name: 'page-c',
    component: PageC
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;