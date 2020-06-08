import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/assets/css/minit.css'
import VueGlide from 'vue-glide-js'
import 'vue-glide-js/dist/vue-glide.css'

Vue.config.productionTip = false
Vue.use(VueGlide)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
