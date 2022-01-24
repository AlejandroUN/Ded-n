import { createRouter, createWebHistory } from 'vue-router'
//import routerv from 'vue-router'
import Home from '../views/Home.vue'
import crearCuenta from '../views/crearCuenta.vue'
import entrarPerfil from '../views/entrarPerfil.vue'
import recuperarContrasena from '../views/recuperarContrasena.vue'
import introBigFive from '../views/introBigFive.vue'
import iniciarSesion from '../views/iniciarSesion.vue'
import contactanos from '../views/contactanos.vue'
import bigFive from '../components/bigFive.vue'
import bigFive10 from '../components/bigFive10.vue'
import bigFive2 from '../components/bigFive2.vue'
import bigFive3 from '../components/bigFive3.vue'
import bigFive4 from '../components/bigFive4.vue'
import bigFive5 from '../components/bigFive5.vue'
import bigFive6 from '../components/bigFive6.vue'
import bigFive7 from '../components/bigFive7.vue'
import bigFive8 from '../components/bigFive8.vue'
import bigFive9 from '../components/bigFive9.vue'
import bigFiveTest from'../views/bigFiveTest.vue'
import MBTI from '../views/MBTI.vue'
import MBTI2 from '../views/MBTI2.vue'
import MBTI3 from '../views/MBTI3.vue'
import MBTI4 from '../views/MBTI4.vue'
import ayuda from '../views/ayuda.vue'
import privacidad from '../views/privacidad.vue'
import nosotros from '../views/nosotros.vue'
import cont2 from '../views/contactanos2.vue'
import 'es6-promise/auto'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/MBTI',
    name: 'MBTI',
    component: MBTI
  },
  {
    path: '/MBTI2',
    name: 'MBTI2',
    component: MBTI2
  },
  {
    path: '/MBTI3',
    name: 'MBTI3',
    component: MBTI3
  },
  {
    path: '/MBTI4',
    name: 'MBTI4',
    component: MBTI4
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
    path: '/entrarPerfil',
    name: 'entrarPerfil',
    component: entrarPerfil
  },
  {
    path: '/recuperarContrasena',
    name: 'rec}uperarContrasena',
    component: recuperarContrasena
  },
  
  {
    path: '/introBigFive',
    name: 'introBigFive',
    component: introBigFive
  },
  {path: '/contacta',
    name: 'contacta',
    component: contactanos
  },
  {path: '/bigFive',
  name: 'bigFive',
  component: bigFive
  },
  {path: '/bigFive2',
  name: 'bigFive2',
  component: bigFive2
  },
  {path: '/bigFive3',
  name: 'bigFive3',
  component: bigFive3
  },
  {path: '/bigFive3',
  name: 'bigFive3',
  component: bigFive3
  },
  {path: '/bigFive4',
  name: 'bigFive4',
  component: bigFive4
  },
  {path: '/bigFive5',
  name: 'bigFive5',
  component: bigFive5
  },
  {path: '/bigFive6',
  name: 'bigFive6',
  component: bigFive6
  },
  {path: '/bigFive7',
  name: 'bigFive7',
  component: bigFive7
  },
  {path: '/bigFive8',
  name: 'bigFive8',
  component: bigFive8
  },
  {path: '/bigFive9',
  name: 'bigFive9',
  component: bigFive9
  },
  {path: '/bigFive10',
  name: 'bigFive10',
  component: bigFive10
  },
  {path: '/bigFiveTest',
  name: 'bigFiveTest',
  component: bigFiveTest
  },
  {path: '/ayuda',
  name: 'ayuda',
  component: ayuda
  },
  {path: '/nosotros',
  name: 'nosotros',
  component: nosotros
  },
  {path: '/privacidad',
  name: 'privacidad',
  component: privacidad
  },

  {path: '/contactanos',
  name: 'contactanos',
  component: cont2
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
