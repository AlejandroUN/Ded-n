import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import crearCuenta from '../views/crearCuenta.vue'
import encuestaPsicometrica from '../views/encuestaPsicometrica.vue'
import entrarPerfil from '../views/entrarPerfil.vue'
import recuperarContrasena from '../views/recuperarContrasena.vue'
import allport from '../views/allport.vue'
import kostick from '../views/kostick.vue'
import encProf from '../views/encuestaContProfesionales.vue'
import encArteTecnica from '../views/encuestaArteTecnica.vue'
import iniciarSesion from '../views//iniciarSesion.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/crearCuenta',
    name: 'crearCuenta',
    component: crearCuenta
  },
  {
    path: '/iniciarSesion',
    name: 'iniciarSesion',
    component: iniciarSesion
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
  },
  {
    path: '/allport',
    name: 'TestAllport',
    component: allport
  },
  {
    path: '/kostick',
    name: 'TestKostick',
    component: kostick
  },

  {
    path: '/testMaestros',
    name: 'testMaestros',
    component: encArteTecnica
  },

  {
    path: '/testProfesionales',
    name: 'testProfesionales',
    component: encProf
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
