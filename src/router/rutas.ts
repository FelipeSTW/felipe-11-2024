import { RouteRecordRaw } from 'vue-router'

const rutas: RouteRecordRaw[] = [
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

export default rutas