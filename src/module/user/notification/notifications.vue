<template>
  <div>
    <h3 class="center">
      <span>我的消息</span>
      <div class="pull-right">
        <router-link :to="{ path: 'userAdd'}">
          <el-button type="primary" size="medium" icon="icon-checkmark">全部置成已读</el-button>
        </router-link>
      </div>
    </h3>

    <div class="cnt-block">
      <el-table  :data="datas" style="width: 100%">
        <el-table-column prop="status" label="是否已读" width="150"></el-table-column>
        <el-table-column prop="createTime" label="消息时间" width="150"></el-table-column>
        <el-table-column prop="content" label="消息内容"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>
