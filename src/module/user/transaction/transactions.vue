<template>
  <div>
    <h3 class="center">交易清单</h3>

    <div class="cnt-block">
      <el-table  :data="datas" style="width: 100%">
        <el-table-column prop="transactTime" label="交易时间" width="200"></el-table-column>
        <el-table-column prop="transactCoins" label="交易数额" width="200"></el-table-column>
        <el-table-column prop="transactPart" label="交易方（链码）"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>
