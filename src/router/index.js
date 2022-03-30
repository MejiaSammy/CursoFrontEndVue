import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cliente/homeC',
    name: 'homeC',    
    component: () => import(/* webpackChunkName: "about" */ '../views/Cliente/HomeCView.vue')
  },
    {
      path: '/cliente/aboutC',
      name: 'aboutC',    
      component: () => import(/* webpackChunkName: "about" */ '../views/Cliente/AboutCView.vue')
    },
    {
      path: '/cliente/saboresC',
      name: 'saboresC',    
      component: () => import(/* webpackChunkName: "about" */ '../views/Cliente/SaboresCView.vue')
    },
    {
      path: '/cliente/adornosC',
      name: 'adornosC',    
      component: () => import(/* webpackChunkName: "about" */ '../views/Cliente/AdornosCView.vue')
    },
    {
      path: '/cliente/ordenarC',
      name: 'ordenarC',    
      component: () => import(/* webpackChunkName: "about" */ '../views/Cliente/OrdenarCView.vue')
    },
  {
    path: '/pastelero/homeP',
    name: 'homeP',    
    component: () => import(/* webpackChunkName: "about" */ '../views/Pastelero/HomePView.vue')
  },
    {
      path: '/pastelero/pedidosP',
      name: 'pedidosP',    
      component: () => import(/* webpackChunkName: "about" */ '../views/Pastelero/PedidosPView.vue')
    },
    {
      path: '/pastelero/saboresP',
      name: 'saboresP',    
      component: () => import(/* webpackChunkName: "about" */ '../views/Pastelero/SaboresPView.vue')
    },
    {
      path: '/pastelero/adornosP',
      name: 'adornosP',    
      component: () => import(/* webpackChunkName: "about" */ '../views/Pastelero/AdornosPView.vue')
    },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
