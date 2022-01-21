<template>
  <div class="container">
    <main>
      <div class="py-5 text-center">
        <img
          class="d-block mx-auto mb-4"
          src="../assets/logo.png"
          alt=""
          height="100"
        />        
      </div>

      <div class="row g-5 contenedor">
        <div class="col-md-7 col-lg-6 offset-md-3">
          <h4 class="mb-3">Crear cuenta</h4>
          <form class="needs-validation" novalidate="">
            <div class="row g-3">
              <div class="col-sm-6">
                <label for="firstName" class="form-label">Nombres</label>
                <input
                  type="text"
                  class="form-control"
                  id="firstName"
                  placeholder="Nombres"
                  value=""
                  required=""
                />
                <div class="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>

              <div class="col-sm-6">
                <label for="lastName" class="form-label">Apellidos</label>
                <input
                  type="text"
                  class="form-control"
                  id="lastName"
                  placeholder="Apellidos"
                  value=""
                  required=""
                />
                <div class="invalid-feedback">Valid last name is required.</div>
              </div>

              <div class="col-12">
                <label for="username" class="form-label"
                  >Nombre de usuario</label
                >
                <div class="input-group has-validation">
                  <span class="input-group-text">@</span>
                  <input
                    type="text"
                    class="form-control"
                    id="username"
                    placeholder="Username"
                    required=""
                  />
                  <div class="invalid-feedback">Your username is required.</div>
                </div>
              </div>

              <div class="col-12">
                <label for="email" class="form-label">Email </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="you@example.com"
                />                
                <div class="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>

              <div class="form-group col-12">
                <label class="custom-label col-md-3 display" for="password"
                  >Contrase&ntilde;a</label
                >
                <input
                  id="password"
                  class="form-control col-12 col-sm-10 col-md-7"
                  type="password"
                  placeholder="Contraseña"
                  v-model="password"
                  required
                />
              </div>

              <div class="form-group col-12">
                <label class="custom-label col-md-3 display" for="cPassword"
                  >Confirmar Contrase&ntilde;a</label
                >
                <input
                  id="cPassword"
                  class="form-control col-12 col-sm-10 col-md-7"
                  type="password"
                  placeholder="Confirmar Contraseña"
                  v-model="cPassword"
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
                <label for="country" class="form-label">Genero</label>
                <select class="form-select" id="country" required="">
                  <option value="">Elegir...</option>
                  <option>Hombre</option>
                  <option>Mujer</option>
                  <option>Hombre cisgenero</option>
                  <option>Mujer cisgenero</option>
                  <option>Hombre transgenero</option>
                  <option>Mujer transgenero</option>
                  <option>Persona no binaria</option>
                  <option>Genero fluido</option>
                  <option>Intersexual</option>
                  <option>Prefiero no contestar</option>
                </select>
                <div class="invalid-feedback">
                  Please select a valid gender.
                </div>
              </div>

              <div class="col-md-6">
                <label for="state" class="form-label">Orientación sexual</label>
                <select class="form-select" id="state" required="">
                  <option value="">Elegir...</option>
                  <option>Heterosexual</option>
                  <option>Homosexual</option>
                  <option>Bisexual</option>
                  <option>Pansexual</option>
                  <option>Asexual</option>
                  <option>Antrosexual</option>
                  <option>Demisexual</option>
                  <option>Otro</option>
                  <option>Prefiero no contestar</option>
                </select>
                <div class="invalid-feedback">
                  Please provide a orientation.
                </div>
              </div>              
            </div>

            <hr class="my-4" />
            
            <button class="boton_grande w-100 btn btn-primary btn-lg" type="submit">
              Crear cuenta
            </button>
          </form>
        </div>
      </div>
    </main>

    <footer class="my-5 pt-5 text-muted text-center text-small">
      <p class="mb-1">© 2017–2021 Company Name</p>
      <ul class="list-inline">
        <li class="list-inline-item"><a href="#">Privacy</a></li>
        <li class="list-inline-item"><a href="#">Terms</a></li>
        <li class="list-inline-item"><a href="#">Support</a></li>
      </ul>
    </footer>
  </div>

  <!--
  <div id="app">
    <div class="container">
      <h2>Crea tu cuenta</h2>
    </div>
    <div class="container">
      <div>
        <input
          type="text"
          name="nombres"
          v-model="nombres"
          placeholder="Nombres y Apellidos"
          maxlength="50"
        />
      </div>
      <div>
        <input
          type="text"
          name="email"
          v-model="email"
          placeholder="Correo electrónico"
        />
      </div>
      <div>
        <input
          type="text"
          name="new_user"
          v-model="new_user"
          placeholder="Nombre usuario nuevo"
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          v-model="password"
          placeholder="Contraseña nueva"
          minlength="8"
          maxlength="20"
          v-on:keypress="isImprimible(event)"
        />
      </div>
      <div>
        <form>
          <div><label>Fecha de nacimiento:</label></div>
          <div><input type="date" :max="today" v-model="born" /></div>
        </form>
      </div>
      <div>
        <div><label>Genero y orientación sexual:</label></div>
        <div>
          <select v-model="gender">
            <option>Hombre cisgenero</option>
            <option>Mujer cisgenero</option>
            <option>Hombre transgenero</option>
            <option>Mujer transgenero</option>
            <option>Hombre</option>
            <option>Mujer</option>
            <option>Persona no binaria</option>
            <option>Genero fluido</option>
            <option>Intersexual</option>
            <option>Otro</option>
            <option>Prefiero no contestar</option>
          </select>
          <input
            v-show="otroGenero()"
            type="text"
            v-model="nuevoGenero"
            placeholder="Ingrese genero"
          />
          <select v-model="orientacion">
            <option>Heterosexual</option>
            <option>Homosexual</option>
            <option>Bisexual</option>
            <option>Pansexual</option>
            <option>Asexual</option>
            <option>Antrosexual</option>
            <option>Demisexual</option>
            <option>Otro</option>
            <option>Prefiero no contestar</option>
          </select>
          <input
            v-show="otraOrientacion()"
            type="text"
            v-model="nuevaOrientacion"
            placeholder="Ingrese orientación"
          />
        </div>
      </div>
      <div>
        <button v-on:click="checked">Crear cuenta</button>
      </div>
      {{ nombres }} - {{ email }} - {{ new_user }} - {{ password }} -
      {{ born }} - {{ gender }} - {{ orientacion }} - {{ today }}
    </div>
  </div>
  //-->
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  data() {
    return {
      nombres: "",
      email: "",
      new_user: "",
      password: "",
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
        alert("El correo indicado no es gmail");
      } else if (this.password.length < 8) {
        alert("La contraseña debe tener más de 8 caracteres");
      } else if (dateMax < dateBorn) {
        alert("El usuario es menor de 14 años, no puede registrarse");
      } else {
        try {
          await AuthenticationService.register({
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
          this.$router.push({ path: "/entrarPerfil" });
        } catch (error) {
          this.error = error.response.data.error;
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
body {  
  font-family: AvGard;  
}

.boton_grande{
  background-color: #008b8f ;
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
