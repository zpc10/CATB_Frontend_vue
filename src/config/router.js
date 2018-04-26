import Vue from 'vue'
import Router from 'vue-router'
import homeRouter from '../module/home/router.js'
import loginRouter from '../module/login/router.js'
import registerRouter from '../module/register/router.js'
import userRouter from '../module/user/router.js'
import errorRouter from '../module/error/router.js'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/home' },
    homeRouter,
    loginRouter,
    registerRouter,
    userRouter,
    errorRouter
  ]
})
