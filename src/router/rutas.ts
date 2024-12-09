import { createRouter, createWebHistory } from 'vue-router'

const rutas = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: () => import('../views/home/VistaInicio.vue')
    },
    {
      path: '/equipo',
      name: 'equipo',
      component: () => import('../views/team/VistaEquipo.vue')
    },
    {
      path: '/equipo/:id',
      name: 'detallePokemon',
      component: () => import('../views/team/VistaPokemon.vue')
    }
  ]
})

export default rutas