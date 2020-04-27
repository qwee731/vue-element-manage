<template>
  <header>
    <div class="wrapper">
      <el-row>
        <el-col :span="4">
          <div class="logo">旋风博客</div>
        </el-col>
        <el-col :span="20">
          <el-menu
            :default-active="activeIndex"
            class="nav"
            mode="horizontal"
            @select="handleSelect"
            background-color="#2d2d2d"
            text-color="#9d9d9d"
            active-text-color="#fff"
          >
            <el-menu-item index="1">
              <router-link to="/">
                <i class="iconfont icon-home"></i>首页
              </router-link>
            </el-menu-item>
            <el-menu-item index="2">
              <router-link to="/article" class="login" v-if="isSignIn===1">我的博客</router-link>
            </el-menu-item>
            <el-menu-item index="3">
              <router-link to="/login" class="login" v-if="isSignIn===0">登录</router-link>
            </el-menu-item>
            <el-menu-item index="/personal" v-if="isSignIn===1">
              <router-link class="signBtn" to="/personal">zhouzhou</router-link>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(index) {
      this.activeIndex = index;
    }
  },
  computed: {
    isSignIn() {
      return this.$store.state.isSignIn;
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  background: #2d2d2d;
  color: #9d9d9d;
  box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
  .logo {
    line-height: 60px;
    font-size: 18px;
  }
}
.nav {
  float: right;
  border-bottom: none;
  li {
    padding: 0;
    a {
      display: inline-block;
      padding: 0 20px;
    }
  }
}
.icon-home {
  vertical-align: top;
  margin: 0 5px 0 0;
}
.login {
  // background: #3b99fc !important;
  // color: #fff !important;
  line-height: 60px;
}
.login:hover {
  color: #fff !important;
}
</style>
