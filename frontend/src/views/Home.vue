<template>
  <div class="container col-xl-10 col-xxl-8 px-4 py-5">
    <div class="row align-items-center g-lg-5 py-5">
      <div class="col-lg-7 text-center text-lg-start">
        <div class="col-lg-10 fs-4 font">
          <center class="pb">
            <img src="../assets/logo.png" height="100" />
          </center>
          <p class="f_tamano">
            Dedún es una plataforma para relacionar personas según sus intereses
            y su psicología. Está llamada a ser la herramienta por defecto para
            conocer personas, sin importar cuáles sean los intereses que motiven
            al usuario en su búsqueda de otros usuarios: negocios, hobbies,
            sexo, aprendizaje, no importa: la esencia del negocio es la misma
            sin importar cuáles sean los matices que tengan, la esencia es
            <b>la mente</b>.
          </p>
        </div>
      </div>
      <div class="col-md-10 mx-auto col-lg-5 font">
        <form class="p-4 p-md-5 border rounded-3 bg-light fondo2">
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Correo electronico</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Contraseña</label>
          </div>
          <router-link to="/entrarPerfil">
            <button
              class="w-100 btn btn-lg btn-primary color"
              type="submit"
              v-on:click="login"
            >
              Iniciar Sesión
            </button> </router-link
          >|
          <small class="text-muted"
            ><router-link to="/recuperarContrasena"
              >¿Has olvidado tu contraseña?</router-link
            ></small
          >
          <hr class="my-4" />
          <router-link to="/crearCuenta">
            <button class="w-100 btn btn-sm btn-primary color" type="submit">
              Crear cuenta
            </button>
          </router-link>
        </form>
      </div>
    </div>
  </div>

  <!--
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
  -->
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        await AuthenticationService.login({
          // eslint-disable-line no-mixed-spaces-and-tabs
          email: this.email, // eslint-disable-line no-mixed-spaces-and-tabs
          password: this.password, // eslint-disable-line no-mixed-spaces-and-tabs
        }); // eslint-disable-line no-mixed-spaces-and-tabs
        this.$router.push({ path: "/entrarPerfil" });
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
};
</script>

<style>
.font {
  font-family: AvantGarde !important;
}

.fondo2 {
  background-color: #e1f7f7;
}

.color {
  background-color: #f08240 !important;
  border-color: #f08240 !important;
}

.color:hover {
  background-color: #008b8f !important;
  border-color: #008b8f !important;
}

.pb {
  padding-bottom: 30px;
}

.f_tamano {
  font-size: 23px;
  text-align: justify;
}
</style>
