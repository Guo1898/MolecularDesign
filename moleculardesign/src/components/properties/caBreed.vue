<template>
  <div>
    <div id="main">
      <el-checkbox-group v-model="caBreed">
        <div id="left" ></div>

        <div id="center" style="display: flex; flex-wrap: wrap;">
          <div class="CaBreedDiv" style="width: 100%;">
            <el-checkbox label="杜洛克" border></el-checkbox>
          </div>
          <div class="CaBreedDiv" style="width: 100%;">
            <el-checkbox label="长白猪" border></el-checkbox>
          </div>
          <div class="CaBreedDiv" style="width: 100%;">
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
  name: "caBreed",
  data() {
    return {
      caBreed: [],
      showSuccessMessage: false
    }
  },
  methods: {
    handleSubmit() {
      if (!this.$store.getters.loggedIn) {
        alert('请先登录！');
        return;
      }
      if (this.caBreed.length>0){
        axios.post(`${this.$API_BASE_URL}/caBreed/selectBreed`, {
          caBreed: this.caBreed,
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
.CaBreedDiv{
  margin-top: 13%;
}
</style>