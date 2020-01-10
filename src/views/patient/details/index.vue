<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-row>
        <!-- <img :src="imgUrl"> -->

        <el-row>
          <el-col :span="8">
            <el-form-item label="姓名">张三</el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="8">
            <el-form-item label="年龄">23</el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="性别">男</el-form-item>
          </el-col>
        </el-row>
      </el-row>

      <el-form-item label="就诊卡号">20</el-form-item>
      <el-form-item label="住院号">20</el-form-item>
      <el-form-item label="身份证号">18333333333</el-form-item>

      <div class="call-container">
        <hr />
      </div>

      <el-form-item label="问诊历史"></el-form-item>
      <el-table
        v-loading="listLoading"
        :data="list"
        element-loading-text="Loading"
        border
        fit
        highlight-current-row
      >
        <el-table-column align="center" label="时间" width="110">
          <template slot-scope="scope">{{ scope.$index }}</template>
        </el-table-column>
        <el-table-column label="状况" width="95">
          <template slot-scope="scope">{{ scope.row.title }}</template>
        </el-table-column>
        <el-table-column label="操作" width="110" align="center">
          <el-button type="danger" plain @click="onCancel">详情</el-button>
        </el-table-column>
      </el-table>

      <div class="call-container">
        <hr />
      </div>

      <el-form-item label="复诊日期"></el-form-item>
      <el-table
        v-loading="listLoading"
        :data="list"
        element-loading-text="Loading"
        border
        fit
        highlight-current-row
      >
        <el-table-column align="center" label="时间" width="110">
          <template slot-scope="scope">{{ scope.$index }}</template>
        </el-table-column>
        <el-table-column label="操作" width="110" align="center">
          <el-button type="success" plain @click="onCancel">添加日期</el-button>
        </el-table-column>
      </el-table>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //   imgUrl: require("../../../assets/404_images/.png"),
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  methods: {
    onSubmit() {
      this.$message("submit!");
    },
    onCancel() {
      this.$message({
        message: "cancel!",
        type: "warning"
      });
    }
  }
};
</script>

<style scoped>
.line {
  text-align: center;
}
</style>





