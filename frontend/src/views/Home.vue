<template>
  <div id="contenedor_principal">
    <header>
      <center>
        <img src="../assets/logo.png" height="100" />
      </center>
    </header>
    <body>
      <div id="contenedor">
        <div>
          <h1>¿Qué es Dedún?</h1>
          <p>
            Dedún es una plataforma para relacionar personas según sus intereses
            y su psicología. Está llamada a ser la herramienta por defecto para
            conocer personas, sin importar cuáles sean los intereses que motiven
            al usuario en su búsqueda de otros usuarios: negocios, hobbies,
            sexo, aprendizaje, no importa: la esencia del negocio es la misma
            sin importar cuáles sean los matices que tengan, la esencia es
            <b>la mente</b>.
          </p>
        </div>
        <div>
          <h2></h2>
          <router-link to="/iniciarSesion"><button>Iniciar Sesión</button></router-link>
          <router-link to="/crearCuenta"><button>Crear Cuenta</button></router-link>
        </div>
      </div>
      
    </body>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
#contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

#contenedor > div {
  width: 50%;
}

header {
  padding-top: 20px;
  padding-right: 50px;
}

body {
  padding-left: 20px;
}

h1 {
  padding-left: 200px;
  padding-top: 20px;
}
</style>
