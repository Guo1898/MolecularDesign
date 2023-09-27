<template>
<div>
  <div id="main">
    <el-checkbox-group v-model="apTrait">
      <div id="left" ></div>

      <div id="center" >
        <div class="ApTraitDiv" >
          <el-checkbox label="体型评分" border></el-checkbox>
        </div>
        <div class="ApTraitDiv">
          <el-checkbox label="外貌颜色" border></el-checkbox>
        </div>
        <div class="ApTraitDiv">
          <el-checkbox label="后腿构型" border></el-checkbox>
        </div>
        <div class="ApTraitDiv">
          <el-checkbox label="寄生虫载量" border></el-checkbox>
        </div>
        <div class="ApTraitDiv">
          <el-checkbox label="干扰素水平" border></el-checkbox>
        </div>
        <div class="ApTraitDiv">
          <el-checkbox label="免疫球蛋白水平" border></el-checkbox>
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
  name: "reTrait",
  data() {
    return {
      apTrait: [],
      showSuccessMessage: false
    }
  },
  methods: {
    handleSubmit() {
      if (!this.$store.getters.loggedIn) {
        alert('请先登录！');
        return;
      }
      if (this.apTrait.length>0){
        axios.post(`${this.$API_BASE_URL}/apTrait/selectTrait`, {
          apTrait: this.apTrait,
        },{
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
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

<style scoped>
#center {
  text-align: center;
}
.ApTraitDiv{
  margin-top: 10%;
}
</style>