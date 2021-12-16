<template>
  <div id="app">
    <H1>Test de allport, guía de valores</H1>
    <p>
      Para la búsqueda de alguien que pueda ayudarte en tu crecimiento personal
      es importante tener en cuenta tus valores personales, intereses y
      opiniones, además de otros aspectos de tu vida privada; todo con el fin de
      encontrar una persona que se adapte a ti lo mejor posible.
    </p>
    <p>
      El Estudio de Valores, un test de personalidad elaborado por Gordon
      Allport, Philip Vernon y Gardner Lindzey, fue uno de los primeros
      instrumentos psicológicos que se desarrollaron con el objetivo de evaluar
      los valores personales o las motivaciones básicas.
    </p>
    <p>
      El psicólogo estadounidense Gordon William Allport (1897-1967) es conocido
      principalmente por su teoría personalística, uno de los primeros intentos
      de explicar la personalidad humana desde la psicología, enfatizando en la
      individualidad de cada ser humano y en el aspecto activo de nuestra
      naturaleza, que nos impulsa a alcanzar metas. En el año 1931 Allport,
      junto con Philip E. Vernon y Gardner Lindzey, publicó una escala de
      evaluación de los valores personales, que también pueden ser entendidos
      como motivaciones básicas. Esta prueba se basó de forma directa en el
      libro “Tipos de hombres” del filósofo Eduard Spranger y sus creadores la
      denominaron “Estudio de Valores”. Allport pensaba que una buena forma de
      analizar la personalidad de un individuo concreto consiste en evaluar
      cuáles son sus valores morales. En este sentido dio mucha más importancia
      al momento presente que a la historia personal, en la que se focalizaba la
      orientación psicoanalítica, que dominaba la psicología de la época. El
      objetivo del test de Allport y sus colaboradores es determinar el peso
      relativo que tienen para un individuo determinado seis tipos de valores:
      el teórico, el económico, el estético, el social, el político y el
      religioso, que Spranger consideraba fundamentales.
    </p>
    <p>
      Antes del test en sí, es de vital importancia el conocer de entrada un
      poco más de usted, por lo que lo invitamos a suministrar los siguientes
      datos de forma totalmente honesta.
    </p>
    <h3>Identificación religiosa</h3>
    <div><label>Se considera usted:</label></div>
    <div>
      <select v-model="creencia">
        <option>Ateo</option>
        <option>Agnostico</option>
        <option>Apateista</option>
        <option>Deista</option>
        <option>Panteista</option>
        <option>Panenteista</option>
        <option>Teista</option>
      </select>
    </div>
    <br />
    <div>
      <label
        >¿Profesa o se siente identificado con alguna religión? Puede responder
        que no si tiene alguna creencia personal que no se acomoda a los
        preceptos de ninguna religión</label
      >
    </div>
    <input type="radio" value="Si" v-model="religioso" /><label>Si</label>
    <input type="radio" value="No" v-model="religioso" /><label>No</label>
    <div v-show="es_religioso()">
      <br />
      <label
        >Dado que respondió que profesa o se identifica con alguna religión, por
        favor indiquenos cual:</label
      >
      <input type="text" v-model="religion" />
    </div>
    <br />
    <div v-show="!es_religioso()">
      <br />
      <label
        >¿Considera que posee algún tipo de espiritualidad o basa ciertas
        deciciones en su vida guiado por algún tipo de guía espiritual?</label
      >
      <input type="radio" value="Si" v-model="espiritualidad" /><label
        >Si</label
      >
      <input type="radio" value="No" v-model="espiritualidad" /><label
        >No</label
      >
      <div v-show="tiene_espiritualidad()">
        <div>
          <br />
          <label
            >Por favor comentenos que es lo más cercano que considera a un guía
            espiritual</label
          >
        </div>
        <div>
          <select v-model="guia_espiritual">
            <option>Espiritus de la naturaleza</option>
            <option>Seres de luz</option>
            <option>Antepasados</option>
            <option>Plantas</option>
            <option>Madre tierra o la naturaleza misma</option>
            <option>
              Alguna creencia personal en un dios o dioses, no necesariamente
              representativos de ninguna religión
            </option>
            <option>Maestros ascendidos</option>
            <option>Seres estelares</option>
            <option>Energías</option>
            <option>Astros</option>
          </select>
        </div>
      </div>
    </div>
    <br />
    <h3>Otros aspectos relevantes</h3>
    <div>
      <label
        >Indique por favor con cual o cuales de los siguientes conglomerados
        humanos, movimientos sociales o lineas de pensamiento y/o sentimiento o
        gustos se siente identificado o a los cuales pertenece, si no conoce
        alguno de ellos, por favor abstengase de buscarlo, este hecho también es
        relevante dentro de los resultados.</label
      >
      <div>
        <div>
          <input type="checkbox" value="Feminismo" v-model="checked" />
          <label>Feminismo</label>
          <input type="checkbox" value="Movimiento Hippie" v-model="checked" />
          <label>Movimiento Hippie</label>
          <input type="checkbox" value="Rastafarismo" v-model="checked" />
          <label>Rastafarismo</label>
          <input type="checkbox" value="Ambientalismo" v-model="checked" />
          <label>Ambientalismo</label>
          <input type="checkbox" value="Animalismo" v-model="checked" />
          <label>Animalismo</label>
          <input
            type="checkbox"
            value="Movimiento Antiglobalizacion"
            v-model="checked"
          />
          <label>Movimiento Antiglobalizacion</label>
          <input type="checkbox" value="Comunidad LGBTIQ+" v-model="checked" />
          <label>Comunidad LGBTIQ+</label>
          <input type="checkbox" value="Mgtown" v-model="checked" />
          <label>Mgtown</label>
          <input type="checkbox" value="Ecologismo" v-model="checked" />
          <label>Ecologismo</label>
          <input
            type="checkbox"
            value="Movimiento Pro-eleccion"
            v-model="checked"
          />
          <label>Movimiento Pro-eleccion</label>
          <input
            type="checkbox"
            value="Movimiento Pro-vida"
            v-model="checked"
          />
          <label>Movimiento Pro-vida</label>
          <input
            type="checkbox"
            value="Movimientos independentistas o separatistas"
            v-model="checked"
          />
          <label>Movimientos independentistas o separatistas</label>
          <input type="checkbox" value="Nacionalismo" v-model="checked" />
          <label>Nacionalismo</label>
          <input type="checkbox" value="Anti-vacunas" v-model="checked" />
          <label>Anti-vacunas</label>
          <input type="checkbox" value="Movimiento obrero" v-model="checked" />
          <label>Movimiento obrero</label>
          <input type="checkbox" value="Pacifismo" v-model="checked" />
          <label>Pacifismo</label>
          <input type="checkbox" value="Antimilitarismo" v-model="checked" />
          <label>Antimilitarismo</label>
          <input type="checkbox" value="Antiespecismo" v-model="checked" />
          <label>Antiespecismo</label>
          <h1>Quedan faltando otras</h1>
        </div>
      </div>
    </div>
    <h3>El test en si</h3>
    <p>
      El test de Allport consta de dos partes. En la primera se muestran una
      serie de ítems con los que se deberá marcar si se está de acuerdo,
      desacuerdo, parcialmente de acuerdo o parcialmente en desacuerdo, o
      escojer alguna de dos opciones. La segunda parte muestra cuatro opciones
      que deberán jerarquizarse en función del mayor acuerdo, al mayor
      desacuerdo, representando el primero en ser elegido como el de mas acuerdo
      y el ultimo como el de mas desacuerdo.
    </p>
    <h3>Primera parte</h3>
    <div>
      <label
        >¿El principal objeto de la ciencia es describir la verdad y no darle
        una aplicacion practica?</label
      >
    </div>
    <input type="radio" /><label>De acuerdo</label> <input type="radio" />
    <label>Parcialmente de acuerdo</label>
    <input type="radio" /><label>Parcialmente en desacuerdo</label>
    <input type="radio" /><label>En desacuerdo</label>
    <br />
    <br />
    <div>
      <label
        >¿Considera que la Biblia, el Coran, la Toraj y demás libros sagrados
        deben considerarse como mitología y literatura mas no como una
        revelacion espiritual?</label
      >
    </div>
    <input type="radio" /><label>De acuerdo</label> <input type="radio" /><label
      >Parcialmente de acuerdo</label
    >
    <input type="radio" /><label>Parcialmente en desacuerdo</label>
    <input type="radio" /><label>En desacuerdo</label>
    <br />
    <br />
    <div>
      <label
        >¿A cual de los siguientes hombres cree que debe atribuírsele mayor
        mérito por su contribución al profreso de la humanidad?</label
      >
    </div>
    <input type="radio" /><label>Aristoteles</label> <input type="radio" />
    <label>Simon Bolivar</label>
    <input type="radio" /><label>Equivalentemente a ambos</label>
    <input type="radio" /><label
      >No considero que ninguno haya aportado al progreso de la humanidad</label
    >
    <br />
    <br />
    <div>
      <label
        >Dando por hecho que usted tiene la habilidad necesaria, preferiria
        ser:</label
      >
    </div>
    <input type="radio" /><label>Politico</label> <input type="radio" />
    <label>Banquero</label>
    <br />
    <br />
    <div>
      <label
        >¿Cree justificable que los grandes artistas como Beethoven, Wagner y
        Byron hayan sido egoistas e indiferentes a los sentimientos de
        otros?</label
      >
    </div>
    <input type="radio" /><label>De acuerdo</label> <input type="radio" />
    <label>Parcialmente de acuerdo</label>
    <input type="radio" /><label>Parcialmente en desacuerdo</label>
    <input type="radio" /><label>En desacuerdo</label>
    <br />
    <br />
    <div>
      <label
        >¿Cual de estas dos disciplinas cree que tendrán en un futuro mayor
        valor para la humanidad?</label
      >
    </div>
    <input type="radio" /><label>Matematicas</label> <input type="radio" />
    <label>Teologia</label>
    <br />
    <br />
    <div>
      <label
        >¿Cual considera usted que debe ser la función más importante de los
        dirigentes modernos? Contemple solamente las siguientes dos
        opciones</label
      >
    </div>
    <input type="radio" /><label
      >Inducir a la gente a obtener resultados eficientes</label
    >
    <input type="radio" />
    <label>Inducir a la gente a interesarse por los derechos humanos</label>
    <br />
    <br />
    <div>
      <label
        >Cuando presencia una ceremonia pomposa (religiosa, academica) ¿Que le
        interesa mas?</label
      >
    </div>
    <input type="radio" /><label>El colorido y formalidad del acto</label>
    <input type="radio" />
    <label>La influencia y la fuerza del grupo</label>
    <br />
    <br />
    <div>
      <label
        >¿Cual de estos rasgos de caracter consideraria mas deseables?</label
      >
    </div>
    <input type="radio" /><label>Los altos ideales y el respeto</label>
    <input type="radio" />
    <label>El desinteres y la condolencia</label>
    <br />
    <br />
    <div>
      <label
        >¿Si fuera profesor universitario, preferiria dar clases de:?</label
      >
    </div>
    <input type="radio" /><label>Literatura</label> <input type="radio" />
    <label>Fisica y Quimica</label>
    <br />
    <br />
    <div>
      <label
        >Si tuviera las siguientes noticias con encabezados del mismo tamaño,
        ¿Cual leeria con mas interes?</label
      >
    </div>
    <input type="radio" /><label
      >Importante problema teologico finalmente resuelto</label
    >
    <input type="radio" />
    <label>Grandes mejoras en las condiciones del mercado</label>
    <br />
    <br />
    <div>
      <label
        >Si tuviera las siguientes noticias con encabezados del mismo tamaño,
        ¿Cual leeria con mas interes?</label
      >
    </div>
    <input type="radio" /><label>La suprema corte anuncia su decision</label>
    <input type="radio" />
    <label>Nueva teoria politica fue propuesta</label>
    <br />
    <br />
    <div>
      <label
        >Al visitar un templo, ¿Le impresiona mas el sentido de reverencia que
        el aspecto arquitectonico?</label
      >
    </div>
    <input type="radio" /><label>De acuerdo</label> <input type="radio" />
    <label>Parcialmente de acuerdo</label>
    <input type="radio" /><label>Parcialmente en desacuerdo</label>
    <input type="radio" /><label>En desacuerdo</label>
    <br />
    <br />
    <div>
      <label
        >Suponiendo que tuviera el tiempo disponible, preferiria usarlo en:
        (Tome en cuenta sólo estas dos opciones)</label
      >
    </div>
    <input type="radio" /><label>Desarrollar tu habilidad favorita</label>
    <input type="radio" />
    <label>Hacer labor social</label>
    <br />
    <br />
    <div>
      <label
        >De haber una exposiscion en su ciudad, usted preferiría que fuera
        de:</label
      >
    </div>
    <input type="radio" /><label>Nuevos productos industriales</label>
    <input type="radio" />
    <label>Aparatos cientificos</label>
    <br />
    <br />
    <div>
      <label
        >Si tuviera la oportunidad y si ninguna de estas actividades existieran
        donde usted vive, ¿Que le gustaria fundar? (Considere sólo las opciones
        propuestas)</label
      >
    </div>
    <input type="radio" /><label
      >Una sociedad de debates sobre problemas nacionales</label
    >
    <input type="radio" />
    <label>Una orquesta de musica clasica</label>
    <br />
    <br />
    <div>
      <label
        >La finalidad de las religiones en la actualidad debería estar mas
        enfocada en:</label
      >
    </div>
    <input type="radio" /><label
      >Exaltar las tendencias altruistas y caritativas</label
    >
    <input type="radio" />
    <label>Fomentar el recogimiento y crecimiento espiritual</label>
    <br />
    <br />
    <div>
      <label
        >Si tuviera que pasar un tiempo a solas en una sala de espera y hubiera
        dos revistas, ¿Cual escogeria?</label
      >
    </div>
    <input type="radio" /><label>Seminario de estudios cientificos</label>
    <input type="radio" />
    <label>Arte y decoracion</label>
    <br />
    <br />
    <div>
      <label>Preferiria usted escuchar una serie de conferencias sobre:</label>
    </div>
    <input type="radio" /><label
      >Comparacion del desarrollo de las grandes creencias religiosas</label
    >
    <input type="radio" />
    <label
      >Comparacion de meritos en los sistemas de gobierno de Estados Unidos y
      China</label
    >
    <br />
    <br />
    <div>
      <label
        >¿Cual de las siguientes funciones de la educacion formal considera mas
        importante?</label
      >
    </div>
    <input type="radio" /><label
      >La preparacion que da en los aspectos de utilidad practica y recompensa
      monetaria</label
    >
    <input type="radio" />
    <label
      >La preparacion que da para participar en las actividades de ayuda a la
      comunidad</label
    >
    <br />
    <br />
    <div>
      <label
        >Tiene usted mas interes en leer relatos sobre la vida de personajes
        como:</label
      >
    </div>
    <input type="radio" /><label
      >Alejandro Magno, Julio Cesar y Carlo Magno</label
    >
    <input type="radio" />
    <label>Aristoteles, Socrates y Kant</label>
    <input type="radio" /><label>¿Quienes?</label>
    <br />
    <br />
    <div>
      <label
        >¿Nuestro actual desarrollo industrial y cientifico es muestra de mayor
        grado de civilizacion que el alcanzado por cualquier otra sociedad, por
        ejemplo, los griegos?</label
      >
    </div>
    <input type="radio" /><label>De acuerdo</label> <input type="radio" />
    <label>Parcialmente de acuerdo</label>
    <input type="radio" /><label>Parcialmente en desacuerdo</label>
    <input type="radio" /><label>En desacuerdo</label>
    <br />
    <br />
    <div>
      <label
        >Si estuviera empleado en una organizacion y considerando que los
        sueldos fueran iguales, usted preferiria ser:</label
      >
    </div>
    <input type="radio" /><label>Consejero de empleados</label>
    <input type="radio" />
    <label>Trabajador administrativo</label>
    <br />
    <br />
    <div>
      <label>¿Cual de estos dos libros escogeria?</label>
    </div>
    <input type="radio" /><label>Historia de la religion</label>
    <input type="radio" />
    <label>Historia del desarrollo industrial</label>
    <br />
    <br />
    <div>
      <label>¿Que seria mejor para la sociedad moderna?</label>
    </div>
    <input type="radio" /><label
      >Mayor preocupacion por los derechos y bienestar de los ciudadanos</label
    >
    <input type="radio" />
    <label
      >Mayor conocimiento de las leyes fundamentales del comportamiento
      humano</label
    >
    <br />
    <br />
    <div>
      <label
        >Segun sus deseos, ¿En cual de estas opciones preferiria utilizar su
        influencia?</label
      >
    </div>
    <input type="radio" /><label>Elevar su nivel de vida</label>
    <input type="radio" />
    <label>Influenciar la opinion publica</label>
    <br />
    <br />
    <div>
      <label>¿Que tema prefiere para elegir una conferencia?</label>
    </div>
    <input type="radio" /><label
      >El progreso de los servicios sociales en su ciudad</label
    >
    <input type="radio" />
    <label>Pintores contemporaneos</label>
    <br />
    <br />
    <div>
      <label
        >La evidencia acumulada hasta ahora parece demostrar que el universo se
        ha desarrollado hasta su elevado estado actual de acuerdo con leyes
        naturales de la manera que no seria necesario recurrir a una causa
        primera, proposito cosmico o divinidad para explicarlos</label
      >
    </div>
    <input type="radio" /><label>De acuerdo</label> <input type="radio" />
    <label>Parcialmente de acuerdo</label>
    <input type="radio" /><label>Parcialmente en desacuerdo</label>
    <input type="radio" /><label>En desacuerdo</label>
    <br />
    <br />
    <div>
      <label>¿En un periodico local que leeria usted primero?</label>
    </div>
    <input type="radio" /><label>La compraventa de casas</label>
    <input type="radio" />
    <label>La programacion de galerias de arte</label>
    <br />
    <br />
    <div>
      <label
        >¿Que consideraria usted mas importante en la educacion de sus
        hijos?</label
      >
    </div>
    <input type="radio" /><label>La religion</label> <input type="radio" />
    <label>La educacion fisica</label>
    <br />
    <br />
    <h3>Segunda parte</h3>
    <p>
      Cada uno de los siguientes apartados está compuesto por 4 posibles
      alternativas. Usted deberá puntuar cada una de las alternativas
      otorgándole valor 4, a la contestación que pinche y con la que esté más de
      acuerdo o prefiere en primer lugar, 3,2, con las intermedias y 1 la última
      que pinche y con la que no sea de su prioridad .
    </p>
    <br />
    <div>
      <label
        >Le parece a usted que un buen gobierno debe preocuparse mas por</label
      >
      <div>
        <input type="number" min="1" max="4" />
        <label>Dar ayuda a pobres, enfermos y ancianos</label>
      </div>
      <div>
        <input type="number" min="1" max="4" />
        <label>Desarrollar industria y comercio</label>
      </div>
      <div>
        <input type="number" min="1" max="4" />
        <label
          >Introducir los mas elevados principios de etica y diplomacia en su
          politica</label
        >
      </div>
      <div>
        <input type="number" min="1" max="4" />
        <label>Colocar a la nacion en una posicion de prestigio</label>
      </div>
    </div>
    <br />
    <div>
      <label
        >En su opinion, ¿Como deberia utilizar un hombre de negocios que trabaja
        toda la semana su domingo?</label
      >
      <div>
        <input type="number" min="1" max="4" />
        <label>Leyendo libros serios para elevar su nivel cultural</label>
      </div>
      <div>
        <input type="number" min="1" max="4" />
        <label>Tratando de ganar jugando al tenis o en carreras</label>
      </div>
      <div>
        <input type="number" min="1" max="4" />
        <label>Concurriendo a escuchar conciertos sinfonicos</label>
      </div>
      <div>
        <input type="number" min="1" max="4" />
        <label
          >Concurriendo a escuchar sermones religiosos de gran
          trascendencia</label
        >
      </div>
    </div>
    <br />
    <div>
      <label
        >Si pudiera alterar el sistema de enseñanza de su comunidad, trataria
        usted de:</label
      >
      <div>
        <input type="number" min="1" max="4" />
        <label>Darle mayor importancia al estudio de las bellas artes</label>
      </div>
      <div>
        <input type="number" min="1" max="4" />
        <label
          >Incrementar el interes por el estudio de los problemas
          sociales</label
        >
      </div>
      <div>
        <input type="number" min="1" max="4" />
        <label>Dotar de mayor numero de aparatos a los laboratorios</label>
      </div>
      <div>
        <input type="number" min="1" max="4" />
        <label>Aumentar el valor practico de la enseñanza</label>
      </div>
    </div>
    <br />
    <div>
      <label>En cuanto a sus amigos, usted prefiere que:</label>
      <div>
        <input type="number" min="1" max="4" />
        <label
          >Sean eficientes, trabajadores y tengan una manera practica de
          pensar</label
        >
      </div>
      <div>
        <input type="number" min="1" max="4" />
        <label
          >Se interesen seriamente en pensar acerca de su actitud hacia la
          vida</label
        >
      </div>
      <div>
        <input type="number" min="1" max="4" />
        <label>Posea cualidades como lider y organizador</label>
      </div>
      <div>
        <input type="number" min="1" max="4" />
        <label>Demuestre sensibilidad artisitica y sentimental</label>
      </div>
    </div>
    <br />
    <div>
      <label
        >Si viviera en una ciudad pequeña y tuviera mas ingresos de los
        necesarios para cubrir sus necesidades, preferiria:</label
      >
      <div>
        <input type="number" min="1" max="4" />
        <label
          >Aplicar ese dinero para ayudar al progreso industrial y
          comercial</label
        >
      </div>
      <div>
        <input type="number" min="1" max="4" />
        <label
          >Ayudar a los grupos religiosos a desarrollar sus actividades</label
        >
      </div>
      <div>
        <input type="number" min="1" max="4" />
        <label>Cederlo para el desarrollo de la investigacion cientifica</label>
      </div>
      <div>
        <input type="number" min="1" max="4" />
        <label>Donarlo para el bienestar familiar</label>
      </div>
    </div>
    <br />
    <div>
      <label>Cuando va usted al teatro disfruta mas con:</label>
      <div>
        <input type="number" min="1" max="4" />
        <label>La vida de los grandes hombres</label>
      </div>
      <div>
        <input type="number" min="1" max="4" />
        <label>El ballet o representaciones similares</label>
      </div>
      <div>
        <input type="number" min="1" max="4" />
        <label>Argumentos sobre el sufrimiento y el amor</label>
      </div>
      <div>
        <input type="number" min="1" max="4" />
        <label>Argumentos que tratan de aportar un punto de vista</label>
      </div>
    </div>
    <br />
    <div>
      <label
        >Suponiendo que usted tuviera la habilidad necesaria y el fueldo fuera
        igual, ¿Que puesto desearia desempeñar?</label
      >
      <div>
        <input type="number" min="1" max="4" />
        <label>Matematico</label>
      </div>
      <div>
        <input type="number" min="1" max="4" />
        <label>Gerente de ventas</label>
      </div>
      <div>
        <input type="number" min="1" max="4" />
        <label>Politico</label>
      </div>
      <div>
        <input type="number" min="1" max="4" />
        <label>Sacerdote</label>
      </div>
    </div>
    <br />
    <div>
      <label>Si tuviera tiempo y dinero suficiente, que preferiria:</label>
      <div>
        <input type="number" min="1" max="4" />
        <label>Hacer una coleccion de pinturas y esculturas escogidas</label>
      </div>
      <div>
        <input type="number" min="1" max="4" />
        <label
          >Establecer un centro para el cuidado y rehabilitacion de personas con
          problemas mentales</label
        >
      </div>
      <div>
        <input type="number" min="1" max="4" />
        <label>Postularse como politico</label>
      </div>
      <div>
        <input type="number" min="1" max="4" />
        <label
          >Establecer una negociacion o una empresa industrial en su
          propiedad</label
        >
      </div>
    </div>
    <br />
    <div>
      <label
        >Estando en una velada con amigos intimos, ¿Que tema de conversacion le
        gustaria tratar?</label
      >
      <div>
        <input type="number" min="1" max="4" />
        <label>El significado de la vida</label>
      </div>
      <div>
        <input type="number" min="1" max="4" />
        <label>Las ultimas novedades del campo de la ciencia</label>
      </div>
      <div>
        <input type="number" min="1" max="4" />
        <label>La literatura</label>
      </div>
      <div>
        <input type="number" min="1" max="4" />
        <label>El socialismo</label>
      </div>
    </div>
    <br />
    <div>
      <label>Que preferiria hacer en sus vacaciones</label>
      <div>
        <input type="number" min="1" max="4" />
        <label>Escribir o publicar un ensayo sobre biologia</label>
      </div>
      <div>
        <input type="number" min="1" max="4" />
        <label
          >Permanecer en un rincon lejano del pais donde pueda contemplar
          paisajes</label
        >
      </div>
      <div>
        <input type="number" min="1" max="4" />
        <label>Inscribirse en un torneo local de tenis u otro deporte</label>
      </div>
      <div>
        <input type="number" min="1" max="4" />
        <label>Iniciarse en un nuevo campo de negocios</label>
      </div>
    </div>
    <br />
    <div>
      <label
        >Las grandes exploraciones le parecen mas significativas a causa
        de:</label
      >
      <div>
        <input type="number" min="1" max="4" />
        <label
          >Representan conquistas del ser humano sobre las fuerzas de la
          naturaleza</label
        >
      </div>
      <div>
        <input type="number" min="1" max="4" />
        <label
          >Acrecientan nuestro conocimiento de geografia, oceanografia,
          etc...</label
        >
      </div>
      <div>
        <input type="number" min="1" max="4" />
        <label
          >Son lazos de union para los intereses y sentimientos de todas las
          naciones</label
        >
      </div>
      <div>
        <input type="number" min="1" max="4" />
        <label
          >Cada uno de ellos contribuye un poco a la comprension del
          universo</label
        >
      </div>
    </div>
    <br />
    <div>
      <label>Debemos brindar nuestra mayor lealtad a:</label>
      <div>
        <input type="number" min="1" max="4" />
        <label>Nuestra fe religiosa</label>
      </div>
      <div>
        <input type="number" min="1" max="4" />
        <label>Nuestros ideales de belleza</label>
      </div>
      <div>
        <input type="number" min="1" max="4" />
        <label>Nuestros compañeros o la organizacion donde trabajamos</label>
      </div>
      <div>
        <input type="number" min="1" max="4" />
        <label>Nuestras ideas sobre la caridad</label>
      </div>
    </div>
    <br />
    <div>
      <label>¿Que tanto admira a las siguientes personalidades?</label>
      <div>
        <input type="number" min="1" max="4" />
        <label>Florence Nightingale. Fundadora de la Cruz Roja</label>
      </div>
      <div>
        <input type="number" min="1" max="4" />
        <label>Napoleon Bonaparte</label>
      </div>
      <div>
        <input type="number" min="1" max="4" />
        <label>Henry Ford</label>
      </div>
      <div>
        <input type="number" min="1" max="4" />
        <label>Galileo Galile</label>
      </div>
    </div>
    <br />
    <div>
      <label>Al escoger a su pareja valoraría:</label>
      <div>
        <input type="number" min="1" max="4" />
        <label
          >Que pueda adquirir prestigio social y se gane la admiracion de los
          demas</label
        >
      </div>
      <div>
        <input type="number" min="1" max="4" />
        <label>Que le guste ayudar a la gente</label>
      </div>
      <div>
        <input type="number" min="1" max="4" />
        <label>Que sea muy espiritual</label>
      </div>
      <div>
        <input type="number" min="1" max="4" />
        <label>Que tenga talento artistico</label>
      </div>
    </div>
    <br />
    <div>
      <label
        >Examinando el cuadro de Leonardo Da Vinci, "La ultima cena", ¿Que
        tenderia a apreciar de el?</label
      >
      <div>
        <input type="number" min="1" max="4" />
        <label
          >La expresion de las mas altas aspiraciones y sentimientos
          espirituales</label
        >
      </div>
      <div>
        <input type="number" min="1" max="4" />
        <label
          >Uno de los cuadros mas valiosos que jamas se hayan pintado</label
        >
      </div>
      <div>
        <input type="number" min="1" max="4" />
        <label
          >Una expresion de las multiples habilidades de Leonardo y su
          epoca</label
        >
      </div>
      <div>
        <input type="number" min="1" max="4" />
        <label>La quintaesencia de la armonia y la composicion</label>
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
      creencia: "",
      religioso: "",
      religion: "",
      espiritualidad: "",
      guia_espiritual: "",
      checked: [],
    };
  },
  methods: {
    es_religioso() {
      if (this.religioso == "Si") {
        return true;
      } else {
        return false;
      }
    },
    tiene_espiritualidad() {
      if (this.espiritualidad == "Si") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style></style>
