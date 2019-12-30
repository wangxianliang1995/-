<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="medicinals"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
    <el-table-column align="center" label="序号" type="index" width="80"></el-table-column>
      <el-table-column label="药品" align="center" prop="goodsName"></el-table-column>
      <el-table-column label="单价" align="center" prop="price"></el-table-column>
      <el-table-column label="数量" align="center" prop="quantity"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getMyOrders } from '@/api/inquiry'

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
      medicinals: '',
      listLoading: true
    }
  },
  created() {
    debugger;
     this.$store
      .dispatch('inquiry/getOrdersInfo', this.$route.params.inquiryId)
      .then(response => {
        debugger;
        console.log(response)
        this.medicinals = response.body.medicinals
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