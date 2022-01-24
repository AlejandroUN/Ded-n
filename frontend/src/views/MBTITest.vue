<template>
 <div id="app">
    <vista1 @getData="getData" v-if="numero==1" ></vista1>
      <vista2 @getData="getData" v-if="numero==2"></vista2>
      <vista3 @getData="getData" v-if="numero==3"></vista3>
      <vista4 @getData="getData" v-if="numero==4"></vista4>
      <div clas="container">


      </div>
</div>
</template>
<script>
import Swal from "sweetalert2";
import MBTI from "@/components/MBTI";
import MBTI2 from "@/components/MBTI2";
import MBTI3 from "@/components/MBTI3";
import MBTI4 from "@/components/MBTI4";
export default ({
    components: { 
        vista1:MBTI,
        vista2:MBTI2,
        vista3:MBTI3,
        vista4:MBTI4,
        },
        
    data(){ return{
        numero : 1,
        resp:'',

        ext_intro_1: "",
        ext_intro_2: "",
        ext_intro_3: "",
        ext_intro_4: "",
        ext_intro_5: "",
        ext_intro_6: "",
        ext_intro_7: "",
        ext_intro_8: "",
        ext_intro_9: "",
        ext_intro_10: "",

        sens_int_1: "",
        sens_int_2: "",
        sens_int_3: "",
        sens_int_4: "",
        sens_int_5: "",
        sens_int_6: "",
        sens_int_7: "",
        sens_int_8: "",
        sens_int_9: "",
        sens_int_10: "",

        think_feel_1: "",
        think_feel_2: "",
        think_feel_3: "",
        think_feel_4: "",
        think_feel_5: "",
        think_feel_6: "",
        think_feel_7: "",
        think_feel_8: "",
        think_feel_9: "",
        think_feel_10: "",



        judg_pers_1: "",
        judg_pers_2: "",
        judg_pers_3: "",
        judg_pers_4: "",
        judg_pers_5: "",
        judg_pers_6: "",
        judg_pers_7: "",
        judg_pers_8: "",
        judg_pers_9: "",
        judg_pers_10: "",

        }
    },    
    methods:{
         getData(data) {
      this.resp = data;
      if(this.numero<4){
        Swal.fire({
            icon: "success",
            title: "",
            text: "Continuando Test...",
            });
            this.swapComponent();}

        else{
             Swal.fire({
            icon: "success",
            title: "",
            text: "Encuesta Terminada",
            });
            this.terminar();
        }
    },
    swapComponent(){
        if(this.numero==1){
            this.numero=2;
            this.ext_intro_1=this.resp.ext_intro_1;
            this.ext_intro_2=this.resp.ext_intro_2;
            this.ext_intro_3=this.resp.ext_intro_3;
            this.ext_intro_4=this.resp.ext_intro_4;
            this.ext_intro_5=this.resp.ext_intro_5;
            this.ext_intro_6=this.resp.ext_intro_6;
            this.ext_intro_7=this.resp.ext_intro_7;
            this.ext_intro_8=this.resp.ext_intro_8;
            this.ext_intro_9=this.resp.ext_intro_9;
            this.ext_intro_10=this.resp.ext_intro_10;
            this.resp='';     
        }
        else if(this.numero==2){
            this.numero= 3;
            this.sens_int_1=this.resp.sens_int_1;
            this.sens_int_2=this.resp.sens_int_2;
            this.sens_int_3=this.resp.sens_int_3;
            this.sens_int_4=this.resp.sens_int_4;
            this.sens_int_5=this.resp.sens_int_5;
            this.sens_int_6=this.resp.sens_int_6;
            this.sens_int_7=this.resp.sens_int_7;
            this.sens_int_8=this.resp.sens_int_8;
            this.sens_int_9=this.resp.sens_int_9;
            this.sens_int_10=this.resp.sens_int_10;
            this.resp='';
        }
        else if(this.numero==3){
            this.numero= 4;
            this.think_feel_1=this.resp.think_feel_1;
            this.think_feel_2=this.resp.think_feel_2;
            this.think_feel_3=this.resp.think_feel_3;
            this.think_feel_4=this.resp.think_feel_4;
            this.think_feel_5=this.resp.think_feel_5;
            this.think_feel_6=this.resp.think_feel_6;
            this.think_feel_7=this.resp.think_feel_7;
            this.think_feel_8=this.resp.think_feel_8;
            this.think_feel_9=this.resp.think_feel_9;
            this.think_feel_10=this.resp.think_feel_10;

            
            this.resp='';
        }
        
            
            

            
            
    },


    terminar(){
        this.judg_pers_1=this.resp.judg_pers_1;
            this.judg_pers_2=this.resp.judg_pers_2;
            this.judg_pers_3=this.resp.judg_pers_3;
            this.judg_pers_4=this.resp.judg_pers_4;
            this.judg_pers_5=this.resp.judg_pers_5;
            this.judg_pers_6=this.resp.judg_pers_6;
            this.judg_pers_7=this.resp.judg_pers_7;
            this.judg_pers_8=this.resp.judg_pers_8;
            this.judg_pers_9=this.resp.judg_pers_9;
            this.judg_pers_10=this.resp.judg_pers_10;
    }
    
    
    
    }
})
</script>
<style >

</style>
