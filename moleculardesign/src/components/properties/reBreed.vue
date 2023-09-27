<template>
  <div>
    <div id="main">
      <el-checkbox-group v-model="reBreed">
        <div id="left" ></div>

        <div id="center" style="display: flex; flex-wrap: wrap;">
          <div class="ReBreedDiv" style="width: 100%;" >
            <el-checkbox label="二花脸" border></el-checkbox>
          </div>
          <div class="ReBreedDiv" style="width: 100%;">
            <el-checkbox label="梅山猪" border></el-checkbox>
          </div>
          <div class="ReBreedDiv" style="width: 100%;">
            <el-checkbox label="大白猪" border></el-checkbox>
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
  name: "reBreed",
  data() {
    return {
      reBreed: [],
      showSuccessMessage: false
    }
  },
  methods: {
    handleSubmit() {
      if (!this.$store.getters.loggedIn) {
        alert('请先登录！');
        return;
      }
      if (this.reBreed.length>0){
        axios.post(`${this.$API_BASE_URL}/reBreed/selectBreed`, {
          reBreed: this.reBreed,
        },{
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            // 'Authorization': `Bearer ${localStorage.getItem('token')}`, // 添加用户令牌
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
.el-checkbox-group .el-checkbox.is-checked .el-checkbox__input {
  background-color: #67C23A;
  border-color: #67C23A;
}

.el-checkbox-group .el-checkbox .el-checkbox__input {
  background-color: #ffffff;
  border-color: #dcdfe6;
}

#center {
  text-align: center;
}
.ReBreedDiv{
  margin-top: 13%;
}
</style>