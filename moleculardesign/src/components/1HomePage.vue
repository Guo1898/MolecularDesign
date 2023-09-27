<template>
  <div>
  <el-container>
    <el-main>
      <div >
        <img class="fade-in" alt="Vue logo" width=88% height=44% src="../assets/s1.jpg">
        <img class="fade-in" alt="Vue logo" width=88% height=44% src="../assets/s2.jpg">
        <img class="fade-in" alt="Vue logo" width=88% height=44% src="../assets/s3.jpg">
      </div>
    </el-main>
    <div style="margin-bottom: 20%"></div>
    <el-footer style="color: #ffffff">College of Animal Sciences Zhejiang University </el-footer>
  </el-container>
  </div>
</template>

<script >
export default {
  name: "maindata",
  data() {
    return {

    }
  },

}

</script>

<style>
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  background-color: #FFFFFF;
  color: #333;
  text-align: center;
  line-height: 0px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.el-header, .el-footer {
  background-color: #409EFF;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.float {
  animation: float 5s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(0px);
  }
}



.fade-in {
  animation: fade-in 5s ease-in-out forwards, float 3s ease-in-out infinite;
}

.fade-in:nth-child(1) {
  animation-delay: 0s, 5s;
}

.fade-in:nth-child(2) {
  animation-delay: 0s, 5s;
}

.fade-in:nth-child(3) {
  animation-delay: 0s,5s;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>