<template>
  <div class="app-container" style="text-align: center;">
    <div class="head-container" label-width="120px" style="margin-left:50px;">
      <div class="head-container" label-width="120px" style="margin-top:40px;margin-bottom:30px;">
        <el-button type="warning" style="width:300px;">
          <spen style="font-size:24px">候&nbsp;&nbsp;&nbsp;&nbsp;诊</spen>
        </el-button>
        <el-button type="write" style="width:300px;margin-left: -30px;" @click="onInquiried">
          <spen style="font-size:24px;">已&nbsp;&nbsp;&nbsp;&nbsp;诊</spen>
        </el-button>
      </div>
      <!--  <div class="call-container" label-width="120px" style="margin-left:700px;margin-top:0px;margin-bottom:10px;">
      <el-button type="primary" @click="onCall">呼叫</el-button>
    </div>
    <div class="call-container" label-width="300px" style="margin-left:550px;margin-top:0px;margin-bottom:30px;" align="center">
      <span>*呼叫患者并提醒下一位患者准备</span>
      </div>-->
      <el-table
        v-loading="listLoading"
        :data="list"
        element-loading-text="Loading"
        highlight-current-row
        border
        fit
        stripe
      >
        <el-table-column align="center" label="排号" width="95">
          <template slot-scope="scope">{{ scope.$index }}</template>
        </el-table-column>
        <el-table-column align="center" label="头像" width="95">
          <template slot-scope="scope"><img :src=" scope.row.photoUrl" width="100px"/></template>
        </el-table-column>
        <el-table-column label="姓名" width="200" align="center">
          <template slot-scope="scope">{{ scope.row.patName }}</template>
        </el-table-column>
        <el-table-column label="性别" width="100" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.patSex }}</span>
          </template>
        </el-table-column>
        <el-table-column label="年龄" width="100" align="center">
          <template slot-scope="scope">{{ scope.row.patAge }}</template>
        </el-table-column>
        <el-table-column class-name="status-col" label="首诊病例" width="120" align="center">
          <template slot-scope="scope">
          <el-button type="primary" @click="onShouZhen(scope.row.id)">首诊病例</el-button>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="created_at" label="病情信息" width="120">
          <template slot-scope="scope">
          <el-button type="success" @click="onPatientInfo(scope.row.id)">病情信息</el-button>
          </template>
        </el-table-column>
        <el-table-column class-name="status-col" label="开始问诊" width="120" align="center">
          <template slot-scope="scope">
          <el-button type="warning" @click="onInquiry(scope.row.id,scope.row.userId)">开始问诊</el-button>
          </template>
        </el-table-column>
        <!-- <el-table-column class-name="status-col" label="叫号" width="120" align="center">
          <el-button type="success" @click="onInquiry">呼叫</el-button>
        </el-table-column> -->
        <el-table-column class-name="status-col" label="结束问诊" width="120" align="center">
          <template slot-scope="scope">
          <el-button type="warning" @click="endInquiry(scope.row.id)">结束问诊</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { getWaitInquiry } from '@/api/inquiry'
import { getTokenUser,getToken} from '@/utils/auth'
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
      result:{
        inquiryId: ''
    }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getWaitInquiry().then(response => {
        debugger;
        this.list = response.body.inquiryDtos
        this.listLoading = false
      })
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
    onInquiry(id,patientsId) {
      console.log(this.$root.IMURL)
      // let userID = '028317fa20b945bea135f915189f549f'
      // let userSig = 'eJxlj11PgzAUhu-5FYRbjZaW8uEdI0uGwyljW4I3hI8WKwK1FMY0-ncnLpHEc-s85z3n-VRUVdV2QXST5nnbNzKRJ0409U7VgHb9BzlnRZLKBIniHyQjZ4IkKZVETFDHGEMA5g4rSCMZZRcDQBvpFk0hyBwDZyTVEaaOjnXbodhw6GyzK6pkOv8bbZxzHWTacK6wcoIPy9jzQ6-fjIybS-ocZzLPA2*Fj2ax19ddJSr-BMfto1tHIlv4rPRf3HXYLJ5K72rfD-Bw-xbm9Taw*G647brX6OC37kcRgHizOr7z2UnJanLpahm2YSM4f2ggomNtMwkQnGtBBH5GU76Ub*EFZLY_'
      debugger;
      let userID = getTokenUser('token_userId')
      let userSig = getTokenUser('token_sig')
      let token = getToken()
      let recordUrl = this.$root.IMURL + '?' + 'userID=' + userID + '&' + 'userSig=' + userSig + '&' + 'token=' + token+ '&' + 'inquiryId=' + id + '&' + 'patientsId=' + patientsId;
      window.open(recordUrl, '_blank');
      // window.location.href = this.$root.IMURL + '?' + 'userID=' + userID + '&' + 'userSig=' + userSig + '&' + 'token=' + token+ '&' + 'inquiryId=' + id + '&' + 'patientsId=' + patientsId;
    },
    onInquiried() {
      this.$router.push('/inquired/index')
    },
    onPatientInfo(id) {
      console.log('病人信息传参为：'+id)
      this.$router.push({ name: 'PatientInfo', params: { inquiryId: id }})
    },
    endInquiry(id) {
      debugger;
      this.result.inquiryId = id
      this.$store.dispatch('inquiry/endInquiry', this.result).then(response => {
            debugger;
            if(response.success == true){
              alert("问诊结束成功！")
              this.$router.push('/inquiry/index')
            }
            this.loading = false
          }).catch(() => {
            this.loading = false
          })
    },
    onCall() {
      this.$message({
        message: 'call!',
        type: 'warning'
      })
    }
  }
}

</script>

