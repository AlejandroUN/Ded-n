<template>
  <div id="app">
    <div class="container col-xl-12 col-xxl-8 py-3">
      <header class="margin font">
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
            

            <div class="fondo3">
              <div class="modal-header p-5 pb-4 border-bottom-0 fondo3">
                <p class="fuente_tamano font">Es un abogado, empresario y político colombiano. Actualmente se desempeña como alcalde de Soacha para el periodo 2020 – 2023.</p>
                <img src="../assets/nosotros/Arturo.png" height="300" />
                
              </div>
              <div class="modal-header p-5 pb-4 border-bottom-0 fondo3">
                <img src="../assets/nosotros/cristian.png" height="300" />
                <p class="fuente_tamano font">Es un político, revolucionario y dictador soviético, secretario general del Comité Central del Partido Comunista de la Unión Soviética entre 1922 y 1952, y presidente del Consejo de Ministros de la Unión Soviética entre 1941 y 1953. Aunque inicialmente presidía un liderazgo colectivo como primero entre iguales con Lev Kámenev y Grigori Zinóviev, a los que ejecutó posteriormente, hacia los años 30 ya se había convertido en dictador de facto de la Unión Soviética.</p>
              </div>
              <div class="modal-header p-5 pb-4 border-bottom-0 fondo3">
                <p class="fuente_tamano font">Es el actual rey de España, título por el que ostenta la jefatura del Estado y el mando supremo de las Fuerzas Armadas.</p>
                <img src="../assets/nosotros/daniel.png" height="300" />
                
              </div>
              <div class="modal-header p-5 pb-4 border-bottom-0 fondo3">
                <img src="../assets/nosotros/david.png" height="300" />
                <p class="fuente_tamano font">Es un docente, rondero, dirigente sindical y político peruano. Es el presidente de la República del Perú desde el 28 de julio de 2021</p>
              </div>
              <div class="modal-header p-5 pb-4 border-bottom-0 fondo3">
                <p class="fuente_tamano font">Es un escritor, ensayista y filósofo francés, autor de numerosas obras de diversos géneros que lo convirtieron en uno de los mayores y más crudos literatos de la literatura universal. Entre sus obras están Los crímenes del amor, Aline y Valcour y numerosas obras de diversos géneros. También le son atribuidas Justine o los infortunios de la virtud, Juliette o las prosperidades del vicio y La filosofía en el tocador, entre otras.</p>
                <img src="../assets/nosotros/gabriel.png" height="300" />
                
              </div>
              <div class="modal-header p-5 pb-4 border-bottom-0 fondo3">
                <img src="../assets/nosotros/ivan.png" height="300" />
                <p class="fuente_tamano font">Es un político francés, vigesimoquinto presidente de la República Francesa y copríncipe de Andorra desde 2017</p>
              </div>
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
      email: "",
      password: "",
    };
  },
  methods: {},
};
</script>

<style></style>
