<template>
    

    <div id="app">
        
        <header>
            <h1>¿Has olvidado tu contraseña? </h1>
            <p>Ingresa el correo</p>
        </header>

        <section>

            <input type="text" placeholder="Correo electrónico" v-model="correo">



            <br>

            <button v-on:click="recuperar()">Recuperar</button>
            <p></p>
        </section>
        

            <footer>
                Dedún app
            </footer>

    </div>
</template>
    <script>
        export default {

            data() {
                return {
                    correo: '',
                    toLogCorreo: '',

                }
            },
            methods: {
                recuperar() {
                    if (this.correo != '') {
                        this.toLogCorreo = this.correo;
                    }
                    console.log('Error de texto')
                }

            }
        }


    </script>
