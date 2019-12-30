<template>
  <div class="app-container">
    <div class="call-container" style="margin-down:15px;" align="left">
      <span>基本信息</span>
    </div>
    <!-- <div>
    this is the news page.the transform param is {{this.$route.params.inquiryId}}
    </div>-->
    <el-form ref="form" :model="form" label-width="120px">
      <el-row>
        <el-col :span="8">
          <el-form-item label="姓名:">
            <!-- <el-input v-model="form.name" readonly="true"></el-input> -->
            {{form.name}}
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="性别:">{{form.sex}}</el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="年龄:">{{form.age}}</el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="患病时长:">
            <!-- <el-input v-model="form.time" readonly="true" slot-scope="scope">{{scope.row.duration}}</el-input> -->
            {{form.time}}
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="16">
          <el-form-item label="药物过敏史:">
            <!-- <el-input v-model="form.allergy" readonly="true"></el-input> -->
            {{form.allergy}}
          </el-form-item>
        </el-col>
      </el-row>
      <div class="cell_dashed"></div>
      <div class="call-container" style="margin-down:15px;" align="left">
        <span>病情描述</span>
      </div>
      <el-row>
        <el-col>
          <el-form-item>
            <!-- <el-input v-model="form.desc" type="textarea" autosize="true" readonly="true"></el-input> -->
            {{form.desc}}
          </el-form-item>
        </el-col>
      </el-row>
      <div class="cell_dashed"></div>
      <div class="call-container" style="margin-down:15px;" align="left">
        <span>病情信息</span>
      </div>
      <el-row>
        <el-col>
          <el-form-item>
            <div
              class="border;imglist-item;imglist-noright"
              style="width:220px;"
              width="200"
              hight="100"
            >
              <p v-for="(item,i) in form.medicalRecord" :key="i">
                <img :src="form.medicalRecord[i].filePath" width="200" height="500" />
              </p>
            </div>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import { getPatientInfo } from "@/api/inquiry";
export default {
  data() {
    return {
      form: {
        name: "",
        sex: "",
        age: "",
        time: "",
        allergy: "",
        desc: "",
        medicalRecord: ""
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
  },
  created() {
    debugger;
    this.$store
      .dispatch("inquiry/getPatientInfo", this.$route.params.inquiryId)
      .then(response => {
        debugger;
        console.log(response);
        this.form.name = response.body.patName;
        this.form.sex = response.body.patSex;
        this.form.age = response.body.patAge;
        this.form.time = response.body.duration;
        this.form.allergy = response.body.allergy;
        this.form.desc = response.body.description;
        this.form.medicalRecord = response.body.medicalRecord;
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
};
</script>

<style scoped>
.line {
  text-align: center;
}
.cell_dashed {
  border-bottom: 0.5px dashed #c2bfbf;
  margin-bottom: 1rem;
}
</style>

