<template>
  <div>
    <div id="main">
      <el-checkbox-group v-model="apBreed">
        <div id="left" ></div>

        <div id="center" style="display: flex; flex-wrap: wrap;">
          <div class="ApBreedDiv" style="width: 50%;">
            <el-checkbox label="杜洛克" border></el-checkbox>
          </div>
          <div class="ApBreedDiv" style="width: 50%;">
            <el-checkbox label="长白猪" border></el-checkbox>
          </div>
          <div class="ApBreedDiv" style="width: 50%;">
            <el-checkbox label="莱芜猪" border ></el-checkbox>
          </div>
          <div class="ApBreedDiv" style="width: 50%;">
            <el-checkbox label="吉神黑猪" border></el-checkbox>
          </div>
          <div class="ApBreedDiv" style="width: 50%;">
            <el-checkbox label="嘉兴黑猪" border></el-checkbox>
          </div>
          <div class="ApBreedDiv" style="width: 50%;">
            <el-checkbox label="沙乌头猪" border></el-checkbox>
          </div>

        </div>
      </el-checkbox-group>

      <div style="clear: both"></div>
      <div style="margin-top: 20%">
        <el-button type="success" @click="handleSubmit">提交</el-button>
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
  name: "apBreed",
  data() {
    return {
      apBreed: [],
      showSuccessMessage: false
    }
  },
  methods: {
    handleSubmit() {
      if (!this.$store.getters.loggedIn) {
        alert('请先登录！');
        return;
      }
      if (this.apBreed.length>0){
        axios.post(`${this.$API_BASE_URL}/apBreed/selectBreed`, {
          apBreed: this.apBreed,
        },{
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'username': this.$store.getters.username, // 添加用户名
          }
        }).then(response => {
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

<style scoped>
#center {
  text-align: center;
}
.ApBreedDiv{
  margin-top: 13%;
}
</style>