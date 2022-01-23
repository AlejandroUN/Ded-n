<template>
    <div id="app" class="mto1 mt-1 ml-5">
   <div class="container col-xl-10 col-xxl-8 px-4 py-5">   
<div >
  <div :class="resp1 == 1? 'back-red rounded-3'  
  : resp1 == 2? 'back-orange rounded-3'
  : resp1 == 3? 'back-yellow rounded-3'
  : resp1 == 4? 'back-yellowgreen rounded-3'
  :'back-green  rounded-3'">

    <div class="centerText " >

        <label><h2><b>No hablo mucho</b></h2></label>
            <hr class="blackLine">
            <br>
            <input class="regular-radio" type="radio" id="Uno1" value=1 v-model="resp1">
            <label class="one" for="Uno1"> <FONT SIZE=5>Muy en desacuerdo</FONT></label>
            <br>
            <input type="radio" id="Uno1" value=5 v-model="resp1">
            <label for="Uno1"> Muy en desacuerdo</label>
            <br>
            <input type="radio" id="Dos1" value=4 v-model="resp1">
            <label for="Dos1"> Moderadamente en desacuerdo</label>
            <br>
            <input class="regular-radio" type="radio" id="Cuarto1" value=4 v-model="resp1">
            <label class="one" for="Cuarto1"> <FONT SIZE=5>Moderadamente en acuerdo</FONT></label>
            <br>
            <input type="radio" id="Cuarto1" value=2 v-model="resp1">
            <label for="Cuarto1"> Moderadamente en acuerdo</label>
            <br>
            <input type="radio" id="Cinco1" value=1 v-model="resp1">
            <label for="Cinco1"> Muy de acuerdo</label>
            <br>
            <br>

       
        
    </div>
  </div>
  
    <br>  
     <div :class="resp2 == 5? 'back-red rounded-3'  
  : resp2 == 4? 'back-orange rounded-3'
  : resp2 == 3? 'back-yellow rounded-3'
  : resp2 == 2? 'back-yellowgreen rounded-3'
  :'back-green  rounded-3'">
    
        <div class="centerText" >
    <div>
      
        
         <label><h2><b>Me interesan las personas</b></h2></label>
         <hr class="blackLine">
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
            

    </div>
        </div>
    </div>
    <div>
    
        <label><h2><b>Dejo mis pertenencias por ahí</b></h2></label>
        <br>
        <br>
            <input type="radio" id="Uno3" value=5 v-model="resp3">
            <label for="Uno3"> Muy en desacuerdo</label>
            <br>
            <input type="radio" id="Dos3" value=4 v-model="resp3">
            <label for="Dos3"> Moderadamente en desacuerdo</label>
            <br>
            <input class="regular-radio" type="radio" id="Tres3" value=3 v-model="resp3">
            <label class="one" for="Tres3"> <FONT SIZE=5>Neutro</FONT></label>
            <br>
            <input type="radio" id="Cuarto3" value=2 v-model="resp3">
            <label for="Cuarto3"> Moderadamente en acuerdo</label>
            <br>
            <input type="radio" id="Cinco3" value=1 v-model="resp3">
            <label for="Cinco3"> Muy de acuerdo</label>
            <br>
            <br>
    </div>
    <div>
        <label><h2><b>Soy muy relajado todo el tiempo</b></h2></label>
        <br>
        <br>
            <input class="regular-radio" type="radio" id="Uno4" value=1 v-model="resp4">
            <label class="one" for="Uno4"> <FONT SIZE=5>Muy en desacuerdo</FONT></label>
            <br>
            <input class="regular-radio" type="radio" id="Dos4" value=2 v-model="resp4">
            <label class="one" for="Dos4"> <FONT SIZE=5>Moderadamente en desacuerdo</FONT></label>
            <br>
            <input class="regular-radio" type="radio" id="Tres4" value=3 v-model="resp4">
            <label class="one" for="Tres4"> <FONT SIZE=5>Neutro</FONT></label>
            <br>
            <input class="regular-radio" type="radio" id="Cuarto4" value=4 v-model="resp4">
            <label class="one" for="Cuarto4"> <FONT SIZE=5>Moderadamente en acuerdo</FONT></label>
            <br>
            <input class="regular-radio" type="radio" id="Cinco4" value=5 v-model="resp4">
            <label class="one" for="Cinco4"> <FONT SIZE=5>Muy de acuerdo</FONT></label>
            <br>
            <br>
    </div>
    <div>

        <label><h2><b>Tengo dificultad para comprender ideas abstractas</b></h2></label>
        <br>
        <br>
            <input type="radio" id="Uno5" value=5 v-model="resp5">
            <label for="Uno5"> Muy en desacuerdo</label>
            <br>
            <input type="radio" id="Dos5" value=4 v-model="resp5">
            <label for="Dos5"> Moderadamente en desacuerdo</label>
            <br>
            <input class="regular-radio" type="radio" id="Tres5" value=3 v-model="resp5">
            <label class="one" for="Tres5"> <FONT SIZE=5>Neutro</FONT></label>
            <br>
            <input type="radio" id="Cuarto5" value=2 v-model="resp5">
            <label for="Cuarto5"> Moderadamente en acuerdo</label>
            <br>
            <input type="radio" id="Cinco5" value=1 v-model="resp5">
            <label for="Cinco5"> Muy de acuerdo</label>
            <br>
            <br>
    </div>
    </div>
    <div>   
      <router-link to="/bigFive3"><button>Siguiente</button></router-link>
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
