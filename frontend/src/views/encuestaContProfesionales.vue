<template>
  <div id="app">
    <H1>Test BOTE PRONTO</H1>
    <p>
     
      En este ámbito de busqueda de contactos profesionales, planteamos la siguiente
      prueba, la cual clasifica al encuestador en uno de los siguientes facetas:
    <ul>

        <li>antropólogo</li>

        <li> polinizador</li>

        <li>colaborador </li>

        <li>director</li>

        <li>experimentador</li>

        <li> saltador de obstáculos</li>

        <li> arquitecto de experiencias </li>

        <li>escenógrafo</li>

        <li>cuidador</li>

        <li>cuentacuentos</li>

    </ul>
    </p>
    <p>
      Estas facetas son las definidas que existen en un entorno profesional o 
      relacionadas con un componente de innovación. La intención de este test
      es clasificar al usuario en el componente que lo defina más, con el 
      objetivo de relacionarlo con usuarios que sean más acorde para realizar 
      un contacto de tipo profesional. 
    </p>

    <p>
      Para categorizar al usuario , es necesario que el usuario nos explique
      a que área profesional se dedica o esta interesado el usuario relacionarse
    </p>
    <div><label>Area Profesional</label></div>
    <div>
      <select v-model="area">
        <option>Ciencias Humanas</option>
        <option>Ciencias Básicas y Tecnológicas</option>
        <option>Ciencias Jurídicas</option>
        <option>Ciencias de la salud</option>
        <option>Lenguas</option>
        <option>Ciencias de la Educación</option>
        <option>Ciencias Económicas y Administrativas</option>
        <option>Agropecuario</option>
      </select>
    </div>
    <br />
    
    
    <p>
        Ya para desarrollar la categorización por las facetas, se realiza el
        siguiente test, en donde se le dan varias situaciones al usuario.
        El usuario debe asignar un número a cada situación dependiendo de cuán 
        identificado se siente con la situación.
        El número a asignar es del 1 al 10 , siendo 10 el que representa que se
        siente más identificado con la frase expuesta, y 1 siendo que no se 
        representa con la frase. 

        También se debe tener en cuenta que se dividen las frases por bloques,
        se debe procurar que los números no sean los mismos para un resultado
        lo más acertado posible
    </p>
    
    <br />
    <h3>Bloque 1</h3>
    <div>
      <div>
        <input type="number" min="1" max="10" />
        <label>Observo a mi alrededor como un novato, con mente abiertas.</label>
      </div>
      <div>
        <input type="number" min="1" max="10" />
        <label>Tengo una formación ecléctica y combino intereses y fortalezas diversas.</label>
      </div>
      <div>
        <input type="number" min="1" max="10" />
        <label>Me encanta coordinar a la gente y lograr metas juntos.</label>
      </div>
      <div>
        <input type="number" min="1" max="10" />
        <label>Disfruto lo inesperado e improviso cuando es necesario.</label>
      </div>
      <div>
        <input type="number" min="1" max="10" />
        <label>Tengo pasión por el trabajo duro, una mente curiosa y apertura a la serendipia.</label>
      </div>
      <div>
        <input type="number" min="1" max="10" />
        <label>Hago más con menos.</label>
      </div>
      <div>
        <input type="number" min="1" max="10" />
        <label>Creo que siempre debe darse algo especial a los usuarios.</label>
      </div>
      <div>
        <input type="number" min="1" max="10" />
        <label>Pienso que los espacios físicos inciden en el desempeño creativo.</label>
      </div>
      <div>
        <input type="number" min="1" max="10" />
        <label>Creo que cuidar la experiencia que vive el usuario es lo más importante.</label>
      </div>
      <div>
        <input type="number" min="1" max="10" />
        <label>Considero que contar historias potencia la motivación y creatividad.</label>
      </div>
    </div>
    <br />
     
    <br />
    <h3>Bloque 2</h3>
    <div>
      <div>
        <input type="number" min="1" max="10" />
        <label>Soy hábil para no juzgar y sentir empatía hacia lo que me rodea.</label>
      </div>
      <div>
        <input type="number" min="1" max="10" />
        <label>Transfiero conocimiento de un dominio a otro para solucionar problemas.</label>
      </div>
      <div>
        <input type="number" min="1" max="10" />
        <label>Disfruto el trabajo multidisciplinario.</label>
      </div>
      <div>
        <input type="number" min="1" max="10" />
        <label>Impulso a los miembros de mi equipo para que estén bajo el reflector.</label>
      </div>
      <div>
        <input type="number" min="1" max="10" />
        <label>	Me encanta jugar y probar ideas y aproximaciones diferentes.</label>
      </div>
      <div>
        <input type="number" min="1" max="10" />
        <label>Mi característica principal es la perseverancia.</label>
      </div>
      <div>
        <input type="number" min="1" max="10" />
        <label>Uso los mismos ingredientes que otros, pero genero algo memorable.</label>
      </div>
      <div>
        <input type="number" min="1" max="10" />
        <label>Es importante balancear el espacio individual y para la colaboración.</label>
      </div>
      <div>
        <input type="number" min="1" max="10" />
        <label>Individualizo el servicio y establezco una relación con el usuario.</label>
      </div>
      <div>
        <input type="number" min="1" max="10" />
        <label>Soy excelente para crear y contar historias que mueven a otros.</label>
      </div>
    </div>
    <br />

     
    <br />
    <h3>Bloque 3</h3>
    <div>
      <div>
        <input type="number" min="1" max="10" />
        <label>Me encanta conocer y hablar con otros y ellos no se sienten intimidados por mí.</label>
      </div>
      <div>
        <input type="number" min="1" max="10" />
        <label>Tengo amplio conocimiento en varias áreas y me especializo al menos en una.</label>
      </div>
      <div>
        <input type="number" min="1" max="10" />
        <label>Me gusta hacer conexiones personales con la gente con la que trabajo.</label>
      </div>
      <div>
        <input type="number" min="1" max="10" />
        <label>Me encanta establecer metas que parecen difíciles o hasta imposibles.</label>
      </div>
      <div>
        <input type="number" min="1" max="10" />
        <label>Me interesa hacer que todo suceda más rápido, sea más barato y divertirme.</label>
      </div>
      <div>
        <input type="number" min="1" max="10" />
        <label>Siempre transformo un obstáculo en una oportunidad.</label>
      </div>
      <div>
        <input type="number" min="1" max="10" />
        <label>Pienso que es importante detallar cómo es el proceso por el que pasa el usuario.</label>
      </div>
      <div>
        <input type="number" min="1" max="10" />
        <label>Diseñando espacios, hago que la gente se mueva para formar nuevos equipos.</label>
      </div>
      <div>
        <input type="number" min="1" max="10" />
        <label>Hago que la gente aprenda sin enseñar.</label>
      </div>
      <div>
        <input type="number" min="1" max="10" />
        <label>Creo que, al escuchar una buena historia, los equipos se consolidan.</label>
      </div>
    </div>
    <br />

     
    <br />
    <h3>Bloque 4</h3>
    <div>
      <div>
        <input type="number" min="1" max="10" />
        <label>Creo que la mejor fuente de información para un proyecto es convivir con otros.</label>
      </div>
      <div>
        <input type="number" min="1" max="10" />
        <label>Veo relaciones y conexiones que otros no.</label>
      </div>
      <div>
        <input type="number" min="1" max="10" />
        <label>Tengo habilidad para potenciar la motivación del equipo.</label>
      </div>
      <div>
        <input type="number" min="1" max="10" />
        <label>Creo que lo central es seleccionar muy bien a los miembros del grupo de trabajo.</label>
      </div>
      <div>
        <input type="number" min="1" max="10" />
        <label>Disfruto haciendo las ideas tangibles.</label>
      </div>
      <div>
        <input type="number" min="1" max="10" />
        <label>Me crezco ante la adversidad.</label>
      </div>
      <div>
        <input type="number" min="1" max="10" />
        <label>Tengo un sexto sentido para identificar lo que es real y usarlo para innovar.</label>
      </div>
      <div>
        <input type="number" min="1" max="10" />
        <label>Hay una relación directa entre espacios energizados y equipos energizados.</label>
      </div>
      <div>
        <input type="number" min="1" max="10" />
        <label>Proyecto competencia y seguridad y respondo todas las dudas del usuario.</label>
      </div>
      <div>
        <input type="number" min="1" max="10" />
        <label>Considero que una buena historia puede dar orden al caos.</label>
      </div>
    </div>
    <br />

     
    <br />
    <h3>Bloque 5</h3>
    <div>
      <div>
        <input type="number" min="1" max="10" />
        <label>Busco claves para solucionar problemas en lugares inesperados. Ej.: el basurero.</label>
      </div>
      <div>
        <input type="number" min="1" max="10" />
        <label>Busco aprender de los niños y adolescentes.</label>
      </div>
      <div>
        <input type="number" min="1" max="10" />
        <label>Disfruto el lado humano del trabajo y valoro la interdependencia.</label>
      </div>
      <div>
        <input type="number" min="1" max="10" />
        <label>Tengo la habilidad de sacar lo mejor de la gente con la que trabajo.</label>
      </div>
      <div>
        <input type="number" min="1" max="10" />
        <label>Hago prototipos para comunicar, perfeccionar y probar mis ideas.</label>
      </div>
      <div>
        <input type="number" min="1" max="10" />
        <label>Nunca tomo "no" como respuesta y a veces le doy la vuelta a la autoridad.</label>
      </div>
      <div>
        <input type="number" min="1" max="10" />
        <label>A la gente le gusta coleccionar experiencias, por lo que hay que diseñarlas.</label>
      </div>
      <div>
        <input type="number" min="1" max="10" />
        <label>Al diseñar un espacio hay que ver qué se quiere priorizar y hacerlo inevitable.</label>
      </div>
      <div>
        <input type="number" min="1" max="10" />
        <label>Me gusta hacer sentir a los usuarios de mi servicio como miembros de un club.</label>
      </div>
      <div>
        <input type="number" min="1" max="10" />
        <label>Las anécdotas del trabajo que se convierten en mitos son poderosos motivadores.</label>
      </div>
    </div>
    <br />

    <div>
      <button>Terminar prueba</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      area:"",
      
    };
  },
  
};
</script>

<style></style>
