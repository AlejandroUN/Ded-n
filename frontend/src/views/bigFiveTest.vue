<template>
  <div id="app" class="mto1 mt-1 ml-5">
   <div class="container col-xl-10 col-xxl-8 px-4 py-5">
      <h2><b>TEST BIG FIVE</b></h2>
   </div>
      <vista1 @getData="getData" v-if="numero==1" ></vista1>
      <vista2 @getData="getData" v-if="numero==2"></vista2>
      <vista3 @getData="getData" v-if="numero==3"></vista3>
      <vista4 @getData="getData" v-if="numero==4"></vista4>
      <vista5 @getData="getData" v-if="numero==5"></vista5>
      <vista6 @getData="getData" v-if="numero==6"></vista6>
      <vista7 @getData="getData" v-if="numero==7"></vista7>
      <vista8 @getData="getData" v-if="numero==8"></vista8>
      <vista9 @getData="getData" v-if="numero==9"></vista9>
      <vista10 @getData="getData" v-if="numero==10"></vista10>
    
      
</div>
</template>

<script>
import BfService from "@/services/BFService";
import Swal from "sweetalert2";
import BigFive from "@/components/bigFive";
import BigFive2 from "@/components/bigFive2";
import BigFive3 from "@/components/bigFive3";
import BigFive4 from "@/components/bigFive4";
import BigFive5 from "@/components/bigFive5";
import BigFive6 from "@/components/bigFive6";
import BigFive7 from "@/components/bigFive7";
import BigFive8 from "@/components/bigFive8";
import BigFive9 from "@/components/bigFive9";
import BigFive10 from "@/components/bigFive10";
import pythonScriptsService from "@/services/pythonScriptsService";
export default ({
    components: { 
        vista1:BigFive,
        vista2:BigFive2,
        vista3:BigFive3,
        vista4:BigFive4,
        vista5:BigFive5,
        vista6:BigFive6,
        vista7:BigFive7,
        vista8:BigFive8,
        vista9:BigFive9,
        vista10:BigFive10,
 
        },
        data(){ return{
            numero : 1,
            resp:{
            resp1: "",
            resp2: "",
            resp3: "",
            resp4: "",
            resp5: "",},
            
            resp1:"",
            resp2:"",
            resp3:"",
            resp4:"",
            resp5:"",
            resp6:"",
            resp7:"",
            resp8:"",
            resp9:"",
            resp10:"",

            resp11:"",
            resp12:"",
            resp13:"",
            resp14:"",
            resp15:"",
            resp16:"",
            resp17:"",
            resp18:"",
            resp19:"",
            resp20:"",

            resp21:"",
            resp22:"",
            resp23:"",
            resp24:"",
            resp25:"",
            resp26:"",
            resp27:"",
            resp28:"",
            resp29:"",
            resp30:"",

            resp31:"",
            resp32:"",
            resp33:"",
            resp34:"",
            resp35:"",
            resp36:"",
            resp37:"",
            resp38:"",
            resp39:"",
            resp40:"",

            resp41:"",
            resp42:"",
            resp43:"",
            resp44:"",
            resp45:"",
            resp46:"",
            resp47:"",
            resp48:"",
            resp49:"",
            resp50:"",
        }
      },
    methods: {
        getData(data) {
      this.resp = data;
        if(this.numero<10){
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
            this.numero= 2;
            this.resp1=this.resp.resp1;
            this.resp2=this.resp.resp2;
            this.resp3=this.resp.resp3;
            this.resp4=this.resp.resp4;
            this.resp5=this.resp.resp5;
            this.resp.resp1='';
            this.resp.resp2='';
            this.resp.resp3='';
            this.resp.resp4='';
            this.resp.resp5='';        
        }
        else if(this.numero==2){
            this.numero= 3;
            this.resp6=this.resp.resp1;
            this.resp7=this.resp.resp2;
            this.resp8=this.resp.resp3;
            this.resp9=this.resp.resp4;
            this.resp10=this.resp.resp5;
            this.resp.resp1='';
            this.resp.resp2='';
            this.resp.resp3='';
            this.resp.resp4='';
            this.resp.resp5='';
        }
        else if(this.numero==3){
            this.numero= 4;
            this.resp11=this.resp.resp1;
            this.resp12=this.resp.resp2;
            this.resp13=this.resp.resp3;
            this.resp14=this.resp.resp4;
            this.resp15=this.resp.resp5;
            this.resp.resp1='';
            this.resp.resp2='';
            this.resp.resp3='';
            this.resp.resp4='';
            this.resp.resp5='';
        }
        else if(this.numero==4){
            this.numero= 5;
            this.resp16=this.resp.resp1;
            this.resp17=this.resp.resp2;
            this.resp18=this.resp.resp3;
            this.resp19=this.resp.resp4;
            this.resp20=this.resp.resp5;
            this.resp.resp1='';
            this.resp.resp2='';
            this.resp.resp3='';
            this.resp.resp4='';
            this.resp.resp5='';
        }
        else if(this.numero==5){
            this.numero= 6;
            this.resp21=this.resp.resp1;
            this.resp22=this.resp.resp2;
            this.resp23=this.resp.resp3;
            this.resp24=this.resp.resp4;
            this.resp25=this.resp.resp5;
            this.resp.resp1='';
            this.resp.resp2='';
            this.resp.resp3='';
            this.resp.resp4='';
            this.resp.resp5='';
        }
        else if(this.numero==6){
            this.numero= 7;
            this.resp26=this.resp.resp1;
            this.resp27=this.resp.resp2;
            this.resp28=this.resp.resp3;
            this.resp29=this.resp.resp4;
            this.resp30=this.resp.resp5;
            this.resp.resp1='';
            this.resp.resp2='';
            this.resp.resp3='';
            this.resp.resp4='';
            this.resp.resp5='';
        }
        else if(this.numero==7){
            this.numero= 8;
            this.resp31=this.resp.resp1;
            this.resp32=this.resp.resp2;
            this.resp33=this.resp.resp3;
            this.resp34=this.resp.resp4;
            this.resp35=this.resp.resp5;
            this.resp.resp1='';
            this.resp.resp2='';
            this.resp.resp3='';
            this.resp.resp4='';
            this.resp.resp5='';
        }
        else if(this.numero==8){
            this.numero= 9;
            this.resp36=this.resp.resp1;
            this.resp37=this.resp.resp2;
            this.resp38=this.resp.resp3;
            this.resp39=this.resp.resp4;
            this.resp40=this.resp.resp5;
            this.resp.resp1='';
            this.resp.resp2='';
            this.resp.resp3='';
            this.resp.resp4='';
            this.resp.resp5='';
            }
        else if(this.numero==9){
            this.numero= 10;
            this.resp41=this.resp.resp1;
            this.resp42=this.resp.resp2;
            this.resp43=this.resp.resp3;
            this.resp44=this.resp.resp4;
            this.resp45=this.resp.resp5;
            this.resp.resp1='';
            this.resp.resp2='';
            this.resp.resp3='';
            this.resp.resp4='';
            this.resp.resp5='';
        }
        
      
    },
     terminar(){
        this.resp46=this.resp.resp1;
        this.resp47=this.resp.resp2;
        this.resp48=this.resp.resp3;
        this.resp49=this.resp.resp4;
        this.resp50=this.resp.resp5;

        try {  
              
           BfService.BigFive({          
			email: this.$store.state.user.email,
            res1: this.resp1,
            res2: this.resp2,
            res3: this.resp3,
            res4: this.resp4,
            res5: this.resp5, 
            res6: this.resp6,
            res7: this.resp7,
            res8: this.resp8,
            res9: this.resp9,
            res10: this.resp10,
            res11: this.resp11,
            res12: this.resp12,
            res13: this.resp13,
            res14: this.resp14,
            res15: this.resp15,
            res16: this.resp16,
            res17: this.resp17,
            res18: this.resp18,
            res19: this.resp19,
            res20: this.resp20,
            res21: this.resp21,
            res22: this.resp22,
            res23: this.resp23,
            res24: this.resp24,
            res25: this.resp25, 
            res26: this.resp26,
            res27: this.resp27,
            res28: this.resp28,
            res29: this.resp29,
            res30: this.resp30,
            res31: this.resp31,
            res32: this.resp32,
            res33: this.resp33,
            res34: this.resp34,
            res35: this.resp35, 
            res36: this.resp36,
            res37: this.resp37,
            res38: this.resp38,
            res39: this.resp39,
            res40: this.resp40,
            res41: this.resp41,
            res42: this.resp42,
            res43: this.resp43,
            res44: this.resp44,
            res45: this.resp45, 
            res46: this.resp46,
            res47: this.resp47,
            res48: this.resp48,
            res49: this.resp49,
            res50: this.resp50,            
        });       
                
        } catch (error) {
			this.error = error.resp.response.data.error;
			Swal.fire({
				icon: "error",
				title: "Error",
				text:"server error"+ this.error,
			});
		}
		// Once the answers are saved, do the calculations with them
		try{
			console.log(this.$store.state.user.email)
			console.log(this.$store.state.user.id)
			pythonScriptsService.bigFiveP({
				email: this.$store.state.user.email, 
				id: this.$store.state.user.id,
			})
		}catch (error) {
			this.error = error.response.data.error;
			Swal.fire({
				icon: "error",
				title: "Error",
				text: this.error,
			});
		}

    }
  },    
})
</script>

<style>
.centrar{
    width: 50% !important;
}
</style>
