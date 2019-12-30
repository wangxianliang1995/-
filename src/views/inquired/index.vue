<template>
  <div class="app-container" style="text-align: center;">
    <div class="head-container" label-width="120px" style="margin-bottom:30px; padding:30px;">
      <div class="head-container" label-width="120px" style="margin-top:40px;margin-bottom:30px;">
        <el-button type="write" style="width:300px;" @click="toInquiry">
          <spen style="font-size:24px">候&nbsp;&nbsp;&nbsp;&nbsp;诊</spen></el-button>
        <el-button type="warning" style="width:300px;margin-left: -30px;" @click="onInquiried">
          <spen style="font-size:24px;">已&nbsp;&nbsp;&nbsp;&nbsp;诊</spen></el-button>
      </div>
    </div>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      stripe
      highlight-current-row
    >
      <el-table-column align="center" label="排号" width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="姓名" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.patName }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="头像" width="95">
          <template slot-scope="scope"><img :src=" scope.row.photoUrl" class="user-avatar" height="100"
           width="100"/></template>
        </el-table-column>
      <el-table-column label="性别" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.patSex }}
        </template>
      </el-table-column>
      <el-table-column label="年龄" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.patAge }}
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="120">
        <template slot-scope="scope">
          <el-button type="primary" @click="onShouZhen(scope.row.id)">首诊病例</el-button>
          </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="120">
        <template slot-scope="scope">
          <el-button type="info" @click="onPatientInfo(scope.row.id)">病情信息</el-button>
          </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="120">
        <template slot-scope="scope">
        <el-button type="warning" plain @click="onDiagnoseResult(scope.row.id)">诊断结果</el-button>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="120">
        <template slot-scope="scope">
        <el-button type="success" plain @click="onDoctorsadvice(scope.row.id,scope.row.userId,scope.row.docId)">药物医嘱</el-button>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="120">
        <template slot-scope="scope">
        <el-button type="danger" plain @click="onInquiry(scope.row.id)">开始问诊</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
debugger;
import { getWaitInquiried,getQuery,getFirstRecord } from '@/api/inquiry'
import { getTokenUser,getToken} from '@/utils/auth'
import { request } from 'http'
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
      form:{
        requestinfo:{
        docId:'',
        patId:''
        }
      },
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
      getWaitInquiried().then(response => {
        this.list = response.body.inquiryDtos
        this.listLoading = false
      })
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    },
    toInquiry(){
      debugger;
      this.$router.push('/inquiry/index')
    },
    onInquiry(id) {
      let userID = getTokenUser('token_userId')
      let userSig = getTokenUser('token_sig')
      let token = getToken()
      let recordUrl = this.$root.IMURL + '?' + 'userID=' + userID + '&' + 'userSig=' + userSig + '&' + 'token=' + token+ '&' + 'inquiryId=' + id + '&' + 'patientsId=' + patientsId;
      window.open(recordUrl, '_blank');
      // window.location.href = this.$root.IMURL + '?' + 'userID=' + userID + '&' + 'userSig=' + userSig + '&' + 'token=' + token+ '&' + 'inquiryId=' + id;

    },
    onShouZhen(id) {
      debugger;
      this.$store.dispatch('inquiry/getFirstRecord', id).then(response => {
            debugger;
            if(response.success == true){
             let  recordUrl = response.body.recordUrl
               window.open(recordUrl, '_blank');
              //  window.location.href = recordUrl;
            }
            this.loading = false
          }).catch(() => {
            this.loading = false
          })

    },

    onDoctorsadvice(id,userId,docId) {
      this.form.requestinfo.docId=docId
      this.form.requestinfo.patId=userId
      debugger;
     console.log('药物医嘱病人信息传参为：'+id)
      this.$store.dispatch('inquiry/getQuery', this.form.requestinfo).then(response => {
        debugger;
     if( response.body.isConfirm == 0) {
      this.$router.push({ name: 'Doctorsadvice', params: { inquiryId: id }})
     }
     this.loading = false
      }).catch(() => {
            this.loading = false
          })
    },
    onInquiried() {
      this.$router.push('/inquired/index')
    },
    onPatientInfo(id) {
      console.log('病人信息传参为：'+id)
      this.$router.push({ name: 'PatientInfo', params: { inquiryId: id }})
    },
    onDiagnoseResult(id) {
      this.$router.push({ name: 'ResultInfo', params: { inquiryId: id }})
    }
  }
}
</script>

