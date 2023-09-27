<template xmlns="http://www.w3.org/1999/html">
  <div>
    <img alt="Vue logo" style="margin-top: 0.5%" width=88%  src="../assets/back1.jpg">
    <el-card class="box-card4" style="position: absolute; top: 5%; left: 60%; z-index: 1;">
      <h2 style="margin-top: 10%">用户登录</h2>
      <form @submit.prevent="register">
        <el-input style="margin-top: 6%;border-radius: 20px;width: 80%" v-model="username" placeholder="Username" /><br>
        <el-input style="margin-top: 6%;border-radius: 20px;width: 80%" v-model="password" type="password" placeholder="Password" /><br>
<!--        注册-->
        <div style="margin-top: 16%;margin-bottom: 10%" >
          <router-link to="/register" >没有账号？点击注册</router-link><br>
        </div>

        <el-button style="margin-top: 6%;border-radius: 5px;" type="success" @click="login">登录</el-button>
      </form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',

    };
  },
  computed: {
    errorMessage() {
      return this.$store.getters.errorMessage;
    },
    loggedIn() {
      return this.$store.getters.loggedIn;
    },
  },
  methods: {
    async login() {

      await this.$store.dispatch('login', { username: this.username, password: this.password });

      // 登录后，你可以根据需要执行一些操作
      if (this.loggedIn) {
        // 登录成功后的操作
        this.$notify({
          title: '成功',
          text: '登录成功',
          type: 'success',
          position: 'top-left',
        });
      } else {
        // 登录失败后的操作
          this.$notify({
            title: '账号或密码错误',
            text: '账号或密码错误',
            type: 'error',
            position: 'top-right',
          });
      }
    },
  },
};
</script>

<style scoped>
.box-card4{
  width: 20%;
  margin-top: 10%;
  margin-left: auto;
  margin-right: auto;
  background-color: #fbfbfb;
  border:1px solid #d9d9d9;
  border-radius: 15px;
}
</style>