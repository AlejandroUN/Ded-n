<template>
    <div id="app" class="mto1 mt-1 ml-5">
   <div class="container col-xl-10 col-xxl-8 px-4 py-5">   
<div >
  <div :class="resp.resp1 == 5? 'back-red rounded-3'  
  : resp.resp1 == 4? 'back-orange rounded-3'
  : resp.resp1 == 3? 'back-yellow rounded-3'
  : resp.resp1 == 2? 'back-yellowgreen rounded-3'
  :'back-green  rounded-3'">

    <div class="centerText " >
        <label><h2><b>Estoy callado con los extraños</b></h2></label>
            <hr class="blackLine">
            <br>
            <input class="regular-radio" type="radio" id="Uno1" value=5 v-model="resp.resp1">
            <label class="one" for="Uno1"><FONT SIZE=5> Muy en desacuerdo</FONT></label>
            <br>
            <input class="regular-radio" type="radio" id="Dos1" value=4 v-model="resp.resp1">
            <label class="one" for="Dos1"> <FONT SIZE=5>Moderadamente en desacuerdo</FONT></label>
            <br>
            <input class="regular-radio" type="radio" id="Tres1" value=3 v-model="resp.resp1">
            <label class="one" for="Tres1"> <FONT SIZE=5>Neutro</FONT></label>
            <br>
            <input class="regular-radio" type="radio" id="Cuarto1" value=2 v-model="resp.resp1">
            <label class="one" for="Cuarto1"> <FONT SIZE=5>Moderadamente en acuerdo</FONT></label>
            <br>
            <input class="regular-radio" type="radio" id="Cinco1" value=1 v-model="resp.resp1">
            <label class="one" for="Cinco1"> <FONT SIZE=5>Muy de acuerdo</FONT></label>
    </div>
  </div>

       
        
        
  

    <br>  
     <div :class="resp.resp2 == 1? 'back-red rounded-3'  
  : resp.resp2 == 2? 'back-orange rounded-3'
  : resp.resp2 == 3? 'back-yellow rounded-3'
  : resp.resp2 == 4? 'back-yellowgreen rounded-3'
  :'back-green  rounded-3'">
    
        <div class="centerText" >
        
         <label><h2><b>Hago que la gente se sienta cómoda</b></h2></label>
         <hr class="blackLine">
         <br>
            <input class="regular-radio" type="radio" id="Uno2" value=1 v-model="resp.resp2">
            <label class="one" for="Uno2"> <FONT SIZE=5>Muy en desacuerdo</FONT></label>
            <br>
            <input class="regular-radio" type="radio" id="Dos2" value=2 v-model="resp.resp2">
            <label class="one" for="Dos2"> <FONT SIZE=5>Moderadamente en desacuerdo</FONT></label>
            <br>
            <input class="regular-radio" type="radio" id="Tres2" value=3 v-model="resp.resp2">
            <label class="one" for="Tres2"> <FONT SIZE=5>Neutro</FONT></label>
            <br>
            <input class="regular-radio" type="radio" id="Cuarto2" value=4 v-model="resp.resp2">
            <label class="one" for="Cuarto2"> <FONT SIZE=5>Moderadamente en acuerdo</FONT></label>
            <br>
            <input class="regular-radio" type="radio" id="Cinco2" value=5 v-model="resp.resp2">
            <label class="one" for="Cinco2"> <FONT SIZE=5>Muy de acuerdo</FONT></label>
        </div>

        
    </div>
    <br>  
     <div :class="resp.resp3 == 1? 'back-red rounded-3'  
  : resp.resp3 == 2? 'back-orange rounded-3'
  : resp.resp3 == 3? 'back-yellow rounded-3'
  : resp.resp3 == 4? 'back-yellowgreen rounded-3'
  :'back-green  rounded-3'">
    
        <div class="centerText" >
    
        <label><h2><b>Soy exigente en mi trabajo</b></h2></label>
        <hr class="blackLine">
        <br>
            <input class="regular-radio" type="radio" id="Uno3" value=1 v-model="resp.resp3">
            <label class="one" for="Uno3"> <FONT SIZE=5>Muy en desacuerdo</FONT></label>
            <br>
            <input class="regular-radio" type="radio" id="Dos3" value=2 v-model="resp.resp3">
            <label class="one" for="Dos3"> <FONT SIZE=5>Moderadamente en desacuerdo</FONT></label>
            <br>
            <input class="regular-radio" type="radio" id="Tres3" value=3 v-model="resp.resp3">
            <label class="one" for="Tres3"> <FONT SIZE=5>Neutro</FONT></label>
            <br>
            <input class="regular-radio" type="radio" id="Cuarto3" value=4 v-model="resp.resp3">
            <label class="one" for="Cuarto3"> <FONT SIZE=5>Moderadamente en acuerdo</FONT></label>
            <br>
            <input class="regular-radio" type="radio" id="Cinco3" value=5 v-model="resp.resp3">
            <label class="one" for="Cinco3"> <FONT SIZE=5>Muy de acuerdo</FONT></label>
        </div>
    </div>
    <br>  
     <div :class="resp.resp4 == 5? 'back-red rounded-3'  
  : resp.resp4 == 4? 'back-orange rounded-3'
  : resp.resp4 == 3? 'back-yellow rounded-3'
  : resp.resp4 == 2? 'back-yellowgreen rounded-3'
  :'back-green  rounded-3'">
    
        <div class="centerText" >
        <label><h2><b>A menudo me siento triste</b></h2></label>
        <hr class="blackLine">
        <br>
            <input class="regular-radio" type="radio" id="Uno4" value=5 v-model="resp.resp4">
            <label class="one" for="Uno4"><FONT SIZE=5> Muy en desacuerdo</FONT></label>
            <br>
            <input class="regular-radio" type="radio" id="Dos4" value=4 v-model="resp.resp4">
            <label class="one" for="Dos4"><FONT SIZE=5> Moderadamente en desacuerdo</FONT></label>
            <br>
            <input class="regular-radio" type="radio" id="Tres4" value=3 v-model="resp.resp4">
            <label class="one" for="Tres4"> <FONT SIZE=5>Neutro</FONT></label>
            <br>
            <input class="regular-radio" type="radio" id="Cuarto4" value=2 v-model="resp.resp4">
            <label class="one" for="Cuarto4"><FONT SIZE=5> Moderadamente en acuerdo</FONT></label>
            <br>
            <input class="regular-radio" type="radio" id="Cinco4" value=1 v-model="resp.resp4">
            <label class="one" for="Cinco4"><FONT SIZE=5> Muy de acuerdo</FONT></label>
        </div>
    </div>
    <br>  
     <div :class="resp.resp5 == 5? 'back-red rounded-3'  
  : resp.resp5 == 4? 'back-orange rounded-3'
  : resp.resp5 == 3? 'back-yellow rounded-3'
  : resp.resp5 == 2? 'back-yellowgreen rounded-3'
  :'back-green  rounded-3'">
    
        <div class="centerText" >
        <label><h2><b>Estoy lleno de ideas</b></h2></label>
        <hr class="blackLine">
        <br>
            <input class="regular-radio" type="radio" id="Uno5" value=1 v-model="resp.resp5">
            <label class="one" for="Uno5"> <FONT SIZE=5>Muy en desacuerdo</FONT></label>
            <br>
            <input class="regular-radio" type="radio" id="Dos5" value=2 v-model="resp.resp5">
            <label class="one" for="Dos5"> <FONT SIZE=5>Moderadamente en desacuerdo</FONT></label>
            <br>
            <input class="regular-radio" type="radio" id="Tres5" value=3 v-model="resp.resp5">
            <label class="one" for="Tres5"> <FONT SIZE=5>Neutro</FONT></label>
            <br>
            <input class="regular-radio" type="radio" id="Cuarto5" value=4 v-model="resp.resp5">
            <label class="one" for="Cuarto5"> <FONT SIZE=5>Moderadamente en acuerdo</FONT></label>
            <br>
            <input class="regular-radio" type="radio" id="Cinco5" value=5 v-model="resp.resp5">
            <label class="one" for="Cinco5"> <FONT SIZE=5>Muy de acuerdo</FONT></label>
        </div>
    </div>
    </div>
    <div>   
      <br>  
      <button v-on:click="setData"
              class="mb-10 btn btn-sm rounded-4  floatr center color"
              type="submit"
            
             >Guardar Datos</button>
    </div>

   </div>
   </div>
</template> 


<script>
import Swal from "sweetalert2";
export default {
  data() {
    return {
     resp:{
        resp1: "",
        resp2: "",
        resp3: "",
        resp4: "",
        resp5: "",
        }
    };
  },
  methods: {
    setData() {
       if ((this.resp.resp1=="")||(this.resp.resp2=="")||(this.resp.resp3=="")||(this.resp.resp4=="")||(this.resp.resp5=="")){
         Swal.fire({
          icon: "error",
          title: "Error",
          text: "Contestar todas las preguntas para guardar respuestas",
        });
       }
       else{

      this.$emit("getData", this.resp);}
    },
  },
};
</script>

<style>
.mto1 {
  margin-left: 0.25;
}
</style>
