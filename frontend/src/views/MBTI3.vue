<template>
  <div class="container col-xl-12 col-xxl-8 py-3">
    <div class="row align-items-center g-lg-5">
      <header class="font">
        <router-link to="/"
          ><img src="../assets/logo.png" height="50"
        /></router-link>
        <!--<img src="../assets/logo.png" height="50"/>-->
        <nav class="nav justify-content-center float-md-end right">
          <router-link to="/"
            ><button
              class="w-100 btn btn-lg btn-primary color_fuente color2"
              type="submit"
            >
              Inicio
            </button></router-link
          >
          <router-link to="/contacta"
            ><button
              class="btn btn-lg btn-primary color_fuente color2"
              type="submit"
            >
              ¡Dónanos!
            </button></router-link
          >
        </nav>
      </header>

      <div
        class="
          modal modal-signin
          position-static
          d-block
          py-5
          bg
          iniciar_sesion_blue_container
        "
        tabindex="-1"
        role="dialog"
        id="modalSignin"
      >
        <div class="float-none cajitaMIBT" role="document">
          <div class="modal-content rounded-5 shadow">
            <div class="modal-header p-5 pb-4 border-bottom-0 fondo3 font">
              <h2 class="fw-bold mb-0">Test MBTI</h2>
            </div>

            <div class="modal-body p-5 pt-0 fondo3">
                
              <div class="form-group mb-3">
                <label class="custom-label col-md-12 questions">
                  Cuando se trata del trabajo en equipo, tener razón es más importante que ser cooperativo
                  </label>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="0"
                    checked
                    v-model="think_feel_1"
                  />
                  <label class="form-check-label" for="exampleRadios1">
                    De acuerdo
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios2"
                    value="1"
                    v-model="think_feel_1"
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    En desacuerdo
                  </label>
                </div>
              </div>

              <div class="form-group mb-3">
                <label class="custom-label col-md-12 questions">
                  Cuando hay un debate, te importa más ganarlo que 
                  asegurarte de que nadie se sienta molesto
                  </label>

                <div class="form-check col-9">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios1"
                    id="exampleRadios"
                    value="0"
                    checked
                    v-model="think_feel_2"
                  />
                  <label class="form-check-label" for="exampleRadios1">
                    De acuerdo
                  </label>
                </div>
                <div class="form-check col-9">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios1"
                    id="exampleRadios"
                    value="1"
                    v-model="think_feel_2"
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    En desacuerdo
                  </label>
                </div>
              </div>

              <div class="form-group mb-3">
                <label class="custom-label col-md-12 questions">
                  En una discusión o debate, debería ser más importante la verdad 
                  que la susceptibilidad de la gente
                  </label>

                <div class="form-check col-9">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios2"
                    id="exampleRadios"
                    value="0"
                    checked
                    v-model="think_feel_3"
                  />
                  <label class="form-check-label" for="exampleRadios1">
                    De acuerdo
                  </label>
                </div>
                <div class="form-check col-9">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios2"
                    id="exampleRadios"
                    value="1"
                    v-model="think_feel_3"
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    En desacuerdo
                  </label>
                </div>
              </div>

              <div class="form-group mb-3">
                <label class="custom-label col-md-12 questions">
                  Con frecuencia te resulta difícil entender los sentimientos de otras personas
                  </label>

                <div class="form-check col-9">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios3"
                    id="exampleRadios"
                    value="0"
                    checked
                    v-model="think_feel_4"
                  />
                  <label class="form-check-label" for="exampleRadios1">
                    De acuerdo
                  </label>
                </div>
                <div class="form-check col-9">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios3"
                    id="exampleRadios"
                    value="1"
                    v-model="think_feel_4"
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    En desacuerdo
                  </label>
                </div>
              </div>

              <div class="form-group mb-3">
                <label class="custom-label col-md-12 questions">
                  Muy raramente te preocupa cómo afectan tus acciones a otras personas
                  </label>

                <div class="form-check col-9">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios5"
                    id="exampleRadios"
                    value="0"
                    checked
                    v-model="think_feel_5"
                  />
                  <label class="form-check-label" for="exampleRadios1">
                    De acuerdo
                  </label>
                </div>
                <div class="form-check col-9">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios5"
                    id="exampleRadios"
                    value="1"
                    v-model="think_feel_5"
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    En desacuerdo
                  </label>
                </div>
              </div>

              <div class="form-group mb-3">
                <label class="custom-label col-md-12 questions">
                  Como progenitor, preferirías que tu hijo fuera inteligente antes que amable
                  </label>

                <div class="form-check col-9">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios6"
                    id="exampleRadios"
                    value="0"
                    checked
                    v-model="think_feel_6"
                  />
                  <label class="form-check-label" for="exampleRadios1">
                    De acuerdo
                  </label>
                </div>
                <div class="form-check col-9">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios6"
                    id="exampleRadios"
                    value="1"
                    v-model="think_feel_6"
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    En desacuerdo
                  </label>
                </div>
              </div>

              <div class="form-group mb-3">
                <label class="custom-label col-md-12 questions">
                  Controlas tus emociones más de lo que ellas a ti
                  </label>

                <div class="form-check col-9">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios7"
                    id="exampleRadios"
                    value="0"
                    checked
                    v-model="think_feel_7"
                  />
                  <label class="form-check-label" for="exampleRadios1">
                    De acuerdo
                  </label>
                </div>
                <div class="form-check col-9">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios7"
                    id="exampleRadios"
                    value="1"
                    v-model="think_feel_7"
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    En desacuerdo
                  </label>
                </div>
              </div>

              <div class="form-group mb-3">
                <label class="custom-label col-md-12 questions">
                  Consideras que la lógica generalmente es más importante que el corazón 
                  cuando se trata de tomar decisiones importantes
                  </label>

                <div class="form-check col-9">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios8"
                    id="exampleRadios"
                    value="0"
                    checked
                    v-model="think_feel_8"
                  />
                  <label class="form-check-label" for="exampleRadios1">
                    De acuerdo
                  </label>
                </div>
                <div class="form-check col-9">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios8"
                    id="exampleRadios"
                    value="1"
                    v-model="think_feel_8"
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    En desacuerdo
                  </label>
                </div>
              </div>

              <div class="form-group mb-3">
                <label class="custom-label col-md-12 questions">
                  Si tu amigo se siente triste por algo, es más probable que le 
                  sugieras formas de tratar el problema a que le ofrezcas apoyo emocional
                  </label>

                <div class="form-check col-9">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios9"
                    id="exampleRadios"
                    value="0"
                    checked
                    v-model="think_feel_9"
                  />
                  <label class="form-check-label" for="exampleRadios1">
                    De acuerdo
                  </label>
                </div>
                <div class="form-check col-9">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios9"
                    id="exampleRadios"
                    value="1"
                    v-model="think_feel_9"
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    En desacuerdo
                  </label>
                </div>
              </div>

              <div class="form-group mb-3">
                <label class="custom-label col-md-12 questions">
                  No buscarías justificar un crimen aunque creas que pudo hacerse por un buen motivo
                  </label>

                <div class="form-check col-9">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios10"
                    id="exampleRadios"
                    value="0"
                    checked
                    v-model="think_feel_10"
                  />
                  <label class="form-check-label" for="exampleRadios1">
                    De acuerdo
                  </label>
                </div>
                <div class="form-check col-9">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios10"
                    id="exampleRadios"
                    value="1"
                    v-model="think_feel_10"
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    En desacuerdo
                  </label>
                </div>
              </div>

              <br><br>

              <router-link to="/MBTI4">
              <button class="mb-2 btn btn-md rounded-4 btn-primary floatr right color" type="submit">
                Siguiente
              </button>
              </router-link>

              <router-link to="/MBTI2">
              <button class="mb-2 btn btn-md rounded-4 btn-primary floatl right color" type="submit">
                Volver
              </button>
              </router-link>

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
      think_feel_1: "",
      think_feel_2: "",
      think_feel_3: "",
      think_feel_4: "",
      think_feel_5: "",
      think_feel_6: "",
      think_feel_7: "",
      think_feel_8: "",
      think_feel_9: "",
      think_feel_10: "",
      
    };
  },
  methods: {},
};
</script>

<style>

.questions {
  font-size: 150%;
}

* {
  font-family: AvGard;
}

@font-face {
  font-family: AvGard;
  src: url(AVGARDN_2.TTF);
}

.cajitaMIBT {
  padding-left: 105px;
  padding-right: 105px;
}
.iniciar_sesion_blue_container {
  background-color: #008b8f !important;
}
.fondo3 {
  background-color: #faefe8 !important;
}
</style>
