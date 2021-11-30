<template>
    <div id="app">
        
        <div class="container">
            <h2>Crea tu cuenta</h2>
        </div>
        <div class="container">
            <div>
                <input type="text" v-model="nombres" placeholder="Nombres">
                <input type="text" v-model="apellidos" placeholder="Apellidos">
            </div>
            <div>
                <input type="text" v-model="email" placeholder="Correo electrónico">
            </div>
            <div>
                <input type="text" v-model="new_user" placeholder="Nombre usuario nuevo">
            </div>
            <div>
                <input type="password" v-model="password" placeholder="Contraseña nueva">
            </div>
            <div>
                <form>
                    <div><label>Fecha de nacimiento:</label></div>
                    <div><input type="date" v-model="born"></div>
                </form>
            </div>
            <div>
                <div><label>Genero:</label></div>
                <div>
                    <select v-model="gender">
                        <option disabled value=""></option>
                        <option>Hombre</option>
                        <option>Mujer</option>
                        <option>Otros</option>
                        
                    </select>
                </div>
            </div>
            <div>
                <button>Crear cuenta</button>
            </div>
            {{nombres}} - {{apellidos}} - {{email}} - {{new_user}} - {{password}} - {{born}} - {{gender}}
        </div>
    </div>
   </template>
       

    <script>
        export default {
            data() {
                return {
                    nombres: "",
                    apellidos: "",
                    email: "",
                    new_user: "",
                    password: "",
                    born: new Date().toISOString().substr(0, 10),
                    gender: "",
                }
            },
            mounted() {

            },
            methods: {

            }
        }

        
    </script>