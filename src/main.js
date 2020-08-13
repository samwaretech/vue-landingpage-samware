import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/assets/css/minit.css'
import VueGlide from 'vue-glide-js'
import 'vue-glide-js/dist/vue-glide.css'
import VueGtag from "vue-gtag";

Vue.config.productionTip = false
Vue.use(VueGlide)
Vue.use(VueGtag, {
  config: { id: "G-LV16QHWTVV" }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
