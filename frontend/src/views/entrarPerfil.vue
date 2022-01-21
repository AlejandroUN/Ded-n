<template>
  <div id="app">
    <header class="margin font">
      <img src="../assets/logo.png" height="50" />
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
    <div class="fondo2 font bot_margin">
      <center class="top_margin blanco"><h1>Entra a tu perfil</h1></center>

      <div class="container marketing">
        <!-- Three columns of text below the carousel -->
        <div class="row mb-2">
          <div class="col-md-6">
            <center>
              <img
                class="bd-placeholder-img rounded-circle"
                width="160"
                height="160"
                role="img"
                aria-label="Placeholder: 140x140"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                src="https://image.freepik.com/foto-gratis/mejores-amigos-abrazandose-mientras-promueven-diversidad_23-2148529062.jpg"
              />
            </center>

            <center class="top_margin">
              <router-link to=""
                ><button class="btn btn-lg btn-primary color3" type="submit">
                  Personal
                </button></router-link
              >
            </center>
          </div>

          <!-- /.col-lg-4 -->
          <div class="col-md-6">
            <center>
              <img
                class="bd-placeholder-img rounded-circle"
                width="160"
                height="160"
                role="img"
                aria-label="Placeholder: 140x140"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                src="https://argentinosenirlanda.ie/wp-content/uploads/2017/04/Pr%C3%A1cticas-profesionales-en-Irlanda.jpg"
              />
            </center>

            <center class="top_margin">
              <router-link to="/testMaestros"
                ><button class="btn btn-lg btn-primary color3" type="submit">
                  Profesional
                </button></router-link
              >
            </center>
          </div>
        </div>
        <!-- /.row -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style>
.fondo2 {
  background-color: #008b8f !important;
}
.font {
  font-family: AvantGarde !important;
}
.justify {
  text-align: justify;
}
.top_margin {
  padding-top: 20px;
}
.bot_margin {
  padding-bottom: 30px;
}
.color3 {
  background-color: #e1f7f7 !important;
  border-color: #e1f7f7 !important;
  color: black !important;
}

.color3:hover {
  background-color: #803d14 !important;
  border-color: #803d14 !important;
  color: white !important;
}

.blanco{
  color: white;
}
</style>
