import Vue from 'vue'
import App from "./pages/App.vue"
import Page from "./pages/Page.vue"
import VueResource from 'vue-resource'
import $ from 'jquery'
import resizeWindow from './modules/tsresize.js'
// import Home from './pages/Home.vue'

// Adding Vue Plugins
Vue.use(VueResource)

window.app = new Vue({
	el: '#app',
  	template: '<App/>',
	components: {App}
});