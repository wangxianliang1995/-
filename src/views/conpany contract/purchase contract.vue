<template>
  <div class="app-container">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#FFF"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">购买合同</el-menu-item>
      <el-menu-item index="2">委托合同</el-menu-item>
      <el-menu-item index="3">外部技术合同</el-menu-item>
      <el-menu-item index="4">
        <a href="https://www.ele.me" target="_blank">定制合同</a>
      </el-menu-item>
      <el-menu-item index="5">质量合同</el-menu-item>
    </el-menu>
    <div class="call-container">
      <hr/>
    </div>
    <el-form ref="form" label-width="120px">
      <el-row>
        <el-col :span="8">
          <el-form-item label="公司名称">张三</el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="项目名称">23</el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="开始时间">男</el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="结束时间">男</el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="折扣">男</el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="附加">男</el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="所属部门">男</el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="负 责 人">男</el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },

  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
