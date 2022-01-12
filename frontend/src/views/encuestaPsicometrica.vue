<template>

    <div id="app">
        
        <div class="container">
            <h2>Aquí podras realizar:</h2>
        </div>
        <div class="container">
            <button><router-link to="/kostick"> Test Kostick</router-link></button>
        </div>
        <div class="container">
            <button><router-link to="/testMaestros"> Test Big Five</router-link></button>
        </div>
        <div class="container">
            <button><router-link to="/testProfesionales"> Test BOTE PRONTO</router-link></button>
        </div>
        <div class="container">
            <button><router-link to="/allport"> Test de Allport</router-link></button>
        </div>
        <div class="container">
            <button>Pendiente</button>
        </div>
        <br>
        <br>
        <br>
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


