<style src="./user.css" scoped></style>
<template>
  <div class="user">
    <div class="container-fluid">
       <div class="masthead">
          <div class="container">
            <h1>我的认证资产区块链</h1>
          </div>
       </div>
    </div>
    <div class="container">
      <el-row>
        <el-col :span="4">
          <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" router>
            <el-submenu index="1">
              <template slot="title"><i class="icon-stack"></i><span>我的资产</span></template>
              <el-menu-item index="1-1" route="/user/resources"><i class="icon-menu2"></i>资产列表</el-menu-item>
              <el-menu-item index="1-2" route="/user/transactions"><i class="icon-file"></i>交易清单</el-menu-item>
            </el-submenu>
            <el-menu-item index="2"  route="/user/account">
              <i class="icon-coin"></i><span slot="title">我的账户</span>
            </el-menu-item>
            <el-menu-item index="3"  route="/user/notifications">
              <i class="icon-bell"></i><span slot="title">我的消息</span>
            </el-menu-item>
            <el-menu-item index="4"  route="/user/settings">
              <i class="icon-cog"></i><span slot="title">账户设置</span>
            </el-menu-item>
            <el-menu-item index="5"  route="/user/profile">
              <i class="icon-profile"></i><span slot="title">个人资料</span>
            </el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="20">
          <transition mode="out-in" enter-active-class="fadeIn" leave-active-class="fadeOut" appear>
            <router-view></router-view>
          </transition>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>
