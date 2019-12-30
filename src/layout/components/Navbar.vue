<template>
  <div class="navbar">
    <hamburger
      :is-active="sidebar.opened"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    />

    <breadcrumb class="breadcrumb-container" />
    <!-- <div style="float: right;"> -->
    <!-- <el-button type="primary" plain @click="onCancel">开始接诊</el-button>
    <el-button type="primary" plain @click="onCancel">停止接诊</el-button>-->
    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img :src="photo" class="user-avatar" />
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <!-- <router-link to="/"> -->
            <el-dropdown-item>
              <span style="display:block;" @click="personData">个人资料</span>
            </el-dropdown-item>
          <!-- </router-link> -->
          <el-dropdown-item divided>
            <span style="display:block;" @click="exit">退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Breadcrumb from "@/components/Breadcrumb";
import Hamburger from "@/components/Hamburger";
import { exitAccount } from '@/api/inquiry';
import { MessageBox, Message } from 'element-ui';
import store from '@/store';
import { getPhoto } from '@/utils/auth';

export default {
  components: {
    Breadcrumb,
    Hamburger
  },
  data() {
    return {
      photo:''
    }
  },
  computed: {
    ...mapGetters(["sidebar", "avatar"])
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.photo = getPhoto()
    },
    toggleSideBar() {
      this.$store.dispatch("app/toggleSideBar");
    },
    exit() {
      MessageBox.confirm('您确定要退出当前账号吗？', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: '提示'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            this.$store.dispatch('inquiry/exitAccount','FX_WJW_APP_100').then(response => {
               })
            location.reload()
          })
        })
    },
    personData() {
      this.$router.push({name: 'PersonData'})
    }
  }
};

</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
