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
      class="modal modal-signin position-static d-block py-5 bg"
      tabindex="-1"
      role="dialog"
      id="modalSignin"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content rounded-5 shadow">
          <div class="modal-header p-5 pb-4 border-bottom-0 fondo3 font">
            
            <h2 class="fw-bold mb-0">Contacto :  </h2>
            
          </div>
          
        </div>
      </div>
    </div>
    </div>
    </div>
    

</template>
    <script>
        import AuthenticationService from '@/services/AuthenticationService'
        import Swal from 'sweetalert2'
        export default {
            data() {
                return {
                    email: "",
                    password: "",                                       
                }
            },
            methods: {
                async login() {   
					try{
                    	await AuthenticationService.login({ // eslint-disable-line no-mixed-spaces-and-tabs
                        	email: this.email, // eslint-disable-line no-mixed-spaces-and-tabs
                        	password: this.password // eslint-disable-line no-mixed-spaces-and-tabs     
                    	}) // eslint-disable-line no-mixed-spaces-and-tabs
                        this.$router.push({ path: "/entrarPerfil" });
                        Swal.fire({
                        icon: 'success',
                        title: 'Login',
                        text: "El usuario ha entrado correctamente",
                                })
					} catch(error){
                        
						this.error = error.response.data.error
                        Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: this.error,
                                })
					}
                }
            }
        }
    </script>

    <style >
  
    </style>
