<template>
  <div id="app" class="mto1 mt-1 ml-5">
    <div class="container col-xl-10 col-xxl-8 px-4 py-5">
      <header class="font">
        <router-link to="/"
          ><img src="../assets/logo.png" height="50"
        /></router-link>
        <!--<img src="../assets/logo.png" height="50"/>-->
        <nav class="nav justify-content-center float-md-end right">
          <router-link to="/"
            ><button
              class="w-100 btn btn-lg btn-primary color_fuente color2"
              type="submit"
            >
              Inicio
            </button></router-link
          >

          <router-link to="/contacta"
            ><button
              class="btn btn-lg btn-primary color_fuente color2"
              type="submit"
            >
              ¡Dónanos!
            </button></router-link
          >
        </nav>
      </header>

      <div class="margin justificar">
        <h1>Política de privacidad de Dedún Inc</h1>
        <p>
          Esta Política de privacidad describe cómo se recopila, utiliza y
          comparte su información personal cuando ingresa a
          https://www.dedun.com.
        </p>
        <h5><b>INFORMACIÓN PERSONAL QUE RECOPILAMOS</b></h5>
        <p>
          Cuando visita el Sitio, recopilamos automáticamente cierta información
          sobre su dispositivo, incluida información sobre su navegador web,
          dirección IP, zona horaria y algunas de las cookies que están
          instaladas en su dispositivo. Además, a medida que navega por el
          Sitio, recopilamos información sobre las páginas web individuales que
          ve, las páginas web o los términos de búsqueda que lo remitieron al
          Sitio e información sobre cómo interactúa usted con el Sitio. Nos
          referimos a esta información recopilada automáticamente como
          “Información del dispositivo”.
        </p>
        <p>
          Recopilamos Información del dispositivo mediante el uso de las
          siguientes tecnologías:
        </p>
        <p>COOKIES</p>
        <p>
          Además, al momento de crear una cuenta dentro del sitio, se le pedirán
          ciertos datos necesarios identificar su cuenta, estos datos incluyen
          sus nombres y apellidos, correo eléctronico, fecha de nacimiento,
          género y orientación sexual.
        </p>
        <p>
          Finalmente, es necesario mencionar que las pruebas psicométricas a las
          que se someterá para econtrar matches, pueden revelar datos bastante
          sensibles y personales acerca de su personalidad, opiniones, ideas,
          gustos y su vida privada.
        </p>
        <h5><b>¿CÓMO UTILIZAMOS SU INFORMACIÓN PERSONAL?</b></h5>
        <p>
          Utilizamos la Información del dispositivo que recopilamos para
          ayudarnos a detectar posibles riesgos y fraudes (en particular, su
          dirección IP) y, en general, para mejorar y optimizar nuestro Sitio.
        </p>
        <p>
          Los datos derivados de la creación de la cuenta y la aplicación de los
          test se usarán únicamente para la correcta aplicación del algoritmo al
          sistema de matches, en ningún momento empleado alguno o persona
          responsable del mantenimiento de Dedún tendrá acceso a las variables
          almacenadas en la base de datos (Las cuales se ecnuentran
          encriptadas), esta información es tan confidencial que ningún ser
          humano involucrado en el modelo de negocios de la empresa podrá
          acceder bajo ninguna circunstancia a estos datos.
        </p>
        <p>
          Si tiene dudas sobre el marco legal con el que realizamos el
          tratamiento de sus datos, puede comunicarse directamente con nosotros
          en la opción de Contactanos ubicada en el footer del sitio web.
        </p>
        <h5><b>COMPARTIR SU INFORMACIÓN PERSONAL</b></h5>
        <p>
          Estamos en la facultad de compartir su Información personal (no
          relacionada con la aplicación de los tests) para cumplir con las leyes
          y regulaciones aplicables, para responder a una citación, orden de
          registro u otra solicitud legal de información que recibamos, o para
          proteger nuestros derechos.
        </p>
        <h5><b>SUS DERECHOS</b></h5>
        <p>
          Usted tiene derecho a acceder a la información personal que tenemos
          sobre usted y a solicitar que su información personal sea corregida,
          actualizada o eliminada. Si desea ejercer este derecho, comuníquese
          con nosotros a través de la opción de Contactanos ubicada en el footer
          del sitio web.
        </p>
        <h5><b>MENORES</b></h5>
        <p>El sitio no está destinado a personas menores de 14 años.</p>
        <h5><b>CAMBIOS</b></h5>
        <p>
          Podemos actualizar esta política de privacidad periódicamente para
          reflejar, por ejemplo, cambios en nuestras prácticas o por otros
          motivos operativos, legales o reglamentarios.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {},
};
</script>

<style>
 .justificar{
   text-align: justify !important;
 }
</style>
