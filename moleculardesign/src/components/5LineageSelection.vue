<template>
  <div>
    <!--    布局-->
    <div style="margin: 1%">
      <img alt="Vue logo" width=88% height=44% src="../assets/p1.jpg">

      <div style="display: flex;align-items: center;margin-top: -5%;justify-content: center" >

        <el-card class="introduction5"  >
          <div style="margin-bottom: 3%;margin-right: 1%">
            <submit></submit>
          </div>


        </el-card>
      </div>

      <div>
        <h2 style="margin-top: 2%">个体评分结果</h2>
        <el-button type="success" @click="ResultDisplay5">点击展示</el-button>
        <el-button style="margin-left: 2%" type="success" @click="traitScaleDownload">点击下载</el-button>
        <el-card class="introduction5" style="margin-left: auto;margin-right:auto;margin-top:3%;text-align: center" >
          <div >
            <el-table :data="tableData5" >
              <el-table-column v-for="(item, index) in headers5" :key="index" :label="item" :prop="item" align="center"  sortable>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios';
import submit from "@/components/Scale/submit.vue";

export default {
  name: "data2",
  components: {
    submit,
  },
  data(){
    return{
      matrix5:[],
      headers5: [], // 表头数据
      tableData5: [] // 表格数据
    }
  },
  methods:{
    ResultDisplay5() {
      if (!this.$store.getters.loggedIn) {
        alert('请先登录！');
        return;
      }
      axios.get(`${this.$API_BASE_URL}/traitScaleDisplay`,{
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'username': this.$store.getters.username, // 添加用户名
        }
      })
          .then(response => {
            console.log(response.data)
            // 处理提交成功的逻辑
            this.matrix5 = response.data;
            this.showSuccessMessage = true;
            // 获取表头数据
            this.headers5 = this.matrix5[0];
            // 转换矩阵数据为对象数组
            this.tableData5 = this.matrix5.slice(1).map(row =>{
              let rowData = {};
              row.forEach((cell,index)=>{
                rowData[this.headers5[index]]=cell;
              });
              return rowData;
            })
          }).catch(error => {
        // 处理提交失败的逻辑
      });
    },

    traitScaleDownload(){
      if (!this.$store.getters.loggedIn) {
        alert('请先登录！');
        return;
      }
      axios.get(`${this.$API_BASE_URL}/traitScaleDownload`,{
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'username': this.$store.getters.username, // 添加用户名
        }
      })
          .then(response => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'Result.txt');
            document.body.appendChild(link);
            link.click();
          })
    }
  }
}
</script>

<style scoped>


.title{
  text-align: center;
  padding-top: 6%;
  margin-left: 4%;
  margin-right: 4%;
  line-height: 180%;
  font-size: 24px;
  font-weight: bold;
  color: #67c23a
}
.back1{
  margin: 4%;
}

.el-table__header th {
  font-size: larger;
  color: #67c23a;
}

.introduction5{
  width: 94%;
  margin: 0.5%;
  background-color: #fbfbfb;
  border:1px solid #d9d9d9;
  border-radius: 10px;
}
</style>