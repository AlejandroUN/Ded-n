<template>
  <div>
    <div class="azuloscuro">
      <div class="container col-xl-12 col-xxl-8 py-3">
        <div class="row align-items-center g-lg-5">
          <header>
            <router-link to="/"
              ><img src="../assets/logo.png" height="70"
            /></router-link>
            <!--<img src="../assets/logo.png" height="50"/>-->
            <nav class="nav justify-content-center float-md-end right">
              <router-link to="/"
                ><button
                  class="w-100 btn btn-lg btn-primary nav_boton"
                  type="submit"
                >
                  Inicio
                </button></router-link
              >
              <router-link to=""
                ><button class="btn btn-lg btn-primary nav_boton" type="submit">
                  ¡Dónanos!
                </button></router-link
              >
              <router-link to="/"
                ><button class="btn btn-lg btn-primary nav_boton" type="submit">
                  Cerrar Sesión
                </button></router-link
              >
            </nav>
          </header>
        </div>
      </div>
    </div>

    <main role="main">
      <br />
      <br />

      <section class="jumbotron text-center">
        <div class="container">
          <h1 class="jumbotron-heading">¡Bienvenido a tus matches!</h1>
          <p class="lead text-muted">.</p>
          <p class="lead">
            ¡Hemos calculado que eres compatible con estos usuarios!
          </p>
        </div>
      </section>

      <div class="album py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <img
                  class="card-img-top"
                  data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                  alt="Thumbnail [100%x225]"
                  style="
                    height: 200px;
                    width: 200px;
                    margin-left: 110px;
                    margin-top: 30px;
                  "
                  src="../assets/mango.png"
                  data-holder-rendered="true"
                />
                <div class="card-body">
                  <p class="card-text match_texto">{{nombre1}}</p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    {{email1}}
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <img
                  class="card-img-top"
                  data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                  alt="Thumbnail [100%x225]"
                  style="
                    height: 200px;
                    width: 200px;
                    margin-left: 110px;
                    margin-top: 30px;
                  "
                  src="../assets/strawberry.png"
                  data-holder-rendered="true"
                />
                <div class="card-body">
                  <p class="card-text match_texto">{{nombre2}}</p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    {{email2}}
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <img
                  class="card-img-top"
                  data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                  alt="Thumbnail [100%x225]"
                  style="
                    height: 200px;
                    width: 200px;
                    margin-left: 110px;
                    margin-top: 30px;
                  "
                  src="../assets/coco.png"
                  data-holder-rendered="true"
                />
                <div class="card-body">
                  <p class="card-text match_texto">{{nombre3}}</p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    {{email3}}
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <img
                  class="card-img-top"
                  data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                  alt="Thumbnail [100%x225]"
                  style="
                    height: 200px;
                    width: 200px;
                    margin-left: 110px;
                    margin-top: 30px;
                  "
                  src="../assets/orange.png"
                  data-holder-rendered="true"
                />
                <div class="card-body">
                  <p class="card-text match_texto">{{nombre4}}</p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    {{email4}}
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <img
                  class="card-img-top"
                  data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                  alt="Thumbnail [100%x225]"
                  style="
                    height: 200px;
                    width: 200px;
                    margin-left: 110px;
                    margin-top: 30px;
                  "
                  src="../assets/pear.png"
                  data-holder-rendered="true"
                />
                <div class="card-body">
                  <p class="card-text match_texto">{{nombre5}}</p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    {{email5}}
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <img
                  class="card-img-top"
                  data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                  alt="Thumbnail [100%x225]"
                  style="
                    height: 200px;
                    width: 200px;
                    margin-left: 110px;
                    margin-top: 30px;
                  "
                  src="../assets/pineapple.png"
                  data-holder-rendered="true"
                />
                <div class="card-body">
                  <p class="card-text match_texto">{{nombre6}}</p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    {{email6}}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import matchesService from "@/services/matchesService";
export default {
  data() {
    return {
      nombre1:"",
      nombre2:"",
      nombre3:"",
      nombre4:"",
      nombre5:"",
      nombre6:"",
      email1:"",
      email2:"",
      email3:"",
      email4:"",
      email5:"",
      email6:"",
    };
  },
  async beforeCreate() {
      try {
      const response = await matchesService.getMatches({});
      this.nombre1 = response.data[0]['name'];
      this.nombre2 = response.data[1]['name'];
      this.nombre3 = response.data[2]['name'];
      this.nombre4 = response.data[3]['name'];
      this.nombre5 = response.data[4]['name'];
      this.nombre6 = response.data[5]['name'];
      this.email1 = response.data[0]['email'];
      this.email2 = response.data[1]['email'];
      this.email3 = response.data[2]['email'];
      this.email4 = response.data[3]['email'];
      this.email5 = response.data[4]['email'];
      this.email6 = response.data[5]['email'];
      console.log(this.nombre2);
    }
    catch (error) {
      this.error = error.response.data.error;
    }
  },
  methods: {},
};
</script>

<style>
.azuloscuro {
  background-color: #008b8f;
}

.match_texto {
  font-size: 150% !important;
}

.nav_boton {
  background-color: #008b8f !important;
  color: #ffffff !important;
  border-color: #008b8f !important;
  font-family: AvGard_N !important;
}

.nav_boton:hover {
  color: #f08240 !important;
}

@font-face {
  font-family: AvGard_N;
  src: url(AVGARDD_2.TTF);
}

.iguana {
  font-size: 125% !important;
  font: AvGard_N !important;
}
</style>
