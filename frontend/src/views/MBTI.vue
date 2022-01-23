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
                  Normalmente no sueles iniciar las conversaciones</label
                >

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="0"
                    checked
                    v-model="ext_intro_1"
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
                    v-model="ext_intro_1"
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    En desacuerdo
                  </label>
                </div>
              </div>

              <div class="form-group mb-3">
                <label class="custom-label col-md-12 questions">
                  Para ti, un libro, película o videojuego interesante
                  normalmente es mejor que un evento social</label
                >

                <div class="form-check col-9">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios1"
                    id="exampleRadios"
                    value="0"
                    checked
                    v-model="ext_intro_2"
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
                    v-model="ext_intro_2"
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    En desacuerdo
                  </label>
                </div>
              </div>

              <div class="form-group mb-3">
                <label class="custom-label col-md-12 questions">
                  Eres una persona relativamente reservada y callada.</label
                >

                <div class="form-check col-9">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios2"
                    id="exampleRadios"
                    value="0"
                    checked
                    v-model="ext_intro_3"
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
                    v-model="ext_intro_3"
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    En desacuerdo
                  </label>
                </div>
              </div>

              <div class="form-group mb-3">
                <label class="custom-label col-md-12 questions">
                  Los eventos sociales te resultan agotadores</label
                >

                <div class="form-check col-9">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios3"
                    id="exampleRadios"
                    value="0"
                    checked
                    v-model="ext_intro_4"
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
                    v-model="ext_intro_4"
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    En desacuerdo
                  </label>
                </div>
              </div>

              <div class="form-group mb-3">
                <label class="custom-label col-md-12 questions">
                  En general, te resulta difícil relajarte cuando hablas delante
                  de muchas personas</label
                >

                <div class="form-check col-9">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios5"
                    id="exampleRadios"
                    value="0"
                    checked
                    v-model="ext_intro_5"
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
                    v-model="ext_intro_5"
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    En desacuerdo
                  </label>
                </div>
              </div>

              <div class="form-group mb-3">
                <label class="custom-label col-md-12 questions">
                  Si la sala está llena te quedas cerca de las paredes y evitas
                  estar en el centro</label
                >

                <div class="form-check col-9">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios6"
                    id="exampleRadios"
                    value="0"
                    checked
                    v-model="ext_intro_6"
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
                    v-model="ext_intro_6"
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    En desacuerdo
                  </label>
                </div>
              </div>

              <div class="form-group mb-3">
                <label class="custom-label col-md-12 questions">
                  No tomas la iniciativa frecuentemente en situaciones
                  sociales</label
                >

                <div class="form-check col-9">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios7"
                    id="exampleRadios"
                    value="0"
                    checked
                    v-model="ext_intro_7"
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
                    v-model="ext_intro_7"
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    En desacuerdo
                  </label>
                </div>
              </div>

              <div class="form-group mb-3">
                <label class="custom-label col-md-12 questions">
                  No sientes que necesitas la aprobación de otros</label
                >

                <div class="form-check col-9">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios8"
                    id="exampleRadios"
                    value="0"
                    checked
                    v-model="ext_intro_8"
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
                    v-model="ext_intro_8"
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    En desacuerdo
                  </label>
                </div>
              </div>

              <div class="form-group mb-3">
                <label class="custom-label col-md-12 questions">
                  Se te hace raro que personas que no conoces bien sean muy
                  amigables contigo</label
                >

                <div class="form-check col-9">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios9"
                    id="exampleRadios"
                    value="0"
                    checked
                    v-model="ext_intro_9"
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
                    v-model="ext_intro_9"
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    En desacuerdo
                  </label>
                </div>
              </div>

              <div class="form-group mb-3">
                <label class="custom-label col-md-12 questions">
                  Piensas bien lo que vas a decir antes de hablar</label
                >

                <div class="form-check col-9">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios10"
                    id="exampleRadios"
                    value="0"
                    checked
                    v-model="ext_intro_10"
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
                    v-model="ext_intro_10"
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    En desacuerdo
                  </label>
                </div>
              </div>

              <br><br>

              <router-link to="/MBTI2">
              <button class="mb-2 btn btn-md rounded-4 btn-primary floatr right color" type="submit">
                Siguiente
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
      ext_intro_1: "",
      ext_intro_2: "",
      ext_intro_3: "",
      ext_intro_4: "",
      ext_intro_5: "",
      ext_intro_6: "",
      ext_intro_7: "",
      ext_intro_8: "",
      ext_intro_9: "",
      ext_intro_10: "",
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
  padding-bottom: 70px;
  padding-top: 70px;
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
