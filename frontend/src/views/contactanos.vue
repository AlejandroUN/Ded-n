<template>
  <div id="app">
    <div class="container col-xl-12 col-xxl-8 py-3">
      <header class="margin">
        <router-link to="/">
          <img src="../assets/logo.png" height="50" />
        </router-link>
        <nav class="nav justify-content-center float-md-end right">
          <router-link to="/"
            ><button
              class="w-100 btn btn-lg btn-primary color_fuente color2"
              type="submit"
            >
              Inicio
            </button></router-link
          >
        </nav>
      </header>

      <div
        class="modal modal-signin position-static d-block bg margen2"
        tabindex="-1"
        role="dialog"
        id="modalSignin"
      >
        <div>
          <div class="modal-content rounded-5 shadow">
            <p class="fw-bold mb-0 fondo3 fuente_tamano margen3">
              La mejor donación que nos puedes hacer es hacer parte nuestro
              proyecto; sin embargo, si deseas apoyarnos con algo más que eso,
              puedes donarnos:
            </p>

            <div class="margen fondo3">
              <div class="modal-header p-5 pb-4 border-bottom-0 fondo3">
                <img src="../assets/nequi.png" height="50" />
                <p class="fuente_tamano font">3015921705</p>
              </div>
              <div class="modal-header p-5 pb-4 border-bottom-0 fondo3">
                <img src="../assets/daviplata.png" height="28" />
                <p class="fuente_tamano font">3204571620</p>
              </div>
              <div class="modal-header p-5 pb-4 border-bottom-0 fondo3">
                <img src="../assets/rappi.png" height="100" />
                <p class="fuente_tamano font">3224591233</p>
              </div>
              <div class="margen4"><img src="../assets/logo_copia.png" height="100" /></div>
              <div class="margen5"><h1>¡GRACIAS!</h1></div>
              
            </div>

            

          </div>
          
        </div>
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
        this.$router.push({ path: "/entrarPerfil" });
        Swal.fire({
          icon: "success",
          title: "Login",
          text: "El usuario ha entrado correctamente",
        });
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
.fuente_tamano {
  font-size: 180% !important;
  padding-top: 3% !important;
}

.margen{
  padding-left: 20% !important;
  padding-right: 20% !important;
}

.margen2{
  padding: 2% !important;
}

.margen3{
padding-left: 4% !important;
padding-right: 3% !important;
text-align: justify;
}

.margen4{
  padding-left: 28% !important;
  padding-right: 20% !important;
}

.margen5{
  padding-top: 5% !important;
  padding-bottom: 5% !important;
  padding-left: 32% !important;
  padding-right: 20% !important;
}

* {
  font-family: AvGard;
}

@font-face {
  font-family: AvGard;
  src: url(AVGARDN_2.TTF);
}
</style>
