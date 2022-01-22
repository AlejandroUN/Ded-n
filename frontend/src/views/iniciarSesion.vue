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
            class=" btn btn-lg btn-primary color_fuente color2"
            type="submit"
          >
            ¡Dónanos!
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
            
            <h2 class="fw-bold mb-0">Inicia tu sesión</h2>
            
          </div>
          <div class="modal-body p-5 pt-0 fondo3">
        
        <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              v-model="email"
            />
            <label for="floatingInput">Correo electronico</label>
          </div>


          <div class="form-floating mb-3">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              v-model="password"
            />
            <label for="floatingPassword">Contraseña</label>
          </div>
          
            <button
              class=" mb-2 btn btn-sm rounded-4 btn-primary floatr right color"
              type="submit"
              v-on:click="login"
            >
              Entrar
            </button> 
            <small class="text-muted"
            ><router-link to="/recuperarContrasena"
              >¿Has olvidado tu contraseña?</router-link
            ></small
          >
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
    .fondo3 {
  background-color: #FAEFE8 !important;
}
    </style>
