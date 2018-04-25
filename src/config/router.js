import Vue from 'vue'
import Router from 'vue-router'
import home from '../module/home/router.js'
import login from '../module/login/router.js'
import register from '../module/register/router.js'
import user from '../module/user/router.js'

Vue.use(Router)

export default new Router({
  routes: [
    home,
    login,
    register,
    user
  ]
})
