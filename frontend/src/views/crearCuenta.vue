<template>
  <div class="container">
    <main>
      <div class="row align-items-center g-lg-5">
        <header class="font">
          <router-link to="/">
            <img class="float-md-start" src="../assets/logo.png" height="50" />
          </router-link>

          <nav class="nav justify-content-center float-md-end">
            <a
              href="https://en.wikipedia.org/wiki/Myers%E2%80%93Briggs_Type_Indicator"
              class="margen_izquierda"
              ><button
                class="
                  w-100
                  btn btn-lg btn-primary
                  color_fuente
                  color2
                  margen_izquierda
                "
                type="submit"
              >
                Test MBTI
              </button></a
            >

            <a
              href="https://es.wikipedia.org/wiki/Modelo_de_los_cinco_grandes"
              class="margen_izquierda"
            >
              <button
                class="w-100 btn btn-lg btn-primary color_fuente color2"
                type="submit"
              >
                Test Big Five
              </button></a
            >

            <router-link to=""
              ><button
                class="w-100 btn btn-lg btn-primary color_fuente color2"
                type="submit"
              >
                Dónanos
              </button></router-link
            >
          </nav>
        </header>
      </div>

      <div class="row g-5 contenedor">
        <div class="col-md-7 col-lg-6 offset-md-3">
          <br />
          <br />
          <h4 class="mb-3">Crear cuenta</h4>
          
            <div class="row g-3">
              <div class="col-sm-12">
                <label class="form-label">Nombres y Apellidos</label>
                <input
                  type="text"
                  class="form-control"
                  name="nombres"
                  v-model="nombres"
                  maxlength="50"
                  placeholder="Nombres y Apellidos"
                />
              </div>

              <div class="col-12">
                <label class="form-label">Nombre de Usuario </label>
                <input
                  type="text"
                  class="form-control"
                  name="new_user"
                  v-model="new_user"
                  placeholder="Nombre de Usuario"
                />
              </div>

              <div class="col-12">
                <label class="form-label">Email </label>
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  v-model="email"
                  placeholder="you@example.com"
                />
              </div>

              <div class="form-group col-12">
                <label class="custom-label col-md-3 display" for="password"
                  >Contrase&ntilde;a</label
                >
                <input
                  class="form-control col-12 col-sm-10 col-md-7"
                  type="password"
                  name="password"
                  v-model="password"
                  placeholder="Contraseña"
                  minlength="8"
                  maxlength="20"
                  v-on:keypress="isImprimible(event)"
                />
              </div>
              


              <div class="form-group col-12">
                <label class="custom-label col-md-6 display">
                  Confirmar Contrase&ntilde;a
                  </label>
                <input                  
                  class="form-control col-12 col-sm-10 col-md-7"
                  type="password"
                  name="cpassword"
                  placeholder="Confirmar Contraseña"
                  v-model="cPassword"
                  v-on:keypress="isImprimible(event)"
                  required
                  :class="{
                    'is-invalid': cPassword !== '' && cPassword !== password,
                    'is-valid': cPassword !== '' && cPassword === password,
                  }"
                />
              </div>
              

              <div>
                <form>
                  <div><label>Fecha de nacimiento:</label></div>
                  <div><input type="date" :max="today" v-model="born" /></div>
                </form>
              </div>

              <div class="col-md-6">
                <label class="form-label">Genero</label>
                <select class="form-select" v-model="gender">
                  
                  <option>Hombre</option>
                  <option>Mujer</option>
                  <option>Otro</option>
                </select>

                <div class="form-group col-6" v-show="otroGenero()">
                  <label class="custom-label col-md-12 display"
                    >¿Que otro?</label
                  >
                  <input
                    class="form-control col-12 col-sm-10 col-md-7"
                    type="text"
                    v-model="nuevoGenero"
                    placeholder="Ingrese genero"
                  />
                </div>
              </div>

              <div class="col-md-6">
                <label class="form-label">Orientación sexual</label>
                <select class="form-select" v-model="orientacion">
                  
                  <option>Heterosexual</option>
                  <option>Homosexual</option>
                  <option>Bisexual</option>
                  <option>Otro</option>
                </select>

                <div class="form-group col-6" v-show="otraOrientacion()">
                  <label class="custom-label col-md-12 display">¿Cual?</label>
                  <input
                    class="form-control col-12 col-sm-10 col-md-7 display"
                    type="text"
                    v-model="nuevaOrientacion"
                    placeholder="Ingrese orientación"
                  />
                </div>
              </div>
              <hr class="my-4" />

              <button
                class="mb-2 btn btn-sm rounded-4 btn-primary floatr right color"
                type="submit"
                v-on:click="checked"
              >
              Crear
              </button>

            </div>
          
        </div>
      </div>
    </main>
    <!--
    <div>
      {{ nombres }} - {{ email }} - {{ new_user }} - {{ password }} -
      {{ born }} - {{ gender }} - {{ orientacion }} - {{ today }}
    </div>
      //-->

    <footer class="my-5 pt-5 text-muted text-center text-small">
      <p class="mb-1">© 2017–2021 Company Name</p>
      <ul class="list-inline">
        <li class="list-inline-item"><a href="#">Privacy</a></li>
        <li class="list-inline-item"><a href="#">Terms</a></li>
        <li class="list-inline-item"><a href="#">Support</a></li>
      </ul>
    </footer>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      nombres: "",
      email: "",
      new_user: "",
      password: "",
      cPassword: "",
      born: new Date().toISOString().substr(0, 10),
      today: new Date().toISOString().substr(0, 10),
      gender: "",
      orientacion: "",
      nuevoGenero: "",
      nuevaOrientacion: "",
    };
  },
  methods: {
    async checked() {
      var dateMax = new Date();
      dateMax.setMonth(dateMax.getMonth() - 168);
      var dateBorn = new Date(this.born);

      if (!this.email.includes("@gmail.com")) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "El correo indicado no es gmail",
        });
      } else if (this.password.length < 8) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "La contraseña debe tener más de 8 caracteres",
        });
      } 

      else if (this.password !== this.cPassword) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Las contraseñas no coinciden",
        });        
      }
      
      else if (dateMax < dateBorn) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "El usuario es menor de 14 años, no puede registrarse",
        });
      } else {
        try {
            //We keep track of the backend response
            const response = await AuthenticationService.register({
            // eslint-disable-line no-mixed-spaces-and-tabs
            name: this.nombres,
            email: this.email, // eslint-disable-line no-mixed-spaces-and-tabs
            nick: this.new_user,
            password: this.password, // eslint-disable-line no-mixed-spaces-and-tabs
            birth: this.born,
            gender: this.gender,
            orientation: this.orientacion,
            newgender: this.nuevoGenero,
            neworientation: this.nuevaOrientacion,
          }); // eslint-disable-line no-mixed-spaces-and-tabs
		//This is going to call our method setToken in the store file
		//which is gonna call our mutation setToken
		//which is gonna update our state to token
			this.$store.dispatch('setToken', response.data.token)
		//And the same with token
			this.$store.dispatch('setUser', response.data.user)
          this.$router.push({ path: "/entrarPerfil" });
          Swal.fire({
            icon: "success",
            title: "Creado",
            text: "El usuario ha sido registrado correctamente",
           
          });
        } catch (error) {
          this.error = error.response.data.error;
          Swal.fire({
            icon: "error",
            title: "Error",
            text: this.error,
          });
        }
      }
    },
    otroGenero() {
      if (this.gender == "Otro") {
        return true;
      } else {
        return false;
      }
    },
    otraOrientacion() {
      if (this.orientacion == "Otro") {
        return true;
      } else {
        return false;
      }
    },

    isImprimible: function (evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (charCode > 3 && (charCode < 32 || charCode > 126)) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
  },
};
</script>

<style scoped>
.botoncito:hover {
  background-color: #008b8f !important;
  border-color: #008b8f !important;
}

* {
  font-family: AvGard;
}

.botoncito {
  background-color: #f08240;
  border-color: aliceblue;
}

@font-face {
  font-family: AvGard_N;
  src: url(AVGARDD_2.TTF);
}

@font-face {
  font-family: AvGard_C;
  src: url(AVGARDDO_2.TTF);
}

@font-face {
  font-family: AvGard;
  src: url(AVGARDN_2.TTF);
}
</style>
