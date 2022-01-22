<template>
  <div id="app" class="mto1 mt-1 ml-5">
   <div class="container col-xl-10 col-xxl-8 px-4 py-5">   
  
  

    <H1>TEST Big Five</H1>
    <p>
      La taxonomía de los grandes cinco se refiere a cinco factores de personalidad originalmente teorizados
       a partir del análisis léxico practicado sobre bancos de datos de encuestas de personalidad : los encuestados 
       se describirían o serían descritos a menudo utilizando los mismos términos, según distintas encuestas, y en cada 
       caso podría asociarse una constelación de lexemas a un rasgo jerárquicamente superior a los rasgos denotados por 
        ellos : por ejemplo, alguien descrito como “abierto” sería también descrito como “creativo”, “inteligente”, “absorto”,
        entre otros. Resultó y resulta actualmente posible distinguir cinco clusters de lexemas que dan lugar a los cinco
         factores de personalidad que constituyen la taxonomía :
    </p>
    <p>
      <ul>

        <li>Apertura a la experiencia
            (segmentada en seis subfactores : i) imaginación activa, ii) sensibilidad estética,
             iii) atención a los propios sentimientos, iv) gusto por la variedad, v) curiosidad intelectual 
            y vi) desafío a la autoridad)</li>

        <li> Escrupulosidad (segmentada en seis subfactores : i) competencia, ii) orden, iii) compromiso, 
            iv) orientación por logros, v) autodisciplina y vi) deliberación)</li>

        <li>Extroversión (segmentada en tres subfactores : i) asertividad, ii) energía y iii) gregarismo) </li>

        <li>Amabilidad (segmentada en seis subfactores : i) confianza, ii) franqueza, iii) altruismo, iv) obediencia, v) modestia y vi) ternura)</li>

        <li>Neuroticismo (segmentada en seis subfactores : i) tendencia a la ansiedad, ii) tendencia a la rabia, iii) tendencia al estrés,
             iv) cohibición, v) vulnerabilidad, vi) volatilidad)</li>

        

    </ul>
    </p>
    <p>
      Al interior de cada taxón hay taxonomías propias, extendiendo la taxonomía principal. Hay más divergencia, de investigación 
      a investigación, en la extensión de la taxonomía que en la taxonomía principal. 
    </p>
    <p>
    Entre las características psicológicas que han sido predecidas con éxito a partir de esta taxonomía está el estilo de aprendizaje, 
    y eso hace que sea particularmente útil para asociar usuarios con maestros. Además, la asociación de carácteres parecidos en términos 
    distintos al estilo de aprendizaje también es oportuna para la formación de asociaciones de aprendizaje, puesto que un estudiante se 
    siente más afín a un maestro que expresa las virtudes (y no los vicios) en los espectros que lo caracterizan (por ejemplo, si en una persona
     es prevalente la influencia que tiene la amabilidad, ella se sentirá más dada a imitar a otra que expresa ese mismo rasgo de una 
     manera más virtuosa que ella : aprenderá de aquella otra, es decir, la verá como un maestro). 

    </p>
    <p>
      Para realizar la clasificación necesaria para la asociación, utilizamos la siguiente prueba psicometrica:  

     La prueba consta de cincuenta elementos que debe calificar según la veracidad que tienen sobre usted en una 
     escala de cinco puntos donde debe 

    </p>
   
    <br />
    <div>
      <router-link to="/bigFive"><button>Empezar prueba</button></router-link>
    </div>

  </div>
  </div>


</template>

<script>
export default {
  data() {
    return {
    
      resp1:"",
      resp2:"",
      resp3:"",
      resp4:"",
      resp5:"",
     
    };
  },
  methods: {
   
  },
};
</script>

<style>
.mto1 {
  margin-left: 0.25
}
</style>
