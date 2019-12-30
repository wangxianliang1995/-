<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <div class="head-container">
        <div class="head-text">基本信息</div>
      </div>
      <el-row :gutter="20">
        <el-col :span="3">
          <div class="title-longcontent">姓名：</div>
        </el-col>
        <el-col :span="5">
          <div class="title-longcontent">
            <el-input v-model="isConfirm" readonly="true"></el-input>
          </div>
          <el-col :span="3">
          <div class="title-longcontent">订单状态：</div>
        </el-col>
        <el-col :span="5">
          <div class="title-longcontent">
            <el-input v-model="isConfirm" readonly="true"></el-input>
          </div>
        </el-col>
        </el-col>
      </el-row>

       <el-row >
        <el-col :span="3">
          <div class="title-longcontent">联系电话：</div>
        </el-col>
        <el-col :span="5">
          <div class="title-longcontent">
            <el-input v-model="Mobile" readonly="true"></el-input>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="title-longcontent">地址：</div>
        </el-col>
        <el-col :span="5">
          <div class="title-longcontent">
            <el-input v-model="name" readonly="true"></el-input>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">

      </el-row>
      <div class="call-container">
        <hr />
      </div>
      <div class="middle-container">
        <div class="head-text">药物医嘱</div>
      </div>

      <div class="table-container">
        <el-table
          v-loading="listLoading"
          :data="form.Medicinals"
          element-loading-text="Loading"
          border
          fit
          highlight-current-row
        >
          <el-table-column align="center" label="药品名称" prop="goodsName"></el-table-column>
          <el-table-column label="单价" align="center" prop="price"></el-table-column>
          <el-table-column label="数量" align="center" prop="quantity">
            <el-input-number v-model="num1" @change="handleChange" :min="1" :max="100" value="quantity" label="quantity"></el-input-number>
          </el-table-column>
          <el-table-column class-name="status-col" label="药物医嘱" align="center" prop="instruction"></el-table-column>
        </el-table>
      </div>

      <!-- <div class="table-container" v-if="form.isConfirm < 10" > -->

        <el-button type="primary" @click="onSubmitDetail(inquiryId)">添加</el-button>

        <el-button type="primary" @click="onSubmitim" style="margin-left:700px;">发送</el-button>
      <!-- </div> -->
      <el-row :gutter="20">
        <el-col :span="1">
          <div class="title-longcontent">合计：</div>
        </el-col>
        <el-col :span="4">
          <div class="title-longcontent">
            <el-input v-model="amount" readonly="true"></el-input>
          </div>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import { getDoctorsadvice, getPatientInfo } from "@/api/inquiry";

export default {
  data() {
    return {
       inquiryId:'',
      form: {
        Name: '',
        Mobile: '',
        amount: '',
        Address: '',
        isConfirm:'',
        Medicinals: '',
        requestdrug:'',
        list:''
      }
    };
  },
  methods: {
    onSubmit() {
      this.$message("submit!");
    },
    onSubmitDetail(inquiryId) {
      debugger
      this.$router.push({ name: 'drugadd', params: { inquiryId: inquiryId }})
    },
    onSubmitim() {
      this.$router.push('/inquiry/index')

    },
    handleChange() {
      this.$message("value!");
    }
  },
  created() {
    debugger
    this.form.requestdrug = this.$route.params.requestdrug;
    this.inquiryId = this.$route.params.inquiryId
    debugger
    this.$store
      .dispatch("inquiry/getDoctorsadvice", this.$route.params.inquiryId)
      .then(response => {
        debugger;
        console.log(response);
        this.form.Name = response.body.patName;
        this.form.Mobile = response.body.patMobile;
        this.form.Address = response.body.patAddress;
        this.form.amount = response.body.amount;
        this.form.isConfirm = response.body.isConfirm;
        this.form.Medicinals = response.body.patMedicinals;
        this.form.requestdrug = this.$route.params.requestdrug;
        debugger;
        // if(this.Medicinals>this.requestdrug){
        //   this.form.list = this.form.Medicinals
        // }
        // else{
        //   this.form.list =this.form.requestdrug
        // }
        // response.body.patName
        // this.$router.push({ path: this.redirect || '/' })
        // this.$router.push('/patientInfo/index')
        // this.$router.push('/patientInfo/index')
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
      });


  }

  //  createdinquiry() {
  //   this.$store
  //     .dispatch('inquiry/getPatientInfo', this.$route.params.inquiryId)
  //     .then(response => {
  //       debugger;
  //       console.log(response)
  //       this.form.name = response.body.patName
  //       this.form.sex = response.body.patSex
  //       this.form.age = response.body.patAge
  //       this.form.time = response.body.duration
  //       this.form.allergy = response.body.allergy
  //       this.form.desc = response.body.description
  //       this.form.medicalRecord = response.body.medicalRecord
  //       // response.body.patName
  //       // this.$router.push({ path: this.redirect || '/' })
  //       // this.$router.push('/patientInfo/index')
  //       // this.$router.push('/patientInfo/index')
  //       this.loading = false
  //     })
  //     .catch(() => {
  //       this.loading = false
  //     })
  // }
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
  }
}
.middle {
  &-container {
    margin-top: 20px;
    margin-bottom: 10px;
  }
  &-text {
    font-size: 20px;
    line-height: 26px;
  }
}
.table {
  &-container {
    margin-top: 0px;
    margin-bottom: 30px;
    margin-left: 0px;
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
