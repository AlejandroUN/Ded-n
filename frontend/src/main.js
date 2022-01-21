import { createApp } from 'vue'
//import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import { sync } from 'vuex-router-sync'
// import store from '@/store/store'

//sync(store, router)

import "bootstrap/dist/css/bootstrap.min.css"

createApp(App)
//	.use(store)
	.use(router)
	.mount('#app')

//new Vue({
//	el: '#app',
//	router,
//	store,
//	template: '<App/>',
//	components: {App}
//})
