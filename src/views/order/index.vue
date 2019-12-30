<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="orders"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="序号" type="index" width="80"></el-table-column>
      <el-table-column label="患者姓名" align="center" prop="userName"></el-table-column>
      <el-table-column label="订单日期" align="center" prop="orderTime"></el-table-column>
      <el-table-column label="合计" align="center" prop="amount"></el-table-column>
      <el-table-column label="状态" align="center">
        <template scope="scope">                    
          <p v-if="scope.row.payStatus=='0'">待支付</p>
          <p v-else-if="scope.row.payStatus=='1'">待发货</p>
          <p v-else-if="scope.row.payStatus=='2'">已发货</p>        
          <p v-else-if="scope.row.payStatus=='3'">已收货</p>          
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="primary" @click="orderInfo(scope.row.inquiryId)">详情</el-button>
          </template>
      </el-table-column>
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
      orders: '',
      listLoading: true
    }
  },
  created() {
    let docId = ''
    debugger;
     this.$store
      .dispatch('inquiry/getMyOrders', docId)
      .then(response => {
        debugger;
        console.log(response)
        this.orders = response.body.orders
        this.listLoading = false
      })
      .catch(() => {
        this.listLoading = false
      })
  },
  methods: {
    orderInfo(inquiryId) {
      console.log('订单详情传参为：'+inquiryId)
      this.$router.push({ name: 'OrderInfo', params: {inquiryId: inquiryId}})
    },
  }
}
</script>