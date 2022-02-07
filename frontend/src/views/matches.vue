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
                  <p class="nombresito card-text match_texto">{{nombre1}}</p>
                  <div class="popoga d-flex justify-content-between align-items-center">
                    <p>Genero: {{genero1}}</p>
                    <p>Orientación: {{orientacion1}}</p>
                  </div>
                  <div class="popoga  d-flex justify-content-between align-items-center">
                    <p>Email: <a class="card-link">{{email1}}</a></p>
                  </div>
                  <div class="compatibilidad"> Compatibilidad:</div>
                  <div class="pepega d-flex justify-content-between align-items-center">                    
                    <p >Apertura: <a>{{apertura1}}</a></p>
                    <p >Amabilidad: <a>{{amabilidad1}}</a></p>                    
                  </div>
                  <div class="pepega d-flex justify-content-between align-items-center">                    
                    <p >Extroversion: <a>{{extroversion1}}</a></p>
                    <p >Neuroticismo: <a>{{neuroticismo1}}</a></p>                    
                  </div>
                  <div class="pepega d-flex justify-content-between align-items-center">                    
                    <p >Escrupulosidad: <a>{{escrupulosidad1}}</a></p>                    
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
                  <p class="nombresito card-text match_texto">{{nombre2}}</p>
                  <div class="popoga d-flex justify-content-between align-items-center">
                    <p>Genero: {{genero2}}</p>
                    <p>Orientación: {{orientacion2}}</p>
                  </div>
                  <div class="popoga  d-flex justify-content-between align-items-center">
                    <p>Email: <a class="card-link">{{email2}}</a></p>
                  </div>
                  <div class="compatibilidad"> Compatibilidad:</div>
                  <div class="pepega d-flex justify-content-between align-items-center">                    
                    <p >Apertura: <a>{{apertura2}}</a></p>
                    <p >Amabilidad: <a>{{amabilidad2}}</a></p>                    
                  </div>
                  <div class="pepega d-flex justify-content-between align-items-center">                    
                    <p >Extroversion: <a>{{extroversion2}}</a></p>
                    <p >Neuroticismo: <a>{{neuroticismo2}}</a></p>                    
                  </div>
                  <div class="pepega d-flex justify-content-between align-items-center">                    
                    <p >Escrupulosidad: <a>{{escrupulosidad2}}</a></p>                    
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
                  <p class="nombresito card-text match_texto">{{nombre3}}</p>
                  <div class="popoga d-flex justify-content-between align-items-center">
                    <p>Genero: {{genero3}}</p>
                    <p>Orientación: {{orientacion3}}</p>
                  </div>
                  <div class="popoga  d-flex justify-content-between align-items-center">
                    <p>Email: <a class="card-link">{{email3}}</a></p>
                  </div>
                  <div class="compatibilidad"> Compatibilidad:</div>
                  <div class="pepega d-flex justify-content-between align-items-center">                    
                    <p >Apertura: <a>{{apertura3}}</a></p>
                    <p >Amabilidad: <a>{{amabilidad3}}</a></p>                    
                  </div>
                  <div class="pepega d-flex justify-content-between align-items-center">                    
                    <p >Extroversion: <a>{{extroversion3}}</a></p>
                    <p >Neuroticismo: <a>{{neuroticismo3}}</a></p>                    
                  </div>
                  <div class="pepega d-flex justify-content-between align-items-center">                    
                    <p >Escrupulosidad: <a>{{escrupulosidad3}}</a></p>                    
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
                  <p class="nombresito card-text match_texto">{{nombre4}}</p>
                  <div class="popoga d-flex justify-content-between align-items-center">
                    <p>Genero: {{genero4}}</p>
                    <p>Orientación: {{orientacion4}}</p>
                  </div>
                  <div class="popoga  d-flex justify-content-between align-items-center">
                    <p>Email: <a class="card-link">{{email4}}</a></p>
                  </div>
                  <div class="compatibilidad"> Compatibilidad:</div>
                  <div class="pepega d-flex justify-content-between align-items-center">                    
                    <p >Apertura: <a>{{apertura4}}</a></p>
                    <p >Amabilidad: <a>{{amabilidad4}}</a></p>                    
                  </div>
                  <div class="pepega d-flex justify-content-between align-items-center">                    
                    <p >Extroversion: <a>{{extroversion4}}</a></p>
                    <p >Neuroticismo: <a>{{neuroticismo4}}</a></p>                    
                  </div>
                  <div class="pepega d-flex justify-content-between align-items-center">                    
                    <p >Escrupulosidad: <a>{{escrupulosidad4}}</a></p>                    
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
                  <p class="nombresito card-text match_texto">{{nombre5}}</p>
                  <div class="popoga d-flex justify-content-between align-items-center">
                    <p>Genero: {{genero5}}</p>
                    <p>Orientación: {{orientacion5}}</p>
                  </div>
                  <div class="popoga  d-flex justify-content-between align-items-center">
                    <p>Email: <a class="card-link">{{email5}}</a></p>
                  </div>
                  <div class="compatibilidad"> Compatibilidad:</div>
                  <div class="pepega d-flex justify-content-between align-items-center">                    
                    <p >Apertura: <a>{{apertura5}}</a></p>
                    <p >Amabilidad: <a>{{amabilidad5}}</a></p>                    
                  </div>
                  <div class="pepega d-flex justify-content-between align-items-center">                    
                    <p >Extroversion: <a>{{extroversion5}}</a></p>
                    <p >Neuroticismo: <a>{{neuroticismo5}}</a></p>                    
                  </div>
                  <div class="pepega d-flex justify-content-between align-items-center">                    
                    <p >Escrupulosidad: <a>{{escrupulosidad5}}</a></p>                    
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
                  <p class="nombresito card-text match_texto">{{nombre6}}</p>
                  <div class="popoga d-flex justify-content-between align-items-center">
                    <p>Genero: {{genero6}}</p>
                    <p>Orientación: {{orientacion6}}</p>
                  </div>
                  <div class="popoga  d-flex justify-content-between align-items-center">
                    <p>Email: <a class="card-link">{{email6}}</a></p>
                  </div>
                  <div class="compatibilidad"> Compatibilidad:</div>
                  <div class="pepega d-flex justify-content-between align-items-center">                    
                    <p >Apertura: <a>{{apertura6}}</a></p>
                    <p >Amabilidad: <a>{{amabilidad6}}</a></p>                    
                  </div>
                  <div class="pepega d-flex justify-content-between align-items-center">                    
                    <p >Extroversion: <a>{{extroversion6}}</a></p>
                    <p >Neuroticismo: <a>{{neuroticismo6}}</a></p>                    
                  </div>
                  <div class="pepega d-flex justify-content-between align-items-center">                    
                    <p >Escrupulosidad: <a>{{escrupulosidad6}}</a></p>                    
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
      genero1:"",
      genero2:"",
      genero3:"",
      genero4:"",
      genero5:"",
      genero6:"",
      orientacion1:"",
      orientacion2:"",
      orientacion3:"",
      orientacion4:"",
      orientacion5:"",
      orientacion6:"",
      apertura1:"",
      apertura2:"",
      apertura3:"",
      apertura4:"",
      apertura5:"",
      apertura6:"",
      extroversion1:"",
      extroversion2:"",
      extroversion3:"",
      extroversion4:"",
      extroversion5:"",
      extroversion6:"",
      amabilidad1:"",
      amabilidad2:"",
      amabilidad3:"",
      amabilidad4:"",
      amabilidad5:"",
      amabilidad6:"",
      neuroticismo1:"",
      neuroticismo2:"",
      neuroticismo3:"",
      neuroticismo4:"",
      neuroticismo5:"",
      neuroticismo6:"",
      escrupulosidad1:"",
      escrupulosidad2:"",
      escrupulosidad3:"",
      escrupulosidad4:"",
      escrupulosidad5:"",
      escrupulosidad6:"",
      
    };
  },
  async beforeCreate() {    
      try {        

      console.log(this.$store.state.user.id)
      
      const response = await matchesService.getMatches({
        email: this.$store.state.user.id
      });

      console.log(response.data)

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
      this.genero1 = response.data[0]['gender'];
      this.genero2 = response.data[1]['gender'];
      this.genero3 = response.data[2]['gender'];
      this.genero4 = response.data[3]['gender'];
      this.genero5 = response.data[4]['gender'];
      this.genero6 = response.data[5]['gender'];
      this.orientacion1 = response.data[0]['orientation'];
      this.orientacion2 = response.data[1]['orientation'];
      this.orientacion3 = response.data[2]['orientation'];
      this.orientacion4 = response.data[3]['orientation'];
      this.orientacion5 = response.data[4]['orientation'];
      this.orientacion6 = response.data[5]['orientation'];
      
      this.apertura1 = this.nivelCompatibilidad(response.data[0]['afinidadApertura'])
      this.apertura2 = this.nivelCompatibilidad(response.data[1]['afinidadApertura'])
      this.apertura3 = this.nivelCompatibilidad(response.data[2]['afinidadApertura'])
      this.apertura4 = this.nivelCompatibilidad(response.data[3]['afinidadApertura'])
      this.apertura5 = this.nivelCompatibilidad(response.data[4]['afinidadApertura'])
      this.apertura6 = this.nivelCompatibilidad(response.data[5]['afinidadApertura'])
      this.extroversion1 = this.nivelCompatibilidad(response.data[0]['afinidadEscrupulosidad'])
      this.extroversion2 = this.nivelCompatibilidad(response.data[1]['afinidadEscrupulosidad'])
      this.extroversion3 = this.nivelCompatibilidad(response.data[2]['afinidadEscrupulosidad'])
      this.extroversion4 = this.nivelCompatibilidad(response.data[3]['afinidadEscrupulosidad'])
      this.extroversion5 = this.nivelCompatibilidad(response.data[4]['afinidadEscrupulosidad'])
      this.extroversion6 = this.nivelCompatibilidad(response.data[5]['afinidadEscrupulosidad'])
      this.amabilidad1 = this.nivelCompatibilidad(response.data[0]['afinidadExtroversion'])
      this.amabilidad2 = this.nivelCompatibilidad(response.data[1]['afinidadExtroversion'])
      this.amabilidad3 = this.nivelCompatibilidad(response.data[2]['afinidadExtroversion'])
      this.amabilidad4 = this.nivelCompatibilidad(response.data[3]['afinidadExtroversion'])
      this.amabilidad5 = this.nivelCompatibilidad(response.data[4]['afinidadExtroversion'])
      this.amabilidad6 = this.nivelCompatibilidad(response.data[5]['afinidadExtroversion'])
      this.neuroticismo1 = this.nivelCompatibilidad(response.data[0]['afinidadNeuroticismo'])
      this.neuroticismo2 = this.nivelCompatibilidad(response.data[1]['afinidadNeuroticismo'])
      this.neuroticismo3 = this.nivelCompatibilidad(response.data[2]['afinidadNeuroticismo'])
      this.neuroticismo4 = this.nivelCompatibilidad(response.data[3]['afinidadNeuroticismo'])
      this.neuroticismo5 = this.nivelCompatibilidad(response.data[4]['afinidadNeuroticismo'])
      this.neuroticismo6 = this.nivelCompatibilidad(response.data[5]['afinidadNeuroticismo'])
      this.escrupulosidad1 = this.nivelCompatibilidad(response.data[0]['afinidadEscrupulosidad'])
      this.escrupulosidad2 = this.nivelCompatibilidad(response.data[1]['afinidadEscrupulosidad'])
      this.escrupulosidad3 = this.nivelCompatibilidad(response.data[2]['afinidadEscrupulosidad'])
      this.escrupulosidad4 = this.nivelCompatibilidad(response.data[3]['afinidadEscrupulosidad'])
      this.escrupulosidad5 = this.nivelCompatibilidad(response.data[4]['afinidadEscrupulosidad'])
      this.escrupulosidad6 = this.nivelCompatibilidad(response.data[5]['afinidadEscrupulosidad'])
      


      


      console.log(response.data[0])


      //console.log("ID segundo asociado 0:",response.data[0]['idSegundoAsociado'])
      //console.log("ID segundo asociado 1:",response.data[1]['idSegundoAsociado'])
      //console.log("ID segundo asociado 2:",response.data[2]['idSegundoAsociado'])
      //console.log("ID segundo asociado 3:",response.data[3]['idSegundoAsociado'])
      //console.log("ID segundo asociado 4:",response.data[4]['idSegundoAsociado'])
      //console.log("ID segundo asociado 5:",response.data[5]['idSegundoAsociado'])
    }
    catch (error) {
      this.error = error.response.data.error;
    }
  },
  methods: {
    nivelCompatibilidad: function (comp) {
      if(comp==0){
        return 'Malo';
      }
      else if(comp==1){
        return 'Regular';
      }      
      else if(comp==2){
        return 'Aceptable';
      }
      else if(comp==3){
        return 'Bueno';
      }
      else{
        return 'AJA';
      }
    }


  },
};
</script>

<style>
p{
  margin-bottom: 0px !important;
}

.nombresito{
  margin-bottom: 8px !important;
  font-family: AvGard_N !important;
}

.pepega{
  height: 25px !important;
}
.compatibilidad{
  margin-top: 10px !important;
  font-family: AvGard_N !important;
  font-size: 105% !important;
  
}

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
