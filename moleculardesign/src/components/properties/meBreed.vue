<template>
  <div>
    <div id="main">
      <el-checkbox-group v-model="meBreed">
        <div id="left" ></div>
        <div id="center" style="display: flex; flex-wrap: wrap;">
          <div class="MeBreedDiv" style="width: 50%;">
            <el-checkbox label="莱芜猪" border ></el-checkbox>
          </div>
          <div class="MeBreedDiv" style="width: 50%;">
            <el-checkbox label="屯昌猪" border ></el-checkbox>
          </div>
          <div class="MeBreedDiv" style="width: 50%;">
            <el-checkbox label="吉神黑猪" border></el-checkbox>
          </div>

          <div class="MeBreedDiv" style="width: 50%;">
            <el-checkbox label="北京黑猪" border></el-checkbox>
          </div>
          <div class="MeBreedDiv" style="width: 50%;">
            <el-checkbox label="嘉兴黑猪" border></el-checkbox>
          </div>
          <div class="MeBreedDiv" style="width: 50%;">
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
  name: "meBreed",
  data() {
    return {
      meBreed: [],
      showSuccessMessage: false
    }
  },
  methods: {
    handleSubmit() {
      if (!this.$store.getters.loggedIn) {
        alert('请先登录！');
        return;
      }
      if (this.meBreed.length>0){
        axios.post(`${this.$API_BASE_URL}/meBreed/selectBreed`, {
          meBreed: this.meBreed,
        },{
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'username': this.$store.getters.username, // 添加用户名
          }
        }).then(response => {
          // 处理提交成功的逻辑
          this.showSuccessMessage = true;
        })
            .catch(error => {
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
.el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #67C23A;
  border-color: #409EFF;
}

#center {
  text-align: center;
}
.MeBreedDiv{
  margin-top: 13%;
}
</style>