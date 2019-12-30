<template>
  <div class="app-container">
    <div
      class="call-container"
      label-width="120px"
      style="margin-left:800px;margin-top:0px;margin-bottom:10px;margin-right:100px;">

      <el-input v-model="input">
      </el-input>
      <el-button type="primary" @click="onCall">搜索</el-button>
    </div>
    <div class="head-container" label-width="120px" style="margin-top:40px;margin-bottom:5px;margin-right:10px">
          <spen style="font-size:24px">患者数量</spen>
        <el-button type="warning" style="margin-left:700px" @click="onCancel">新建组</el-button>
      <el-button type="warning" @click="onCancel">删除组</el-button>
      <el-button type="warning" @click="onCancel">编辑组</el-button>
      </div>

    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="头像" width="95">
        <template>
          <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar" />
        </template>
      </el-table-column>
      <el-table-column label="个人信息" width="110">
        <template>
          <el-table
            v-loading="listLoading"
            :data="list"
            element-loading-text="Loading"
            border
            fit
            highlight-current-row
          >
            <el-table-column>
              <template slot-scope="scope">
                <span>{{ scope.row.author }}</span>
              </template>
            </el-table-column>
            <el-table-column>
              <template slot-scope="scope">
                <span>{{ scope.row.author }}</span>
              </template>
            </el-table-column>
          </el-table>
        </template>
      </el-table-column>
      <el-table-column label="就诊卡号" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column label="住院号" width="110" align="center">
        <template slot-scope="scope">{{ scope.row.pageviews }}</template>
      </el-table-column>

      <el-table-column class-name="status-col" label="身份证号" width="120" align="center">
        <template slot-scope="scope">
          {{ scope.row.status }}
        </template>
      </el-table-column>

        <el-table-column class-name="status-col" label="手机号" width="120" align="center">
        <template slot-scope="scope">
         {{ scope.row.status }}
        </template>
        </el-table-column>
         <el-table-column align="center" prop="created_at" label="复诊日期" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.display_time }}</span>
        </template>
      </el-table-column>
        <el-table-column class-name="status-col" label="操作" width="120" align="center">
          <el-button type="warning" @click="onInquiry">患者详情</el-button>
      </el-table-column>
       <el-table-column class-name="status-col" label="操作" width="120" align="center">
        <el-button type="success" @click="onInquiry">在线沟通</el-button>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //   imgUrl: require("../../../assets/404_images/.png"),
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
  methods: {
    onSubmit() {
      this.$message('submit!')
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line {
  text-align: center;
}
</style>
