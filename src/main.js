// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './config/router.js'
import app from './app.vue'
import progressbar from "vue-progressbar";
import elementui from "element-ui";

Vue.config.productionTip = false
Vue.use(elementui);

new Vue({
  el: '#app',
  router,
  components: { app },
  template: '<app/>'
})
