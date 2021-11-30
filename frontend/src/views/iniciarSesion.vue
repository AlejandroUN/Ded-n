<template>
    
    <div id="app">
        
        <aside>
            <h2>Inicio de Sesion </h2>
            <input type="text" placeholder="Usuario" v-model="user">
            <input type="password" placeholder="Contraseña" v-model="password">


            <router-link to="/recuperarContrasena">He olvidado mi contraseña</router-link>
            <br>

            <button v-on:click="entrar()">Entrar</button>

        </aside>

        <footer>
            Dedún app
        </footer>

    </div>

</template>
    <script>
        export default {

            data() {
                return {
                    user: '',
                    password: '',
                    toLogUser: '',
                    toLogPassword: '',

                }
            },
            methods: {
                entrar() {
                    if (this.user != '') {
                        this.toLogUser = this.user;
                        this.toLogPassword = this.password;
                    }
                    console.log('Error de texto')
                }

            }
        }


    </script>
