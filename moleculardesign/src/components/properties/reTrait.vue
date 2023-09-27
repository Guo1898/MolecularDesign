<template>
<div>
  <div id="main">
    <el-checkbox-group v-model="reTrait">
      <div id="left" ></div>
      <div id="center">
        <div class="ReTraitDiv">
          <el-checkbox label="产仔数" border></el-checkbox>
        </div>
        <div class="ReTraitDiv">
          <el-checkbox label="乳头数" border></el-checkbox>
        </div>
        <div class="ReTraitDiv">
          <el-checkbox label="产活仔数" border></el-checkbox>
        </div>
        <div class="ReTraitDiv">
          <el-checkbox label="总仔窝重" border></el-checkbox>
        </div>
        <div class="ReTraitDiv">
          <el-checkbox label="活仔窝重" border></el-checkbox>
        </div>
        <div  class="ReTraitDiv">
          <el-checkbox label="初产日龄" border></el-checkbox>
        </div>
      </div>
    </el-checkbox-group>
    <div style="clear: both"></div>
    <div style="margin-top: 15%">
      <el-button type="primary" @click="handleSubmit">提交</el-button>
    </div>
    <div v-if="showSuccessMessage">
      <p>提交成功！</p>
    </div>

  </div>

</div>
</template>

<script>
import axios from "axios";

export default {
  name: "reTrait",
  data() {
    return {
      reTrait: [],
      showSuccessMessage: false,
      emailDialogVisible: false,
    }
  },
  methods: {


    handleSubmit() {
      // 检查用户是否已登录
      if (!this.$store.getters.loggedIn) {
        alert('请先登录！');
        return;
      }

      if (this.reTrait.length>0){

        const token = localStorage.getItem('token'); // 从LocalStorage获取JWT令牌

        // if (!token) {
        //   alert('没有找到有效的令牌，请重新登录！');
        //   return;
        // }
        axios.post(`${this.$API_BASE_URL}/reTrait/selectTrait`, {
          reTrait: this.reTrait,

        },{
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            // 'Authorization': `Bearer ${token}`,
            'username': this.$store.getters.username, // 添加用户名
          }}).then(response => {
          // 处理提交成功的逻辑
          this.showSuccessMessage = true;
        }).catch(error => {
              // 处理提交失败的逻辑
            });
      }else {
        alert('请选择对应列的数据！');
      }
    },
  },
}
</script>

<style >

#center {
  text-align: center;
}
.ReTraitDiv{
  margin-top: 10%;
}

</style>