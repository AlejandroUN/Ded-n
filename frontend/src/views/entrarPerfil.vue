<template>
  <div class="container col-xl-12 col-xxl-8 py-3">
    <div class="row align-items-center">
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
          <router-link to="/contacta"
            ><button
              class="btn btn-lg btn-primary color_fuente color2"
              type="submit"
            >
              ¡Dónanos!
            </button></router-link
          >			
        </nav>
      </header>

      <div class="padding_top row margin_left">
        <router-link to="">
          <button v-on:click="personal" class="w-50 general_padding color4"><img src="../assets/corazon.png" height="90"
        /></button>
        </router-link>
        <router-link to="">
          <button v-on:click="profesional" class="w-50 general_padding color5 "><img src="../assets/llave.png" height="100"
        /></button>
        </router-link>
      </div>


    </div>
  </div>
</template>

<script>
import pythonScriptsService from "@/services/pythonScriptsService";
import Swal from "sweetalert2";
console.log('Hola')

export default {	
  data() {
    return {};
  },
  mounted() {},
  methods: {
	personal () {
		console.log("working button")
		try{			
			console.log(this.$store.state.user.id)
			pythonScriptsService.matchesForLove({				 
				id: this.$store.state.user.id,
			})
		} catch (error) {
			this.error = error.response.data.error;
			Swal.fire({
				icon: "error",
				title: "Error",
				text: this.error,
			});
		}
	}, 
	profesional (){
		console.log("working button profesional")
		try{			
			console.log(this.$store.state.user.id)
			pythonScriptsService.matchesForLove({				 
				id: this.$store.state.user.id,
			})
		} catch (error) {
			this.error = error.response.data.error;
			Swal.fire({
				icon: "error",
				title: "Error",
				text: this.error,
			});
		}
	}
  },
};
</script>

<style>
.fondo2 {
  background-color: #cff0f1 !important;
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

.padding_top {
  padding-top: 5% !important;
}

.boton {
  padding-left: 20% !important;
}

.margin_left{
  margin-left: 25% !important;
}

.general_padding{
  padding: 5% !important;
  border: none !important;
}

.color4 {
  background-color: #50E6FA!important;
  border-color: #50E6FA!important;
  color: black !important;
  border-top-left-radius: 15px !important;
  border-top-right-radius: 15px !important;
}

.color4:hover {
  background-color: #41BBCC !important;
  border-color: #41BBCC !important;
  color: white !important;
}

.color5 {
  background-color: #E88F4A!important;
  border-color: #E88F4A!important;
  color: black !important;
  border-bottom-left-radius: 15px !important;
  border-bottom-right-radius: 15px !important;
}

.color5:hover {
  background-color: #9C4E13 !important;
  border-color: #9C4E13 !important;
  color: white !important;
}

</style>
