<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
        <div class="head-container">
            <div class="head-text">基本信息</div>
        </div>
        <el-row :gutter="20">
            <el-col :span="1"><div class="title-content">姓名：</div></el-col>
            <el-col :span="4"><div class="title-content">姚丽娜</div></el-col>
            <el-col :span="1"><div class="title-content">性别：</div></el-col>
            <el-col :span="4"><div class="title-content">女</div></el-col>
            <el-col :span="1"><div class="title-content">年龄：</div></el-col>
            <el-col :span="4"><div class="title-content">18岁</div></el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="2"><div class="title-longcontent">患病时长：</div></el-col>
            <el-col :span="4"><div class="title-longcontent">12小时</div></el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="3"><div class="title-longcontent">药物过敏史：</div></el-col>
            <el-col :span="5"><div class="title-longcontent">无</div></el-col>
        </el-row>
        <div class="call-container">
            <hr/>
        </div>
        <el-row>
            <el-col :span="4">
                <div class="button-container">
                    <el-button type="primary" @click="onSubmitDetail">首诊病例</el-button>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="button-container">
                <el-button type="primary" @click="onSubmitDetail">病情信息</el-button>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="button-container">
                <el-button type="primary" @click="onSubmitDetail">药物医嘱</el-button>
                </div>
            </el-col>
        </el-row>
        <div class="middle-container">
            <div class="head-text">病情描述</div>
            <el-input v-model="form.desc" type="textarea" />
        </div>
        <div class="middle-container">
            <div class="head-text">诊断</div>
            <el-input v-model="form.desc" type="textarea" />
        </div>
        <div class="middle-container">
            <div class="head-text">费用明细</div>
        </div>
        <div class="table-container">
            <el-table
                v-loading="listLoading"
                :data="list"
                element-loading-text="Loading"
                border
                fit
                highlight-current-row
            >
            <el-table-column align="center" label="费用类别">
                <template slot-scope="scope">
                {{ scope.$index }}
                </template>
            </el-table-column>
            <el-table-column label="金额" align="center">
                <template slot-scope="scope">
                {{ scope.row.title }}
                </template>
            </el-table-column>
            </el-table>
        </div>
        <el-row :gutter="20">
            <el-col :span="2"><div class="title-longcontent">合计：</div></el-col>
            <el-col :span="4"><div class="title-longcontent">120</div></el-col>
        </el-row>
    </el-form>   
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
      listLoading: true,
      num1: 1,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
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
    },
    onSubmit() {
      this.$message('submit!')
    },
    onSubmitDetail() {
        this.$router.push('/inquirydetail/index')
    }
  }
}
</script>

<style lang="scss" scoped>
.head {
  &-container {
    margin-top: 0px;
    margin-bottom: 30px;
  }
  &-text {
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 10px;
  }
}
.app {
  &-container {
    margin-top: 0px;
    margin-bottom: 30px;
    margin-left: 0px;
  }
}
.table {
  &-container {
    margin-top: 0px;
    margin-bottom: 30px;
    margin-left: 0px;
  }
}
.button {
  &-container {
    margin-top: 30px;
    margin-bottom: 20px;
    margin-left: 0px;
    margin-right: 30px;
  }
}
.middle {
  &-container {
    margin-top: 20px;
  }
  &-text {
    font-size: 20px;
    line-height: 26px;
  }
}
  .el-row {
    margin-top: 0px;
    margin-bottom: 10px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .title-content {
    text-align: left;
    line-height: 30px;
    margin-left: 0px;
    width: 50px;
  }
  .title-longcontent {
    text-align: left;
    line-height: 30px;
    width: 100px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>

