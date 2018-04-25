<style src="./app.css"></style>
<template>
  <div id="app">
      <vue-progress-bar></vue-progress-bar>
      <el-header>
          <router-link to="/">主页</router-link>
          <router-link to="/login">登陆</router-link>
          <router-link to="/register">注册</router-link>
          <router-link to="/user">用户</router-link>
      </el-header>
      <div class="app-body">
          <transition mode="out-in" enter-active-class="fadeIn" leave-active-class="fadeOut" appear>
              <router-view></router-view>
          </transition>
      </div>
      <footer class="app-footer">
          Copyright &copy; 2016-2018 VUE . All rights reserved.
      </footer>
    </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

