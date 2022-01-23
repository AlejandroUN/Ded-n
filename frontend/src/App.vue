<template>
  <div id = "app" class="fondo">
    <!--<div id="nav">

    <router-link to="/"> Inicio</router-link> |
    <router-link to="/iniciarSesion">Iniciar Sesion </router-link>|
    <router-link to="/crearCuenta">Crear cuenta</router-link>
  </div>-->
    <router-view />
    <div class="container">
      <footer class="py-3 my-4">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item">
            <a class="nav-link px-2 text-muted">English</a>
          </li>
          <li class="nav-item">
          <router-link to="/ayuda"
            ><a class="nav-link px-2 text-muted">Ayuda</a></router-link>          </li>
          <li class="nav-item">
            <router-link to="/privacidad"
            >
            <a  class="nav-link px-2 text-muted">Políticas de privacidad</a></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/nosotros"
            >
            <a  class="nav-link px-2 text-muted">Sobre nosotros</a></router-link>
          </li>
        </ul>
        <p class="text-center text-muted">© 2021 Dedún, Inc</p>
      </footer>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    
  }
}
</script>

<style>
html {
  background-color: #faefe8;
}
.fondo {
  background-color: #faefe8;
}

::-webkit-scrollbar {
  display: none;
}
</style>
