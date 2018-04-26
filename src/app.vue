<style src="./app.css"></style>
<template>
  <div id="app">
      <vue-progress-bar></vue-progress-bar>
      <el-container>
        <el-header>
             <div class="container">
               <h1><router-link to="/">CATB 认证资产交易区块链</router-link></h1>
               <ul class="nav-left"></ul>
               <ul class="nav-right">
                 <li class="nav-item"><router-link to="/home" active-class="active">首页</router-link></li>
                 <li class="nav-item"><router-link to="/register" active-class="active">注册</router-link></li>
                 <li class="nav-item"><router-link to="/login" active-class="active">用户后台</router-link></li>
                 <li class="nav-item notify">
                   <router-link to="/user/notifications" active-class="active">
                     <el-badge :value="3" class="item"><i class="icon-bell"></i></el-badge>
                   </router-link>
                 </li>
                 <li class="nav-item">
                     <el-dropdown>
                       <span class="el-dropdown-link">张三丰<i class="el-icon-arrow-down el-icon--right"></i></span>
                       <el-dropdown-menu slot="dropdown">
                         <el-dropdown-item><router-link to="/user/resources">我的资源</router-link></el-dropdown-item>
                         <el-dropdown-item><router-link to="/user/account">我的账户</router-link></el-dropdown-item>
                         <el-dropdown-item divided><router-link to="/user/settings">账户设置</router-link></el-dropdown-item>
                         <el-dropdown-item><router-link to="/user/profile">个人资料</router-link></el-dropdown-item>
                         <el-dropdown-item divided><router-link to="/logoff">安全退出</router-link></el-dropdown-item>
                       </el-dropdown-menu>
                     </el-dropdown>
                 </li>
               </ul>
            </div>
          </el-header>
          <el-main>
            <transition mode="out-in" enter-active-class="fadeIn" leave-active-class="fadeOut" appear>
                <router-view></router-view>
            </transition>
          </el-main>
          <el-footer>
             <p>Copyright &copy; 2016-2018 HPQK . All rights reserved.</p>
          </el-footer>
      </el-container>
    </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

