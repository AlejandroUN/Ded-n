<template>

    <div id="app">
        
        <div class="container">
            <h2>Entra a tu perfil</h2>
        </div>
        <div class="container">
            <button><router-link to="/kostick"> Personal</router-link></button>
        </div>
        <div class="container">
            <button><router-link to="/testMaestros"> Aprender arte/técnica</router-link></button>
        </div>
        <div class="container">
            <button><router-link to="/testProfesionales"> Contactos Profesionales</router-link></button>
        </div>
        <div class="container">
            <button><router-link to="/allport"> Mejoramiento personal</router-link></button>
        </div>
        <div class="container">
            <button>Empresas/empleados</button>
        </div>
    </div>

</template>

    <script>
        export default {
            data() {
                return {
                }
            },
            mounted() {

            },
            methods: {

            }
        }

 
    </script>


