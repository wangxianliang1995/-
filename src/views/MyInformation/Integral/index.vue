<template>
<div class="app-container">
<el-form ref="form" :model="form" label-width="120px">
<el-row>
    <el-col :span="8">
     <el-form-item label="总积分：">
       <!-- <el-input v-model="sumIntergral" readonly="true"></el-input> -->
       {{sumIntergral}}
     </el-form-item>
     </el-col>
  </el-row>

  <el-row>
    <el-col :span="8">
     <el-form-item label="积分明细"></el-form-item>
     </el-col>
     </el-row>
</el-form>

    <el-table
        v-loading="listLoading"
        :data="patMedicinals"
        element-loading-text="Loading"
        border
        fit
        highlight-current-row
      >
      <el-table-column align="center" label="序号" type="index" width="80"></el-table-column>
      <el-table-column align="center" label="药品名称" prop="goodsName"></el-table-column>
      <el-table-column align="center" label="数量" prop="quantity"></el-table-column>
      <el-table-column align="center" label="日期" prop="orderTime"></el-table-column>
      <el-table-column align="center" label="积分" prop="integral"></el-table-column>
    </el-table>
</div>
</template>

<script>
import {getIntegralInfo} from '@/api/inquiry'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      sumIntergral: '',
      patMedicinals: '',
      listLoading: true
    }
  },
  created() {
    let docId = ''
    debugger;
     this.$store
      .dispatch('inquiry/getIntegralInfo', docId)
      .then(response => {
        debugger;
        console.log(response)
        this.sumIntergral = response.body.sumIntergral
        this.patMedicinals = response.body.patMedicinals
        this.listLoading = false
      })
      .catch(() => {
        this.listLoading = false
      })
  },
  methods: {
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>



