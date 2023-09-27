<template>
  <div>
    <div style="align-items: center;margin:0% ">
      <div class="sub" >
        <p class="titleSub" >繁殖性状</p>
        <el-progress type="circle" :percentage="revalue*100" color="#67c23a" ></el-progress><br>
        <input class="inputcss" v-model.number="revalue" >
      </div>

      <div class="sub">
        <p class="titleSub" >肉质性状</p>
        <el-progress type="circle" :percentage="mevalue*100" color="#67c23a" ></el-progress><br>
        <input class="inputcss" v-model.number="mevalue"  >
      </div>

      <div class="sub">
        <p class="titleSub" >生产性状</p>
        <el-progress type="circle" :percentage="prvalue*100" color="#67c23a" ></el-progress><br>
        <input class="inputcss" v-model.number="prvalue"  >
      </div>
      <div class="sub">
        <p class="titleSub" >胴体性状</p>

        <el-progress type="circle" :percentage="cavalue*100" color="#67c23a" ></el-progress><br>
        <input class="inputcss" v-model.number="cavalue"  >
      </div>
      <div class="sub">
        <p class="titleSub" >外貌性状</p>
        <el-progress type="circle" :percentage="apvalue*100" color="#67c23a" ></el-progress><br>
        <input class="inputcss" v-model.number="apvalue"  >
      </div>
    </div>

    <div style="margin-top: 3%">
      <el-button type="success" @click="submit">点击提交</el-button>
    </div>

    <div v-if="showSuccessMessage">
      <p>提交成功！</p>
    </div>

  </div>
</template>

<script>

import axios from 'axios'
export default {
  components:{

  },
  data() {
    return {
      apvalue: 0 ,// 初始化滑块的值
      revalue: 0.3 ,// 初始化滑块的值
      mevalue: 0.4 ,// 初始化滑块的值
      cavalue: 0.2 ,// 初始化滑块的值
      prvalue: 0.1 ,// 初始化滑块的值
      showSuccessMessage: false
    }
  },
  methods: {
    submit() {
      if ((this.revalue+this.prvalue+this.mevalue+this.cavalue+this.apvalue)>0.1){
        if (!this.$store.getters.loggedIn) {
          alert('请先登录！');
          return;
        }

        axios.post(`${this.$API_BASE_URL}/traitScale`, {
          revalue: this.revalue,
          prvalue: this.prvalue,
          mevalue: this.mevalue,
          cavalue: this.cavalue,
          apvalue: this.apvalue,
        }, {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'username': this.$store.getters.username, // 添加用户名
          }
        }).then(response => {
              console.log(response.data);
              this.showSuccessMessage = true;
            })
            .catch(error => {
              console.error(error);
            });
      }else {
        alert("性状比例必须小于等于1");
      }
    },
    formatTooltip(val) {
      return val / 100;
    },
  }
}
</script>

<style scoped>
.sub{
  display: inline-block;
  margin: 1%;
  width: 16%;
}
.titleSub{
  text-align: center;
  padding-top: 6%;
  margin-left: 4%;
  margin-right: 4%;

  line-height: 180%;
  font-size: 23px;
  font-weight: bold;
  color: #67c23a
}

.inputcss{
  text-align: center;
  margin-top: 20%;
  width: 60%;
  font-size: 20px;
  color: #67c23a;
  font-weight: bolder;
  border: none;
  background-color: #ffffff;
  border-radius: 101px;
  height: 30px;
  border: 1px solid #67c23a;

}


</style>