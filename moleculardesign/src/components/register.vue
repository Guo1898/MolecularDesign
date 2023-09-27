<template>
  <div>
    <img alt="Vue logo" style="margin-top: 0.5%" width=88%  src="../assets/back1.jpg">
    <el-card class="box-card4" style="position: absolute; top: 5%; left: 60%; z-index: 1;">
      <h2 style="margin-top: 10%">用户注册</h2>
      <form @submit.prevent="register">
        <el-input style="margin-top: 6%;border-radius: 20px;width: 80%" v-model="username" placeholder="Username" /><br>
        <el-input style="margin-top: 6%;border-radius: 20px;width: 80%" v-model="password" type="password" placeholder="Password" /><br>
        <!--        验证码-->
        <!--        忘记密码-->
        <!--        注册-->
        <h5 style="margin-top: 18%">*仅支持字母数字及特殊字符,区分大小写</h5><br>



        <el-button style="margin-top: 10%;border-radius: 5px;" type="primary" @click="register">Register</el-button>
      </form>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router";

export default {
  data() {
    return {
      username: '',
      password: '',
      usernameError: false,
      passwordError: false
    };
  },
  watch: {
    username (value) {
      this.usernameError = !/^[a-zA-Z0-9!@#$%^&*()_+]*$/.test(value)
    },
    password (value) {
      this.passwordError = !/^[a-zA-Z0-9!@#$%^&*()_+]*$/.test(value)
    }
  },
  methods: {
    register() {
      axios.post(`${this.$API_BASE_URL}/register`, {
        username: this.username,
        password: this.password
      },{
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      }).then(response => {
        // 处理提交成功的逻辑
        router.push('/login');
        this.showSuccessMessage = true;
        this.$notify({
          title: '注册成功！',
          text: '注册成功',
          type: 'success',
          position: 'top-left',
        })
      }).catch(error => {
        if (error.response.status === 409) { // 假设服务器在用户已存在时返回409
          this.$notify({
            title: '注册失败！用户已存在!',
            text: '用户已存在',
            type: 'error',
            position: 'top-left',
          })
        } else {
          console.log(error.response.data); // 打印后端返回的其他错误信息
        }
      });
    },
  }
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