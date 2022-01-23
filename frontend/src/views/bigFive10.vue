<template>
    <div id="app" class="mto1 mt-1 ml-5">
   <div class="container col-xl-10 col-xxl-8 px-4 py-5">   
<div >
        <label><h2><b>Estoy callado con los extraños</b></h2></label>
            <br>
            <br>
            <input type="radio" id="Uno1" value=5 v-model="resp1">
            <label for="Uno1"> Muy en desacuerdo</label>
            <br>
            <input type="radio" id="Dos1" value=4 v-model="resp1">
            <label for="Dos1"> Moderadamente en desacuerdo</label>
            <br>
            <input class="regular-radio" type="radio" id="Tres1" value=3 v-model="resp1">
            <label class="one" for="Tres1"> <FONT SIZE=5>Neutro</FONT></label>
            <br>
            <input type="radio" id="Cuarto1" value=2 v-model="resp1">
            <label for="Cuarto1"> Moderadamente en acuerdo</label>
            <br>
            <input type="radio" id="Cinco1" value=1 v-model="resp1">
            <label for="Cinco1"> Muy de acuerdo</label>
            <br>
            <br>

       
        
        
  

    <div>
        
         <label><h2><b>Hago que la gente se sienta cómoda</b></h2></label>
         <br>
         <br>
            <input class="regular-radio" type="radio" id="Uno2" value=1 v-model="resp2">
            <label class="one" for="Uno2"> <FONT SIZE=5>Muy en desacuerdo</FONT></label>
            <br>
            <input class="regular-radio" type="radio" id="Dos2" value=2 v-model="resp2">
            <label class="one" for="Dos2"> <FONT SIZE=5>Moderadamente en desacuerdo</FONT></label>
            <br>
            <input class="regular-radio" type="radio" id="Tres2" value=3 v-model="resp2">
            <label class="one" for="Tres2"> <FONT SIZE=5>Neutro</FONT></label>
            <br>
            <input class="regular-radio" type="radio" id="Cuarto2" value=4 v-model="resp2">
            <label class="one" for="Cuarto2"> <FONT SIZE=5>Moderadamente en acuerdo</FONT></label>
            <br>
            <input class="regular-radio" type="radio" id="Cinco2" value=5 v-model="resp2">
            <label class="one" for="Cinco2"> <FONT SIZE=5>Muy de acuerdo</FONT></label>
            <br>
            <br>

        
    </div>
    <div>
    
        <label><h2><b>Soy exigente en mi trabajo</b></h2></label>
        <br>
        <br>
            <input class="regular-radio" type="radio" id="Uno3" value=1 v-model="resp3">
            <label class="one" for="Uno3"> <FONT SIZE=5>Muy en desacuerdo</FONT></label>
            <br>
            <input class="regular-radio" type="radio" id="Dos3" value=2 v-model="resp3">
            <label class="one" for="Dos3"> <FONT SIZE=5>Moderadamente en desacuerdo</FONT></label>
            <br>
            <input class="regular-radio" type="radio" id="Tres3" value=3 v-model="resp3">
            <label class="one" for="Tres3"> <FONT SIZE=5>Neutro</FONT></label>
            <br>
            <input class="regular-radio" type="radio" id="Cuarto3" value=4 v-model="resp3">
            <label class="one" for="Cuarto3"> <FONT SIZE=5>Moderadamente en acuerdo</FONT></label>
            <br>
            <input class="regular-radio" type="radio" id="Cinco3" value=5 v-model="resp3">
            <label class="one" for="Cinco3"> <FONT SIZE=5>Muy de acuerdo</FONT></label>
            <br>
            <br>
    </div>
    <div>
        <label><h2><b>A menudo me siento triste</b></h2></label>
        <br>
        <br>
            <input type="radio" id="Uno4" value=5 v-model="resp4">
            <label for="Uno4"> Muy en desacuerdo</label>
            <br>
            <input type="radio" id="Dos4" value=4 v-model="resp4">
            <label for="Dos4"> Moderadamente en desacuerdo</label>
            <br>
            <input class="regular-radio" type="radio" id="Tres4" value=3 v-model="resp4">
            <label class="one" for="Tres4"> <FONT SIZE=5>Neutro</FONT></label>
            <br>
            <input type="radio" id="Cuarto4" value=2 v-model="resp4">
            <label for="Cuarto4"> Moderadamente en acuerdo</label>
            <br>
            <input type="radio" id="Cinco4" value=1 v-model="resp4">
            <label for="Cinco4"> Muy de acuerdo</label>
            <br>
            <br>
    </div>
    <div>

        <label><h2><b>Estoy lleno de ideas</b></h2></label>
        <br>
        <br>
            <input class="regular-radio" type="radio" id="Uno5" value=1 v-model="resp5">
            <label class="one" for="Uno5"> <FONT SIZE=5>Muy en desacuerdo</FONT></label>
            <br>
            <input class="regular-radio" type="radio" id="Dos5" value=2 v-model="resp5">
            <label class="one" for="Dos5"> <FONT SIZE=5>Moderadamente en desacuerdo</FONT></label>
            <br>
            <input class="regular-radio" type="radio" id="Tres5" value=3 v-model="resp5">
            <label class="one" for="Tres5"> <FONT SIZE=5>Neutro</FONT></label>
            <br>
            <input class="regular-radio" type="radio" id="Cuarto5" value=4 v-model="resp5">
            <label class="one" for="Cuarto5"> <FONT SIZE=5>Moderadamente en acuerdo</FONT></label>
            <br>
            <input class="regular-radio" type="radio" id="Cinco5" value=5 v-model="resp5">
            <label class="one" for="Cinco5"> <FONT SIZE=5>Muy de acuerdo</FONT></label>
            <br>
            <br>
    </div>
    </div>
    <div>   
      <router-link to="/entrarPerfil"><button>Terminar prueba</button></router-link>
    </div>

   </div>
   </div>
</template> 


<script>
export default {
  data() {
    return {
      resp1: "",
      resp2: "",
      resp3: "",
      resp4: "",
      resp5: "",
    };
  },
  methods: {},
};
</script>

<style>
.mto1 {
  margin-left: 0.25;
}
</style>
