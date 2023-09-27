<template>
<div>
  <div id="main">
    <el-checkbox-group v-model="caTrait">
      <div id="left" ></div>

      <div id="center">
        <div class="CaTraitDiv" >
          <el-checkbox label="廋肉率" border></el-checkbox>
        </div>
        <div class="CaTraitDiv">
          <el-checkbox label="肋骨数" border></el-checkbox>
        </div>
        <div class="CaTraitDiv">
          <el-checkbox label="屠宰率" border></el-checkbox>
        </div>
        <div class="CaTraitDiv">
          <el-checkbox label="眼肌面积" border></el-checkbox>
        </div>
        <div class="CaTraitDiv">
          <el-checkbox label="平均背膘厚" border></el-checkbox>
        </div>
        <div class="CaTraitDiv">
          <el-checkbox label="肌纤维直径" border></el-checkbox>
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
      caTrait: [],
      showSuccessMessage: false
    }
  },
  methods: {

    handleSubmit() {
      if (!this.$store.getters.loggedIn) {
        alert('请先登录！');
        return;
      }
      if (this.caTrait.length>0){
        axios.post(`${this.$API_BASE_URL}/caTrait/selectTrait`, {
          caTrait: this.caTrait,
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
.CaTraitDiv{
  margin-top: 10%;
}
</style>