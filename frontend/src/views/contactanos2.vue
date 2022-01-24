<template>
    
    <div id="app">
      <div class="container col-xl-12 col-xxl-8 py-3">
      <header class="margin font">
        <router-link to="/">
      <img src="../assets/logo.png" height="50" />
        </router-link>
      <nav class="nav justify-content-center float-md-end right">
        <router-link to="/"
          ><button
            class="w-100 btn btn-lg btn-primary color_fuente color2"
            type="submit"
          >
            Inicio
          </button></router-link
        >
        
      </nav>
    </header>
      


    <div
      class="modal modal-signin position-static d-block py-5 bg"
      tabindex="-1"
      role="dialog"
      id="modalSignin"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content rounded-5 shadow">
          <div class="modal-header p-5 pb-4 border-bottom-0 fondo3 font">
            
            <h2 class="fw-bold mb-0">Quienes somos :  </h2>
            
          </div>
          
        </div>
      </div>
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
                }
            },
            methods: {
                
            }
        }
    </script>

    <style >
  
    </style>