<template>
    <div id="app">
        
        <div class="container">
            <h2>Crea tu cuenta</h2>
        </div>
        <div class="container">
            <div>
                <input type="text" v-model="nombres" placeholder="Nombres" maxlength="50">
                <input type="text" v-model="apellidos" placeholder="Apellidos" maxlength="50">
            </div>
            <div>
                <input type="text" v-model="email" placeholder="Correo electrónico">
            </div>
            <div>
                <input type="text" v-model="new_user" placeholder="Nombre usuario nuevo">
            </div>
            <div>
                <input type="password" v-model="password" placeholder="Contraseña nueva" minlength="8" maxlength="20">
            </div>
            <div>
                <form>
                    <div><label>Fecha de nacimiento:</label></div>
                    <div><input type="date" v-model="born"></div>
                </form>
            </div>
            <div>
                <div><label>Genero y orientación sexual:</label></div>
                <div>
                    <select v-model="gender">
                        <option>Hombre cisgenero</option>
                        <option>Mujer cisgenero</option>
                        <option>Hombre transgenero</option>
                        <option>Mujer transgenero</option>
                        <option>Hombre</option>
                        <option>Mujer</option>
                        <option>Persona no binaria</option>
                        <option>Genero fluido</option>
                        <option>Intersexual</option>
                        <option>Otro</option>
                        <option>Prefiero no contestar</option>
                    </select>
                    <select v-model="orientacion">
                        <option>Heterosexual</option>
                        <option>Homosexual</option>
                        <option>Bisexual</option>
                        <option>Pansexual</option>
                        <option>Asexual</option>
                        <option>Antrosexual</option>
                        <option>Demisexual</option>
                        <option>Otro</option>
                        <option>Prefiero no contestar</option>
                    </select>
                </div>
            </div>
            <div>
                <button v-on:click="checked">Crear cuenta</button>
            </div>
            {{nombres}} - {{apellidos}} - {{email}} - {{new_user}} - {{password}} - {{born}} - {{gender}} - {{orientacion}}
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
                    today: new Date(),
                    gender: "",
                    orientacion: "",
                }
            },
            methods: {
                checked(){

                    if(!this.email.includes("@gmail.com")){
                        alert("El correo indicado no es gmail")
                    }else if(this.password.length < 8){
                        alert("La contraseña debe tener más de 8 caracteres")
                    }
                    
                }
            }
        }

        
    </script>


