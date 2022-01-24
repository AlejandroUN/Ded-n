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
          <div class="modal-content rounded-5 shadow fondo2">
            <section class="mb-4 margen2 fondo2">
              <!--Section heading-->
              <h2 class="h1-responsive font-weight-bold text-center my-4">
                Contactanos
              </h2>
              <!--Section description-->
              <p class="text-center w-responsive mx-auto mb-5">
                ¿Tienes alguna pregunta? Por favor, no dudes en contactarnos
                directamente. Nuestro equipo se comunicará contigo en cuestión
                de horas para ayudarte.
              </p>

              <div class="row">
                <!--Grid column-->
                <div class="col-md-9 mb-md-0 mb-5">
                  <form action="https://formsubmit.co/1danielarmando.1999@gmail.com" method="POST">

                    <div class="row">
                      <div class="col-md-6">
                        <div class="md-form mb-0">
                          <input
                            type="text"
                            id="name"
                            name="Nombre"
                            class="form-control"
                            required
                          />
                          <label for="name" class="">Tu nombre</label>
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="md-form mb-0">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            class="form-control"
                            required
                          />
                          <label for="email" class="">Tu email</label>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-12">
                        <div class="md-form mb-0">
                          <input
                            type="text"
                            id="subject"
                            name="Asunto"
                            class="form-control"
                            required
                          />
                          <label for="subject" class="">Asunto</label>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-12">
                        <div class="md-form">
                          <textarea
                            type="text"
                            id="message"
                            name="Mensaje"
                            rows="2"
                            class="form-control md-textarea"
                            required
                          ></textarea>
                          <label for="message">Tu mensaje</label>
                        </div>
                      </div>
                    </div>

                    <div class="text-center text-md-left">
                      <button class="btn btn-primary color6" type="submit">Send</button>
                    </div>
                  </form>
                </div>
                <!--Grid column-->

                <!--Grid column-->
                <div class="col-md-3 text-center">
                  <ul class="list-unstyled mb-0">
                    <li>
                      <i class="fas fa-map-marker-alt fa-2x"></i>
                      <p>Bogotá, Carrera 45 # 26-85, Bogotá</p>
                    </li>

                    <li>
                      <i class="fas fa-phone mt-4 fa-2x"></i>
                      <p>4°38′08″N 74°04′58″O</p>
                    </li>
                  </ul>
                </div>
                <!--Grid column-->
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
.fuente_tamano {
  font-size: 180% !important;
  padding-top: 3% !important;
}

.margen {
  padding-left: 20% !important;
  padding-right: 20% !important;
}

.margen2 {
  padding: 2% !important;
}

.margen3 {
  padding-left: 4% !important;
  padding-right: 3% !important;
  text-align: justify;
}

.margen4 {
  padding-left: 28% !important;
  padding-right: 20% !important;
}

.margen5 {
  padding-top: 5% !important;
  padding-bottom: 5% !important;
  padding-left: 32% !important;
  padding-right: 20% !important;
}

.color6 {
  background-color: #008b8f !important;
  border-color: #008b8f !important;
}

.color6:hover {
  background-color: #f08240 !important;
  border-color: #f08240 !important;
}

* {
  font-family: AvGard;
}

@font-face {
  font-family: AvGard;
  src: url(AVGARDN_2.TTF);
}
</style>
