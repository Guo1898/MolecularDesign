<template>
<div>
  <div id="main">
    <el-checkbox-group v-model="prTrait">
      <div id="left" ></div>
      <div id="center">
        <div class="PrTraitDiv" >
          <el-checkbox label="采食量" border></el-checkbox>
        </div>
        <div class="PrTraitDiv">
          <el-checkbox label="生长体重" border></el-checkbox>
        </div>

        <div class="PrTraitDiv">
          <el-checkbox label="饲料转化率" border></el-checkbox>
        </div>
        <div class="PrTraitDiv">
          <el-checkbox label="平均日增重" border></el-checkbox>
        </div>

        <div class="PrTraitDiv">
          <el-checkbox label="达30kg日龄" border></el-checkbox>
        </div>
        <div class="PrTraitDiv">
          <el-checkbox label="达100kg日龄" border></el-checkbox>
        </div>
      </div>
    </el-checkbox-group>

    <div style="clear: both"></div>
    <div style="margin-top: 12%">
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
  name: "prTrait",
  data() {
    return {
      prTrait: [],
      showSuccessMessage: false
    }
  },
  methods: {
    handleSubmit() {
      if (!this.$store.getters.loggedIn) {
        alert('请先登录！');
        return;
      }
      if (this.prTrait.length>0){
        axios.post(`${this.$API_BASE_URL}/prTrait/selectTrait`, {
          prTrait: this.prTrait,

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

#center {
  text-align: center;
}
.PrTraitDiv{
  margin-top: 10%;
}
</style>