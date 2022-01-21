<template>
  <div>
    <!--<div id="nav">

    <router-link to="/"> Inicio</router-link> |
    <router-link to="/iniciarSesion">Iniciar Sesion </router-link>|
    <router-link to="/crearCuenta">Crear cuenta</router-link>
  </div>-->
    <router-view />
    <footer>Dedún app</footer>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;

  background-color: #FAEFE8;
}
/*
#nav {
  padding: 19px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #008B8F;
}*/

body{
  margin: 0; 
  padding: 0;
  background-color: #FAEFE8;
  min-height: 100vh;
}

/*Esto hace que se puedea bajar en la pagina pero sin que el scrollbar sea visible*/
::-webkit-scrollbar {
    display: none;
}

footer {
  float: bottom;;
}

</style>
