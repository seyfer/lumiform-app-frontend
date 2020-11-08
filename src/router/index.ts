import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/views/Home.vue';
import Credentials from '@/views/guessing/Credentials.vue';
import Guessing from '@/views/guessing/Guessing.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/guessing/credentials',
    name: 'credentials',
    component: Credentials,
  },
  {
    path: '/guessing/guessing',
    name: 'guessing',
    component: Guessing,
  },
  {
    path: '/results',
    name: 'results',
    component: () => import(/* webpackChunkName: "results" */ '../views/Results.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
