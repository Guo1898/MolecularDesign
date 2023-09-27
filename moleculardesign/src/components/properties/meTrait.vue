<template>
<div>
  <div id="main">
    <el-checkbox-group v-model="meTrait">
      <div id="left" ></div>

      <div id="center" >
        <div class="MeTraitDiv" >
          <el-checkbox label="肉色评分" border></el-checkbox>
        </div>
        <div class="MeTraitDiv">
          <el-checkbox label="嫩度评分" border></el-checkbox>
        </div>
        <div class="MeTraitDiv">
          <el-checkbox label="滴水损失" border></el-checkbox>
        </div>
        <div class="MeTraitDiv">
          <el-checkbox label="肌内脂肪含量" border></el-checkbox>
        </div>
        <div class="MeTraitDiv">
          <el-checkbox label="肉大理石花纹" border></el-checkbox>
        </div>
        <div class="MeTraitDiv">
          <el-checkbox label="不饱和脂肪酸" border></el-checkbox>
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
  name: "meTrait",
  data() {
    return {
      meTrait: [],
      showSuccessMessage: false
    }
  },
  methods: {
    handleSubmit() {
      if (!this.$store.getters.loggedIn) {
        alert('请先登录！');
        return;
      }
      if (this.meTrait.length>0){
        axios.post(`${this.$API_BASE_URL}/meTrait/selectTrait`, {
          meTrait: this.meTrait,

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
.MeTraitDiv{
  margin-top: 10%;
}
</style>