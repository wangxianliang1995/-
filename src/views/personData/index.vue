<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
        <div class="head-container">
            <div class="head-text">基本信息</div>
        </div>
        <el-row :gutter="20">
            <el-col :span="2"><div class="title-longcontent">真实姓名：</div></el-col>
            <el-col :span="4"><div class="title-longcontent">{{name}}</div></el-col>
            <!-- <el-col :span="1"><div class="title-content">性别：</div></el-col>
            <el-col :span="4"><div class="title-content">女</div></el-col> -->
        </el-row>
        <el-row :gutter="20">
            <el-col :span="2"><div class="title-longcontent">身份证号：</div></el-col>
            <el-col :span="4"><div class="title-longcontent">{{idCardNo}}</div></el-col>
        </el-row>
        <!-- <el-row :gutter="20">
            <el-col :span="2"><div class="title-longcontent">健康卡号：</div></el-col>
            <el-col :span="5"><div class="title-longcontent">{{heaCardNo}}</div></el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="2"><div class="title-longcontent">医保卡号：</div></el-col>
            <el-col :span="5"><div class="title-longcontent">{{medCardNo}}</div></el-col>
        </el-row> -->
        <!-- <el-row :gutter="20">
          <el-col :span="2"><div class="title-longcontent">温馨提示：</div></el-col>
          <el-col :span="10"><div class="meno-longcontent">{{memo}}</div></el-col>
        </el-row> -->
    </el-form>
  </div>
</template>

<script>
import { getPersonData } from '@/api/user'
import { setPhoto,getPhoto} from '@/utils/auth'
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
      name:'',
      idCardNo:'',
      heaCardNo:'',
      medCardNo:'',
      memo: '',
      photo:''
    }
  },
  created() {
    debugger;
    this.fetchData()
  },
  methods: {
    fetchData() {
      getPersonData().then(response => {
        debugger;
        this.name = response.body.name
        this.idCardNo = response.body.idCardNo
        this.heaCardNo = response.body.heaCardNo
        this.medCardNo = response.body.medCardNo
        this.memo = response.body.memo
        this.photo = response.body.photo
        setPhoto(response.body.photo);
        })
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
  .meno-longcontent {
    text-align: left;
    line-height: 30px;
    width: 100%;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>

