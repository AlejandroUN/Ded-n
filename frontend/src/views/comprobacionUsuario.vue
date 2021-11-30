<template>
    

    <div id="app">
        
        <header>
            <h1>Comprobando usuario </h1>
            <p>Se te ha enviado un código para verificar que si sea el usuario dueño de la cuenta, a continuación ingresa el código enviado al correo electrónico</p>
        </header>

        <section>

            <input type="text" placeholder="Ingresa el comprobante" v-model="correo">



            <br>

            <button v-on:click="comprobar()">Comprobar</button>
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
                    comprobante: '',
                    toLogComprobante: '',

                }
            },
            methods: {
                comprobar() {
                    if (this.comprobante != '') {
                        this.toLogComprobante = this.comprobante;
                    }
                    console.log('Error de codigo')
                }

            }
        }


    </script>