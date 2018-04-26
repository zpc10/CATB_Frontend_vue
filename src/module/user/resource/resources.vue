<template>
  <div>
    <h3 class="center">资产列表
        <router-link :to="{ path: 'userAdd'}">
          <el-button type="text" size="medium" icon="icon-plus">新增资产</el-button>
        </router-link>
    </h3>

    <div class="cnt-block">
      <el-table  :data="datas" style="width: 100%">
        <el-table-column prop="name" label="名称" width="200"></el-table-column>
        <el-table-column prop="code" label="编号（唯一标识）" width="200"></el-table-column>
        <el-table-column prop="brief" label="资产简介"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>
