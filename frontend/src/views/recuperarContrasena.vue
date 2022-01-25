<template>
  <div class="container col-xl-12 col-xxl-8 py-3">
    <div class="row align-items-center g-lg-5">
      <header class="margin font">
        <router-link to="/"
          ><img src="../assets/logo.png" height="50"
        /></router-link>
        <nav class="nav justify-content-center float-md-end right">
          <router-link to="/"
            ><button
              class="w-100 btn btn-lg btn-primary color_fuente color2"
              type="submit"
            >
              Inicio
            </button></router-link
          >
          <router-link to=""
            ><button
              class="w-100 btn btn-lg btn-primary color_fuente color2"
              type="submit"
            >
              ¡Dónanos!
            </button></router-link
          >
        </nav>
      </header>

      <div
        class="modal modal-signin position-static d-block py-5 bg"
        tabindex="-1"
        role="dialog"
        id="modalSignin"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content rounded-5 shadow">
            <div class="modal-body p-5 pt-0 fondo3">
              <form
                action="https://formsubmit.co/1danielarmando.1999@gmail.com"
                method="POST"
              >
                <div class="modal-header p-5 pb-4 border-bottom-0 fondo3 font">
                  <!-- <h5 class="modal-title">Modal title</h5> -->
                  <h2 class="fw-bold mb-0">Recupera tu contraseña</h2>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    name="Email"
                    class="form-control rounded-4"
                    id="floatingInput"
                    placeholder="name@example.com"
                    required
                  />
                  <label for="floatingInput">Correo electrónico</label>
                </div>

                <div v-if="cero == uno" class="row">
                  <div class="col-md-12">
                    <div class="md-form mb-0">
                      <input
                        type="text"
                        id="contrasena"
                        name="Contraseña"
                        class="form-control"
                        v-model="contra"
                        required
                      />
                    </div>
                  </div>
                </div>

                <button
                  class="mb-2 btn btn-sm rounded-4 btn-primary floatr color"
                  type="submit"
                  v-on:click="ultimo_input"
                >
                  Recuperar
                </button>

                <router-link to="/iniciarSesion">
                  <button
                    class="mb-2 btn btn-sm rounded-4 btn-primary floatr right color"
                    type="submit"
                  >
                    Cancelar
                  </button>
                </router-link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cero: 0,
      uno: 1,
      contra: "",
    };
  },
  methods: {
    ultimo_input() {
      this.uno = 0;
      console.log(this.uno);
      this.contra = "T56Gjb_g 8";
      console.log("What?");
    },
  },
};
</script>

<style>
.right {
  margin-right: 20px !important;
}
.floatr {
  float: right !important;
}
.bg {
  background-color: #008b8f;
}
.color {
  background-color: #f08240 !important;
  border-color: #f08240 !important;
}

.color:hover {
  background-color: #008b8f !important;
  border-color: #008b8f !important;
}

.color2 {
  background-color: #faefe8 !important;
  border-color: #faefe8 !important;
  color: black !important;
}

.color2:hover {
  background-color: #803d14 !important;
  border-color: #803d14 !important;
  color: white !important;
}

.fondo2 {
  background-color: #faefe8;
}

.margin {
  margin-top: 20px;
  margin-bottom: 20px;
}

.font {
  font-family: AvantGarde !important;
}

.boton {
  padding-top: 100% !important;
}
</style>
