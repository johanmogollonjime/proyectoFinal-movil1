import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Login from '../views/login.vue';
import Lugares from '../views/lugares.vue';
import HomePage from '@/views/HomePage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login', // Redirige a la página de login al cargar la app
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue'),
  },
    {
      path: '/lugares',
      name: 'lugares',
      component: () => import('../views/lugares.vue'),
    },
    {
      path: '/lugar/1',
      name: 'plazuela',
      component: () => import('../views/plazuela.vue'),
      props: true, // Para pasar el id como propiedad
    },
    {
      path: '/lugar/2',
      name: 'parque',
      component: () => import('../views/parqueP.vue'),
      props: true, // Para pasar el id como propiedad
    },
    {
      path: '/lugar/3',
      name: 'catedral',
      component: () => import('../views/catedral.vue'),
      props: true, // Para pasar el id como propiedad
    },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Usa el historial basado en el entorno
  routes, // Define las rutas
});

export default router; // Exporta el router para usarlo en main.js
