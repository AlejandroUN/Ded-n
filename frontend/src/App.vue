<template>
  <div id="nav">

    <router-link to="/"> Inicio</router-link> |
    <router-link to="/iniciarSesion">Iniciar Sesion </router-link>|
    <router-link to="/crearCuenta">Crear cuenta</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
}

#nav {
  padding: 19px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #879e34;
}
</style>
