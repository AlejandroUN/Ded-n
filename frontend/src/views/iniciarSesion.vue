<template>
    
    <div id="app">
        
        <aside>
            <h2>Inicio de Sesion </h2>
            <input type="text" placeholder="Email" v-model="email">
            <input type="password" placeholder="Contraseña" v-model="password">


            <router-link to="/recuperarContrasena">He olvidado mi contraseña</router-link>
            <br>

            <button v-on:click="login">Entrar</button>

        </aside>

        <footer>
            Dedún app
        </footer>

    </div>

</template>
    <script>
        import AuthenticationService from '@/services/AuthenticationService'
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
					} catch(error){
						this.error = error.response.data.error
					}
                }
            }
        }
    </script>
