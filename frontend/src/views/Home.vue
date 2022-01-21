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
        <form class="p-4 p-md-5 border rounded-3 bg-light">
          <router-link to="/IniciarSesion">
            <button class="w-100 btn btn-sm btn-primary color" type="submit">
              Iniciar Sesión
            </button>
          </router-link>
          <router-view />

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
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
import Swal from "sweetalert2";
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

        this.$router.replace({ path: "/entrarPerfil" });
      } catch (error) {
        this.error = error.response.data.error;
        Swal.fire({
          icon: "error",
          title: "Error",
          text: this.error,
        });
      }
    },
  },
};
</script>

<style>
.font {
  font-family: AvantGarde !important;
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
