<template>
  <div class="app-container">
    <div class="call-container" style="margin-down:15px;" align="left">
      <span>基本信息</span>
    </div>
    <el-form ref="form" :model="form" label-width="120px">
      <el-row>
        <el-col :span="8">
          <el-form-item label="姓名:">
            <el-input v-model="form.name" readonly="true" ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="性别:">
            <el-input v-model="form.sex" readonly="true"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="年龄:">
            <el-input v-model="form.age" readonly="true"></el-input>
          </el-form-item>
        </el-col>
      </el-row>1233
      <el-row>
        <el-col :span="8">
          <el-form-item label="患病时长:">
            <el-input v-model="form.time" readonly="true"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="16">
          <el-form-item label="药物过敏史:" >
            <el-input v-model="form.allergy" readonly="true"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <div class="call-container">
        <hr/>
      </div>
      <div class="call-container" style="margin-down:15px;" align="left">
        <span>病情描述</span>
      </div>
      <el-row>
        <el-col>
          <el-form-item>
            <el-input v-model="form.desc"  type="textarea"  autosize="true" readonly="true"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <div class="call-container" style="margin-down:15px;" align="left">
        <span>诊断</span>
      </div>
      <el-row>
        <el-col >
          <el-form-item >
            <el-input v-model="form.diagnose"  type="textarea"  autosize="true" ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <div class="head-container" label-width="120px" >
        <el-button type="primary" style="margin-left:1100px;"   @click="onCancel">发送</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '夏',
        sex:'男',
        age: '20',
        time: '2天',
        allergy: '无',
        diagnose:'',
        desc: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈'
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
.line{
  text-align: center;
}
</style>

