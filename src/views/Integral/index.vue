<template>
<div class="app-container">
<el-form ref="form" :model="form" label-width="120px">

<el-row>
    <el-col :span="8">
      <el-form-item label="姓名">张三</el-form-item>
      </el-col><el-col :span="8">
      <el-form-item label="年龄">23</el-form-item>
      </el-col>
    </el-row>

<el-row>
    <el-col :span="8">
     <el-form-item label="职称">专家门诊</el-form-item>
     </el-col><el-col :span="8">
     <el-form-item label="性别">男</el-form-item>
     </el-col>
    </el-row>

<el-row>
    <el-col :span="8">
     <el-form-item label="积分">20</el-form-item>
     </el-col><el-col :span="8">
     <el-form-item label="电话">18333333333</el-form-item>
     </el-col>
    </el-row>

</el-form>

        <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
      >
      <el-table-column align="center" label="药品名称" width="240">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="数量" width="95">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="日期" width="240" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column label="积分" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.pageviews }}
        </template>
      </el-table-column>

      <el-table-column label="操作" width="110" align="center">
         <el-button type="primary" plain @click="onCancel">详情</el-button>
      </el-table-column>
    </el-table>
     </div>


</template>

<script>
import { getList } from '@/api/table'

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
      list: null,
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>



