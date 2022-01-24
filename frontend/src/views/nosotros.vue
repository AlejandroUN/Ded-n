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
                <div class="p_right">
                  <center><h1>Daniel Arthuro Quevedo Ayala</h1></center>
                  <p class="fuente_tamano">
                    Estudiante de ingeniería en sistemas y computación de Novena
                    matrícula, oriundo de Soacha-Cundinamarca, experto en diseño
                    de interfaces gráficas, se desempeña como consultor y
                    gerente del departamento de diseño dentro de Dedún.
                  </p>
                </div>
                <img src="../assets/nosotros/Arturo.png" height="300" />
              </div>
              <div class="modal-header p-5 pb-4 border-bottom-0 fondo3">
                <img src="../assets/nosotros/gabriel.png" height="300" />
                <div class="p_left">
                  <center><h1>Gabriel Enrique Ramirez León</h1></center>
                  <p class="fuente_tamano">
                    Estudiante de ingeniería en sistemas y computación de Décima
                    matricula, oriundo de Bogotá DC., conocedor de diversas
                    herramientas y lenguajes de programación entre los que
                    destacan node.js y Python, amplia experiencia y
                    conocimientos como desarrollador Backend, se desempeña como
                    Scrum Master del equipo de desarrolladores Backend de Dedún.
                  </p>
                </div>
              </div>
              <div class="modal-header p-5 pb-4 border-bottom-0 fondo3">
                <div class="p_right">
                  <center><h1>Cristian Alejandro Chavez Becerra</h1></center>
                  <p class="fuente_tamano">
                    Estudiante de ingeniería en sistemas y computación de Décima
                    matricula, oriundo de Duitama-Boyacá, con grandes dotes en
                    diseño, desarrollo, implementación y análisis de bases de
                    datos, tanto relacionales como no relacionales, se desempeña
                    presidente del departamento de análisis de datos de Dedún.
                  </p>
                </div>
                <img src="../assets/nosotros/cristian.png" height="300" />
              </div>
              <div class="modal-header p-5 pb-4 border-bottom-0 fondo3">
                <img src="../assets/nosotros/daniel.png" height="300" />
                <div class="p_left">
                  <center><h1>Daniel Armando Zuñiga Espinosa</h1></center>
                  <p class="fuente_tamano">
                    Estudiante de ingeniería en sistemas y computación de Décima
                    matricula, oriundo de Neiva-Huila, conocedor de diversas
                    herramientas y lenguajes de programación entre los que
                    destacan el framework de Vue y Java, amplia experiencia y
                    conocimientos como desarrollador Frontend, se desempeña como
                    Scrum Master del equipo de desarrolladores Frontend de
                    Dedún.
                  </p>
                </div>
              </div>
              <div class="modal-header p-5 pb-4 border-bottom-0 fondo3">
                <div class="p_right">
                  <center><h1>Juan David González Muñoz</h1></center>
                  <p class="fuente_tamano">
                    Estudiante de ingeniería de sistemas y computación de Octava
                    matrícula, oriundo de Bogotá DC., experto en marketing
                    empresarial y campañas publicitarias, amplia experiencia en
                    el área desarrollada tras un largo y prominente historial,
                    cuenta con múltiples habilidades sociales y comunicativas y
                    una excelente visión de negocios, se desempeña como
                    presidente del área de marketing y relaciones comerciales de
                    Dedún.
                  </p>
                </div>
                <img src="../assets/nosotros/david.png" height="300" />
              </div>
              <div class="modal-header p-5 pb-4 border-bottom-0 fondo3">
                <img src="../assets/nosotros/ivan.png" height="300" />
                <div class="p_left">
                  <center><h1>Iván Alejandro Cruz Tole</h1></center>
                  <p class="fuente_tamano">
                    Estudiante de ingeniería en sistemas y computación de
                    Septima matrícula, oriundo de Bogotá DC., posee amplia
                    experiencia como emprendedor de compañías Tech con presencia
                    en Norte América y Europa, genio empresarial extrovertido y
                    entusiasta, se desempeña como CEO de Dedún y rostro visible
                    de la empresa.
                  </p>
                </div>
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

<style>
.p_left {
  padding-left: 5% !important;
}
.p_right {
  padding-right: 5% !important;
}
</style>
