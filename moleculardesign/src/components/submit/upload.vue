<template>
  <div>
    <h5>请输入您基因文件的绝对路径</h5>
    <el-input style="height: 10%;width: 80%" placeholder="输入绝对路径" v-model="filePathValue"></el-input>
    <div style="margin-top: 5%">
      <el-button type="success" @click="filePathSubmit">点击提交</el-button>
    </div>
    <div v-if="showSuccessMessage1">
      <p>提交成功！</p>
    </div>
    <div style="margin-top: 20%">
      <h5>请上传您的基因文件</h5>
      <div>
        <input style="height: 10%;width: 80%;background-color: #eeeeee;" type="file" ref="fileInput" @change="selectFile">

        <div style="margin-top: 20px">
          <el-button  type="success" @click="uploadFile">上传</el-button>
        </div>
        <div v-if="showSuccessMessage2">
          <p>提交成功！</p>
        </div>
      </div>
    </div>
    <div>
      <div style="margin-top:20%">
        <el-button  type="primary" @click="qtlcomments">QTL注释</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "upload",
  data(){
    return {
      filePathValue:"disk191",// 初始化滑块的值
      showSuccessMessage1: false,
      showSuccessMessage2: false,
      selectedFile: null,
    }
  },
  methods: {
    filePathSubmit() {
      axios.post('http://localhost:8088/test',
          {filePathValue: this.filePathValue}).then(response => {
        console.log(response.data)
        this.showSuccessMessage1 = true;
      }).catch(error => {
        console.error(error)
      })
    },
    selectFile(event) {
      this.selectedFile = event.target.files[0];
    },
    uploadFile() {
      let formData = new FormData();
      formData.append('file', this.selectedFile);

      axios.post('http://localhost:8088/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(response => {
        console.log(response.data);
        this.showSuccessMessage2 = true;
      }).catch(error => {
        console.log(error);
      });
    },
    qtlcomments(){
      axios.post('http://localhost:8088/qtlComments', {
        event1 :"启动"
      }).then(response => {
        console.log(response.data);
        this.showSuccessMessage2 = true;
      }).catch(error => {
        console.log(error);
      });
    }

  }
}
</script>

<style scoped>

</style>