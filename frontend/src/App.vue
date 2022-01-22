<template>
  <div class="fondo">
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
            <a href="#" class="nav-link px-2 text-muted">English</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-muted">Ayuda</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-muted">Políticas de privacidad</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-muted">Sobre nosotros</a>
          </li>
        </ul>
        <p class="text-center text-muted">© 2021 Dedún, Inc</p>
      </footer>
    </div>
  </div>
</template>

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
