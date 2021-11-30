import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import iniciarSesion from '../views/iniciarSesion.vue'
import crearCuenta from '../views/crearCuenta.vue'
import encuestaPsicometrica from '../views/encuestaPsicometrica.vue'
import entrarPerfil from '../views/entrarPerfil.vue'
import recuperarContrasena from '../views/recuperarContrasena.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/iniciarSesion',
    name: 'iniciarSesion',
    component: iniciarSesion
  },
  {
    path: '/crearCuenta',
    name: 'crearCuenta',
    component: crearCuenta
  },
  {
    path: '/encuestaPsicometrica',
    name: 'encuestaPsicometrica',
    component: encuestaPsicometrica
  },
  {
    path: '/entrarPerfil',
    name: 'entrarPerfil',
    component: entrarPerfil
  },
  {
    path: '/recuperarContrasena',
    name: 'recuperarContrasena',
    component: recuperarContrasena
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
