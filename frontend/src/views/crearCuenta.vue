<template>
    <div id="app">
        
        <div class="container">
            <h2>Crea tu cuenta</h2>
        </div>
        <div class="container">
            <div>
                <input 
                type="text" 
                name="nombres" 
                v-model="nombres" 
                placeholder="Nombres y Apellidos" maxlength="50">

            </div>
            <div>
                <input 
                type="text" 
                name="email" 
                v-model="email" 
                placeholder="Correo electrónico">
            </div>
            <div>
                <input 
                type="text" 
                name="new_user" 
                v-model="new_user" 
                placeholder="Nombre usuario nuevo">
            </div>
            <div>
                <input 
                type="password" 
                name="password" 
                v-model="password" 
                placeholder="Contraseña nueva" minlength="8" maxlength="20" v-on:keypress="isImprimible(event)">
            </div>
            <div>
                <form>
                    <div><label>Fecha de nacimiento:</label></div>
                    <div><input type="date" :max="today" v-model="born" ></div>
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
                    <input v-show="otroGenero()" type="text" v-model="nuevoGenero" placeholder="Ingrese genero">
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
                     <input v-show="otraOrientacion()" type="text" v-model="nuevaOrientacion" placeholder="Ingrese orientación">
                </div>
            </div>
            <div>
                <button v-on:click="checked">Crear cuenta</button>
            </div>
            {{nombres}} - {{email}} - {{new_user}} - {{password}} - {{born}} - {{gender}} - {{orientacion}} - {{today}}
        </div>
    </div>
   </template>
       

    <script>
        import AuthenticationService from '@/services/AuthenticationService'
        export default {
            data() {
                return {
                    nombres: "",
                    email: "",
                    new_user: "",
                    password: "",
                    born: new Date().toISOString().substr(0, 10),
                    today: new Date().toISOString().substr(0, 10),
                    gender: "",
                    orientacion: "",
                    nuevoGenero:"",
                    nuevaOrientacion:"",
                }
            },
            methods: {                
                async checked(){
                    var dateMax = new Date();
                    dateMax.setMonth(dateMax.getMonth()-168);
                    var dateBorn= new Date(this.born);
                   
                    if(!this.email.includes("@gmail.com")){
                        alert("El correo indicado no es gmail")
                    }else if(this.password.length < 8){
                        alert("La contraseña debe tener más de 8 caracteres")
                    }else if(dateMax < dateBorn){
                        alert("El usuario es menor de 14 años, no puede registrarse")
                    }
                    
                    try{
                    	await AuthenticationService.register({ // eslint-disable-line no-mixed-spaces-and-tabs
                        	email: this.email, // eslint-disable-line no-mixed-spaces-and-tabs
                        	password: this.password // eslint-disable-line no-mixed-spaces-and-tabs     
                    	}) // eslint-disable-line no-mixed-spaces-and-tabs
					} catch(error){
						this.error = error.response.data.error
					}                   
                },
                otroGenero(){
                    if(this.gender == "Otro" ){
                        return true
                    }
                    else{
                        return false
                    }

                },
                otraOrientacion(){
                    if(this.orientacion == "Otro"){
                        return true
                    }
                    else{
                        return false
                    }
                },

                isImprimible: function(evt){
                    evt= (evt) ? evt : window.event;
                    var charCode = (evt.which) ? evt.which : evt.keyCode;
                     if (charCode > 3 && (charCode < 32 || charCode > 126))  {
                            evt.preventDefault();
                        } else {
                            return true;
                        }

                }                
            }
        }

        
    </script>


