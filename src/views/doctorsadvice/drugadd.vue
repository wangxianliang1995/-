<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="form.medicinals"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column label="药品名称ID" width="150" align="center" prop="goodsId"></el-table-column>
      <el-table-column label="药品名称" width="150" align="center" prop="goodsName"></el-table-column>
      <el-table-column label="药品单价" width="110" align="center" prop="price"></el-table-column>
      <el-table-column label="库存数量" width="110" align="center" prop="goodStock"></el-table-column>
      <el-table-column label="操作" align="center" width="110">
        <template slot-scope="scope">
          <el-button type="primary" @click="onRequestdrug(scope.row.goodsId,scope.row.goodsName,scope.row.price)">加入</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="table-container">
      <el-button type="primary" @click="onSubmitDetail">确定</el-button>
    </div>
  </div>
</template>

<script>
import { getdrugadd, } from '@/api/inquiry'

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
      form: {
        medicinals: ''
      },
      requestInfo: {
        keyword: '',
        page: 1,
        userType: 1
      },
      requestdrug: {
        inquiryId: '',
        goodsId: '',
        goodsName: '',
        price: ''
      }
    };
  },
  created() {
    debugger
    this.requestdrug.inquiryId = this.$route.params.inquiryId
    this.$store
      .dispatch('inquiry/getdrugadd', this.requestInfo)
      .then(response => {
        debugger
        console.log(response)
        this.form.medicinals = response.body.medicinals
        debugger
        // response.body.patName
        // this.$router.push({ path: this.redirect || '/' })
        // this.$router.push('/patientInfo/index')
        // this.$router.push('/patientInfo/index')
        this.loading = false
        debugger
      })
      .catch(() => {
        this.loading = false
      })
  },
  methods: {
    onRequestdrug(goodsId, goodsName, price) {
      this.requestdrug.goodsId = goodsId
      this.requestdrug.goodsName = goodsName
      this.requestdrug.price = price
      debugger
    },

    onSubmitDetail() {
      debugger
      this.$router.push({ name: 'Doctorsadvice', params: { inquiryId: this.requestdrug.inquiryId }})
      debugger
    }

    // onSubmitDetail() {
    //   debugger
    //   this.$router.push({ name: 'Doctorsadvice', params: {requestdrug: requestdrug}})
    //   debugger
    // },
  }
}
</script>
