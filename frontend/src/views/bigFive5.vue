<template>
    <div id="app" class="mto1 mt-1 ml-5">
   <div class="container col-xl-10 col-xxl-8 px-4 py-5">   
<div >
        <label><b>Empiezo conversaciones</b></label>
            <br>
            <br>
            <input type="radio" id="Uno1" value=1 v-model="resp1">
            <label for="Uno1"> Muy en desacuerdo</label>
            <br>
            <input type="radio" id="Dos1" value=2 v-model="resp1">
            <label for="Dos1"> Moderadamente en desacuerdo</label>
            <br>
            <input type="radio" id="Tres1" value=3 v-model="resp1">
            <label for="Tres1"> Neutro</label>
            <br>
            <input type="radio" id="Cuarto1" value=4 v-model="resp1">
            <label for="Cuarto1"> Moderadamente en acuerdo</label>
            <br>
            <input type="radio" id="Cinco1" value=5 v-model="resp1">
            <label for="Cinco1"> Muy de acuerdo</label>
            <br>
            <br>

       
        
        
  

    <div>
        
         <label><b>No me interesan los problemas de otras personas</b></label>
         <br>
         <br>
            <input type="radio" id="Uno2" value=5 v-model="resp2">
            <label for="Uno2"> Muy en desacuerdo</label>
            <br>
            <input type="radio" id="Dos2" value=4 v-model="resp2">
            <label for="Dos2"> Moderadamente en desacuerdo</label>
            <br>
            <input type="radio" id="Tres2" value=3 v-model="resp2">
            <label for="Tres2"> Neutro</label>
            <br>
            <input type="radio" id="Cuarto2" value=2 v-model="resp2">
            <label for="Cuarto2"> Moderadamente en acuerdo</label>
            <br>
            <input type="radio" id="Cinco2" value=1 v-model="resp2">
            <label for="Cinco2"> Muy de acuerdo</label>
            <br>
            <br>

        
    </div>
    <div>
    
        <label><b>Tengo tareas hechas de inmediato</b></label>
        <br>
        <br>
            <input type="radio" id="Uno3" value=1 v-model="resp3">
            <label for="Uno3"> Muy en desacuerdo</label>
            <br>
            <input type="radio" id="Dos3" value=2 v-model="resp3">
            <label for="Dos3"> Moderadamente en desacuerdo</label>
            <br>
            <input type="radio" id="Tres3" value=3 v-model="resp3">
            <label for="Tres3"> Neutro</label>
            <br>
            <input type="radio" id="Cuarto3" value=4 v-model="resp3">
            <label for="Cuarto3"> Moderadamente en acuerdo</label>
            <br>
            <input type="radio" id="Cinco3" value=5 v-model="resp3">
            <label for="Cinco3"> Muy de acuerdo</label>
            <br>
            <br>
    </div>
    <div>
        <label><b>Me siento molesto facilmente</b></label>
        <br>
        <br>
            <input type="radio" id="Uno4" value=5 v-model="resp4">
            <label for="Uno4"> Muy en desacuerdo</label>
            <br>
            <input type="radio" id="Dos4" value=4 v-model="resp4">
            <label for="Dos4"> Moderadamente en desacuerdo</label>
            <br>
            <input type="radio" id="Tres4" value=3 v-model="resp4">
            <label for="Tres4"> Neutro</label>
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

        <label><b>Tengo excelentes ideas</b></label>
        <br>
        <br>
            <input type="radio" id="Uno5" value=1 v-model="resp5">
            <label for="Uno5"> Muy en desacuerdo</label>
            <br>
            <input type="radio" id="Dos5" value=2 v-model="resp5">
            <label for="Dos5"> Moderadamente en desacuerdo</label>
            <br>
            <input type="radio" id="Tres5" value=3 v-model="resp5">
            <label for="Tres5"> Neutro</label>
            <br>
            <input type="radio" id="Cuarto5" value=4 v-model="resp5">
            <label for="Cuarto5"> Moderadamente en acuerdo</label>
            <br>
            <input type="radio" id="Cinco5" value=5 v-model="resp5">
            <label for="Cinco5"> Muy de acuerdo</label>
            <br>
            <br>
    </div>
    </div>
    <div>   
      <router-link to="/bigFive6"><button>Siguiente</button></router-link>
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
