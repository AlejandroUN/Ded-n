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
          <router-link to=""
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
                  Te consideras una persona más práctica que creativa</label
                >

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="0"
                    checked
                    v-model="sens_int_1"
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
                    v-model="sens_int_1"
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    En desacuerdo
                  </label>
                </div>
              </div>

              <div class="form-group mb-3">
                <label class="custom-label col-md-12 questions">
                  Es muy raro que te dejes llevar por fantasías o ideas</label
                >

                <div class="form-check col-9">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios1"
                    id="exampleRadios"
                    value="0"
                    checked
                    v-model="sens_int_2"
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
                    v-model="sens_int_2"
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    En desacuerdo
                  </label>
                </div>
              </div>

              <div class="form-group mb-3">
                <label class="custom-label col-md-12 questions">
                  Tus sueños tienden a concentrarse en el mundo real y sus acontecimientos</label
                >

                <div class="form-check col-9">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios2"
                    id="exampleRadios"
                    value="0"
                    checked
                    v-model="sens_int_3"
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
                    v-model="sens_int_3"
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    En desacuerdo
                  </label>
                </div>
              </div>

              <div class="form-group mb-3">
                <label class="custom-label col-md-12 questions">
                  No sueles pensar en las razones de la existencia humana</label
                >

                <div class="form-check col-9">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios3"
                    id="exampleRadios"
                    value="0"
                    checked
                    v-model="sens_int_4"
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
                    v-model="sens_int_4"
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    En desacuerdo
                  </label>
                </div>
              </div>

              <div class="form-group mb-3">
                <label class="custom-label col-md-12 questions">
                  No sueles fantasear con planes e ideas nuevas</label
                >

                <div class="form-check col-9">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios5"
                    id="exampleRadios"
                    value="0"
                    checked
                    v-model="sens_int_5"
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
                    v-model="sens_int_5"
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    En desacuerdo
                  </label>
                </div>
              </div>

              <div class="form-group mb-3">
                <label class="custom-label col-md-12 questions">
                  No te consideras un soñador</label
                >

                <div class="form-check col-9">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios6"
                    id="exampleRadios"
                    value="0"
                    checked
                    v-model="sens_int_6"
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
                    v-model="sens_int_6"
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    En desacuerdo
                  </label>
                </div>
              </div>

              <div class="form-group mb-3">
                <label class="custom-label col-md-12 questions">
                  Por lo general confías más en tu experiencia que en tu imaginación</label
                >

                <div class="form-check col-9">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios7"
                    id="exampleRadios"
                    value="0"
                    checked
                    v-model="sens_int_7"
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
                    v-model="sens_int_7"
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    En desacuerdo
                  </label>
                </div>
              </div>

              <div class="form-group mb-3">
                <label class="custom-label col-md-12 questions">
                  Normalmente no tienes varias cosas en la cabeza a la vez</label
                >

                <div class="form-check col-9">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios8"
                    id="exampleRadios"
                    value="0"
                    checked
                    v-model="sens_int_8"
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
                    v-model="sens_int_8"
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    En desacuerdo
                  </label>
                </div>
              </div>

              <div class="form-group mb-3">
                <label class="custom-label col-md-12 questions">
                  El futuro más que emocionarte, te preocupa</label
                >

                <div class="form-check col-9">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios9"
                    id="exampleRadios"
                    value="0"
                    checked
                    v-model="sens_int_9"
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
                    v-model="sens_int_9"
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    En desacuerdo
                  </label>
                </div>
              </div>

              <div class="form-group mb-3">
                <label class="custom-label col-md-12 questions">
                  Normalmente te interesa saber cómo funcionan las cosas</label
                >

                <div class="form-check col-9">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios10"
                    id="exampleRadios"
                    value="0"
                    checked
                    v-model="sens_int_10"
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
                    v-model="sens_int_10"
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    En desacuerdo
                  </label>
                </div>
              </div>

              <br><br>

              <router-link to="/MBTI">
              <button class="mb-2 btn btn-md rounded-4 btn-primary floatl right color" type="submit">
                Volver
              </button>
              </router-link>

              
              <button v-on:click="setData"  class="mb-2 btn btn-md rounded-4 btn-primary floatr right color" type="submit">
                Siguiente
              </button>
            
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
      sens_int_1: "",
      sens_int_2: "",
      sens_int_3: "",
      sens_int_4: "",
      sens_int_5: "",
      sens_int_6: "",
      sens_int_7: "",
      sens_int_8: "",
      sens_int_9: "",
      sens_int_10: "",
      
    };
  },
  methods: {
    setData(){
      
      this.$emit("getData", this.resp);
    },
  },
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
