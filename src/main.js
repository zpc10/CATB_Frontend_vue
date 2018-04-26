// The Vue build version to load with the `import` command
import Vue from 'vue'
import router from './config/router.js'
import app from './app.vue'
import progressbar from "vue-progressbar";
import elementui from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
import './asset/font/icomoon/css/icomoon.css'

Vue.config.productionTip = false
Vue.use(elementui);
Vue.use(progressbar, {
  color: '#eeeeee',
  failedColor: '#874b4b',
  thickness: '2px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s'
  },
  autoRevert: true,
  location: 'top',
  inverse: false
})

new Vue({
  el: '#app',
  router,
  components: { app },
  template: '<app/>'
})
