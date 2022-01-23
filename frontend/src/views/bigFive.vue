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
      
        <label ><h2><b>Soy el alma de la fiesta</b></h2></label>

            <hr class="blackLine">
            <br>
            <input class="regular-radio" type="radio" id="Uno1" value=1 v-model="resp1" >
            <label class="one " for="Uno1"> <FONT SIZE=5>Muy en desacuerdo</FONT></label>

            <br>
            <input class="regular-radio" type="radio" id="Dos1" value=2 v-model="resp1">
            <label class="one " for="Dos1"> <FONT SIZE=5> Moderadamente en desacuerdo</FONT></label>
            <br>
            <input class="regular-radio" type="radio" id="Tres1" value=3 v-model="resp1">
            <label class="one " for="Tres1"> <FONT SIZE=5> Neutro</FONT></label>
            <br>
            <input class="regular-radio" type="radio" id="Cuarto1" value=4 v-model="resp1">
            <label class="one " for="Cuarto1"> <FONT SIZE=5>Moderadamente en acuerdo</FONT></label>
            <br>
            <input class="regular-radio" type="radio" id="Cinco1" value=5 v-model="resp1">
            <label class="one " for="Cinco1">  <FONT SIZE=5>Muy de acuerdo</FONT></label>
            
        </div>
      
  </div>
        
        <br>
  
    <div :class="resp2 == 5? 'back-red rounded-3'  
  : resp2 == 4? 'back-orange rounded-3'
  : resp2 == 3? 'back-yellow rounded-3'
  : resp2 == 2? 'back-yellowgreen rounded-3'
  :'back-green  rounded-3'">
    
        <div class="centerText" >
          <div >
         <label ><h2><b>Siento poca preocupación por los demás</b></h2></label>
          </div>
         <hr class="blackLine">
         <br>
            <input class="regular-radio" type="radio" id="Uno2" value=5 v-model="resp2">
            <label class="one" for="Uno2"> <FONT SIZE=5>Muy en desacuerdo</FONT></label>
            <br>
            <input class="regular-radio" type="radio" id="Dos2" value=4 v-model="resp2">
            <label class="one" for="Dos2"> <FONT SIZE=5>Moderadamente en desacuerdo</FONT></label>
            <br>
            <input class="regular-radio" type="radio" id="Tres2" value=3 v-model="resp2">
            <label class="one" for="Tres2"> <FONT SIZE=5>Neutro</FONT></label>
            <br>
            <input class="regular-radio" type="radio" id="Cuarto2" value=2 v-model="resp2">
            <label class="one" for="Cuarto2"> <FONT SIZE=5>Moderadamente en acuerdo</FONT></label>
            <br>
            <input class="regular-radio" type="radio" id="Cinco2" value=1 v-model="resp2">
            <label class="one" for="Cinco2"> <FONT SIZE=5>Muy de acuerdo</FONT></label>


        </div>
        
    </div>
    <br>
     <div :class="resp3 == 1? 'back-red rounded-3'  
  : resp3 == 2? 'back-orange rounded-3'
  : resp3 == 3? 'back-yellow rounded-3'
  : resp3 == 4? 'back-yellowgreen rounded-3'
  :'back-green  rounded-3'">
    
        <div class="centerText" >
          <div >
         <label ><h2><b>Siempre estoy preparado</b></h2></label>
        <hr class="blackLine">
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
            
          </div>
        </div>
    </div>

        <br>
  
    <div :class="resp4 == 5? 'back-red rounded-3'  
  : resp4 == 4? 'back-orange rounded-3'
  : resp4 == 3? 'back-yellow rounded-3'
  : resp4 == 2? 'back-yellowgreen rounded-3'
  :'back-green  rounded-3'">
    
        <div class="centerText" >
    <div >
        <label><h2><b>Me estreso muy facil</b></h2></label>
        <hr class="blackLine">
        <br>
            <input class="regular-radio" type="radio" id="Uno4" value=5 v-model="resp4">
            <label class="one" for="Uno4"> <FONT SIZE=5>Muy en desacuerdo</FONT></label>
            <br>
            <input class="regular-radio" type="radio" id="Dos4" value=4 v-model="resp4">
            <label class="one" for="Dos4"> <FONT SIZE=5>Moderadamente en desacuerdo</FONT></label>
            <br>
            <input class="regular-radio" type="radio" id="Tres4" value=3 v-model="resp4">
            <label class="one" for="Tres4"> <FONT SIZE=5>Neutro</FONT></label>
            <br>
            <input class="regular-radio" type="radio" id="Cuarto4" value=2 v-model="resp4">
            <label class="one" for="Cuarto4"> <FONT SIZE=5>Moderadamente en acuerdo</FONT></label>
            <br>
            <input class="regular-radio" type="radio" id="Cinco4" value=1 v-model="resp4">
            <label class="one" for="Cinco4"> <FONT SIZE=5>Muy de acuerdo</FONT></label>
        </div>
      </div>
    </div>

     <br>
  
    <div :class="resp5 == 1? 'back-red rounded-3'  
  : resp5 == 2? 'back-orange rounded-3'
  : resp5 == 3? 'back-yellow rounded-3'
  : resp5 == 4? 'back-yellowgreen rounded-3'
  :'back-green  rounded-3'">
    
        <div class="centerText" >
    <div>

        <label><h2><b>Tengo un vocabulario amplio</b></h2></label>
        <hr class="blackLine">
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
            
    </div>
        </div>
    </div>
    </div>
     <br>
      <br>
    <div>   
      <button v-on:click="saveAns"
              class="mb-10 btn btn-sm rounded-4  floatr center color"
              type="submit">Siguiente</button>
      
    </div>

   </div>
   </div>
</template> 


<script>
import BfService from "@/services/BFService";
import Swal from "sweetalert2";
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
  methods: {
    async saveAns() {
      if (this.resp1=="") {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Contestar todas las preguntas para seguir",
        });
      }
      else if (this.resp2=="") {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Contestar todas las preguntas para seguir",
        });
      }
      else if (this.resp3=="") {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Contestar todas las preguntas para seguir",
        });
      }
      else if (this.resp4=="") {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Contestar todas las preguntas para seguir",
        });
      }
      else if (this.resp5=="") {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Contestar todas las preguntas para seguir",
        });
      }
      else {
        try {
        await BfService.guardarBigFive({
          email: this.email,
          res1: this.resp1,
          res2: this.resp2,
          res3: this.resp3,
          res4: this.resp4,
          res5: this.resp5,      
        }); 
        this.$router.push({ path: "/bigFive2" });
                
      } catch (error) {
        this.error = error.response.data.error;
        Swal.fire({
          icon: "error",
          title: "Error",
          text:"server error"+ this.error,
        });
      }
      }
    }
  },
};
</script>

<style>
.fontb{
  font-family: AvGard_N !important;
}

.mto1 {
  margin-left: 0.30;
}
.centerText{
  padding: 10px 20px;
}
hr.blackLine{
  border: 1px solid black;
}
.back-red{	
	
	border: 5px solid red !important;
}
.back-orange{
  border: 5px solid orange !important;
}
.back-yellow{
  border: 5px solid yellow !important;
}
.back-yellowgreen{
  border: 5px solid yellowgreen !important;
}
.back-green{		
	
	border: 5px solid green !important;
}
.one{
  padding:10px;
}

.regular-radio {
    display: none;

    
    border-radius: 100px;
    width: 100%;
    display: inline-block;
    position: relative;
    width: 20px;
    height: 20px;
}



</style>
