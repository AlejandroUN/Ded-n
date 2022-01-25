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
                  Ser capaz de desarrollar un plan y adherirse a él es 
                  la parte más importante de todo proyecto
                  </label>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="0"
                    checked
                    v-model="judg_pers_1"
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
                    v-model="judg_pers_1"
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    En desacuerdo
                  </label>
                </div>
              </div>

              <div class="form-group mb-3">
                <label class="custom-label col-md-12 questions">
                  Para ti es más importante ser organizado que ser 
                  capaz de adaptarte a las circunstancias
                  </label>

                <div class="form-check col-9">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios1"
                    id="exampleRadios"
                    value="0"
                    checked
                    v-model="judg_pers_2"
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
                    v-model="judg_pers_2"
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    En desacuerdo
                  </label>
                </div>
              </div>

              <div class="form-group mb-3">
                <label class="custom-label col-md-12 questions">
                  Tratas de responder a todos tus correos electrónicos lo más pronto 
                  posible y no soportas una bandeja de entrada descuidada
                  </label>

                <div class="form-check col-9">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios2"
                    id="exampleRadios"
                    value="0"
                    checked
                    v-model="judg_pers_3"
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
                    v-model="judg_pers_3"
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    En desacuerdo
                  </label>
                </div>
              </div>

              <div class="form-group mb-3">
                <label class="custom-label col-md-12 questions">
                  Es muy raro que hagas algo simplemente por pura curiosidad
                  </label>

                <div class="form-check col-9">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios3"
                    id="exampleRadios"
                    value="0"
                    checked
                    v-model="judg_pers_4"
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
                    v-model="judg_pers_4"
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    En desacuerdo
                  </label>
                </div>
              </div>

              <div class="form-group mb-3">
                <label class="custom-label col-md-12 questions">
                  Tu casa y tu entorno de trabajo están muy ordenados
                  </label>

                <div class="form-check col-9">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios5"
                    id="exampleRadios"
                    value="0"
                    checked
                    v-model="judg_pers_5"
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
                    v-model="judg_pers_5"
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    En desacuerdo
                  </label>
                </div>
              </div>

              <div class="form-group mb-3">
                <label class="custom-label col-md-12 questions">
                  Tus planes de viaje generalmente están bien pensados
                  </label>

                <div class="form-check col-9">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios6"
                    id="exampleRadios"
                    value="0"
                    checked
                    v-model="judg_pers_6"
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
                    v-model="judg_pers_6"
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    En desacuerdo
                  </label>
                </div>
              </div>

              <div class="form-group mb-3">
                <label class="custom-label col-md-12 questions">
                  Tu estilo de trabajo se parece más a un enfoque metódico y 
                  organizado que a rachas aleatorias de mucha energía
                  </label>

                <div class="form-check col-9">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios7"
                    id="exampleRadios"
                    value="0"
                    checked
                    v-model="judg_pers_7"
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
                    v-model="judg_pers_7"
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    En desacuerdo
                  </label>
                </div>
              </div>

              <div class="form-group mb-3">
                <label class="custom-label col-md-12 questions">
                  Eres más un planificador cuidadoso que un improvisador natural
                  </label>

                <div class="form-check col-9">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios8"
                    id="exampleRadios"
                    value="0"
                    checked
                    v-model="judg_pers_8"
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
                    v-model="judg_pers_8"
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    En desacuerdo
                  </label>
                </div>
              </div>

              <div class="form-group mb-3">
                <label class="custom-label col-md-12 questions">
                  Prefieres tener que dedicar tiempo a desarrollar un 
                  plan detallado que improvisar
                  </label>

                <div class="form-check col-9">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios9"
                    id="exampleRadios"
                    value="0"
                    checked
                    v-model="judg_pers_9"
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
                    v-model="judg_pers_9"
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    En desacuerdo
                  </label>
                </div>
              </div>

              <div class="form-group mb-3">
                <label class="custom-label col-md-12 questions">
                  No tienes dificultades para diseñar una agenda personal de actividades y 
                  adherirte a ella
                  </label>

                <div class="form-check col-9">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios10"
                    id="exampleRadios"
                    value="0"
                    checked
                    v-model="judg_pers_10"
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
                    v-model="judg_pers_10"
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    En desacuerdo
                  </label>
                </div>
              </div>
              <br><br>

              
              <button v-on:click="setData" class="mb-2 btn btn-md rounded-4 btn-primary floatr right color" type="submit">
                Terminar
              </button>
              

              <router-link to="/MBTI3">
              <button  v-on:click="setData" class="mb-2 btn btn-md rounded-4 btn-primary floatl right color" type="submit">
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
      judg_pers_1: "",
      judg_pers_2: "",
      judg_pers_3: "",
      judg_pers_4: "",
      judg_pers_5: "",
      judg_pers_6: "",
      judg_pers_7: "",
      judg_pers_8: "",
      judg_pers_9: "",
      judg_pers_10: "",
      
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
