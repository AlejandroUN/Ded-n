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

     
          <router-link to="">
            <button class="w-100 btn btn-lg btn-primary">
              Iniciar Sesión
            </button>
          </router-link>
          <router-link to="">
            <button class="w-100 btn btn-lg btn-primary">
              Crear cuenta
            </button>
          </router-link>
       



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

.blanco {
  color: white;
}
</style>
