<template>
    
    <div id="app">
        
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
              class="w-100 btn btn-lg btn-primary color"
              type="submit"
              v-on:click="login"
            >
              Iniciar Sesión
            </button> |
            <small class="text-muted"
            ><router-link to="/recuperarContrasena"
              >¿Has olvidado tu contraseña?</router-link
            ></small
          >

        

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
