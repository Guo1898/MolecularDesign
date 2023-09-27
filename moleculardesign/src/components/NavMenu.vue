<template>
  <div style="margin-top: 0px;margin-bottom: 0px;font-size: 20px;font-weight: bold" >
    <el-menu
        default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"

        router
        >
      <el-menu-item></el-menu-item>
      <el-menu-item></el-menu-item>
      <el-menu-item></el-menu-item>

      <el-menu-item index="/login" v-if="!loggedIn"><span style="font-size: 20px;color: #409EFF;">登录</span></el-menu-item>
      <el-menu-item v-else>
        <span style="font-size: 18px;color: #409EFF">hello,{{ username }}</span>
        <el-button type="text" @click="logout">&nbsp;&nbsp;<span class="custom-text">注销</span></el-button>
      </el-menu-item>
      <el-menu-item index="/documentation" ><span style="font-size: 20px" >说明文档</span></el-menu-item>
      <el-menu-item index="/LineageSelection" ><span style="font-size: 20px" >系祖选择</span></el-menu-item>
      <el-menu-item index="/MolecularDesign" ><span style="font-size: 20px" >分子设计</span></el-menu-item>
      <el-menu-item index="/BreedingMaterial" ><span style="font-size: 20px" >参考群体</span></el-menu-item>
      <el-menu-item index="/BreedingObjectives" ><span style="font-size: 20px" >育种目标</span></el-menu-item>
      <el-menu-item index="/maindata"  ><span style="font-size: 20px" >首页</span></el-menu-item>


      <div class="menu-container">
        <div class="logo-container">
          <img width="11%" height="5.5%" src="../assets/logo1.png">
        </div>
      </div>

    </el-menu>

    <!--      <el-menu-item index="/HybridInnovation" ><span style="font-size: 20px" >杂交创新</span></el-menu-item>-->
    <!--      <el-menu-item index="/TransverseFixation" ><span style="font-size: 20px" >横交固定</span></el-menu-item>-->
    <!--      <el-menu-item index="/TransverseFixation" ><span style="font-size: 20px" >纯种改良</span></el-menu-item>-->
    <!--      <el-menu-item index="/TransverseFixation" ><span style="font-size: 20px" >性状糅合</span></el-menu-item>-->

  </div>
</template>

<style scoped>
.logo-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin-left: 120px;
  padding-top: 0%;
}

.el-menu--horizontal>.el-menu-item {
  float: right;
  height: 60px;
  line-height: 60px;
  margin: 0;
  border-bottom: 2px solid transparent;
  color: #909399;
}
.custom-text {
  color: white; /* 文字颜色为白色 */
  background-color: #409EFF; /* 背景颜色为蓝色 */
  border: 1px solid #409EFF; /* 蓝色边框 */
  padding: 5px 10px; /* 可以根据需要调整内边距 */
  border-radius: 4px; /* 圆角边框 */
  display: inline-block; /* 使元素变成行内块级元素，以适应文本内容 */
  cursor: pointer; /* 鼠标悬停时显示手型光标 */
}
</style>

<script>
export default {
  data() {
    return {
      activeIndex: "/maindata",
    };
  },
  methods: {
    logout() {
      // 执行注销操作，可以调用Vuex中的action
      this.$store.dispatch('logout');
    },
  },
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    },
    username() {
      return this.$store.getters.username;
    },
  },
}
</script>