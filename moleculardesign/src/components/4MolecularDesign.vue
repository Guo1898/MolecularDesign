<template>
  <div>

    <div>
      <el-card  class="introduction4">
        <div style="width: 91%;margin: auto;text-align: center">
          <el-table :data="currentPageData"  >
            <el-table-column prop="gene" label="Gene" width="95px" align="center" ></el-table-column>
            <el-table-column prop="trait" label="Trait" width="120px" align="center"></el-table-column>
            <el-table-column prop="chr" label="Chr" width="80px" align="center"></el-table-column>
            <el-table-column prop="position" label="Position" width="100px" align="center"></el-table-column>
            <el-table-column prop="snpid" label="SNP_ID" width="150px" align="center"></el-table-column>
            <el-table-column prop="allele" label="Allele" width="80px" align="center"></el-table-column>
            <el-table-column prop="reference" label="Reference" width="935px"></el-table-column>
          </el-table>
          <el-pagination
              style="margin-top: 20px"
              :page-size="pageSize"
              :total="snps.length"
              layout="prev, pager, next"
              @current-change="handleCurrentChange"
          ></el-pagination>
        </div>
      </el-card>
    </div>
    <div style="display: flex;align-items: center;margin-top: 3%;justify-content: center" >
      <el-card class="box-card4" >
        <p class="title4" >上传文件</p>
        <el-divider></el-divider>
<!--        上传文件-->


        <div >
          <p style="font-size: 14px;color: #757474">格式要求为vcf文件</p>
          <el-input v-model="AbsolutePath" placeholder="请输入文件绝对路径: /disk191/" style="border-radius: 20px;" type="text"></el-input>
          <el-button type="primary" @click="submitValue" round style="margin-top: 15%">&nbsp;&nbsp;&nbsp;提    交&nbsp;&nbsp;&nbsp;</el-button>
          <div v-if="showMessagePath" style="margin-top: 5%">{{ responseMessage }}</div>
        </div>

        <div style="margin-top: 20%">
          <p style="font-size: 14px;color: #757474">要求上传格式为.vcf或.vcf.gz</p>
          <input type="file" @change="selectFile" style="width: 80%;font-size: 16px;background-color: #e7e7e7">
          <el-button type="primary" @click="submitFile" round style="margin-top: 15%">&nbsp;&nbsp;&nbsp;上    传&nbsp;&nbsp;&nbsp;</el-button>
          <div v-if="showMessageValue">上传成功</div>
        </div>



      </el-card>

      <el-card class="box-card4" >
          <p class="title4">PLINK过滤</p>
          <el-divider></el-divider>
        <p style="font-size: 14px;color: #757474">请输入MAF,默认为0.01</p>
        <el-input v-model="mafValue" placeholder="请输入MAF（小数）" style="border-radius: 20px;"></el-input>
        <p style="font-size: 14px;color: #757474">请输入GENO,默认为0.05</p>
        <el-input v-model="genoValue" placeholder="请输入GENO（小数）" style="border-radius: 20px;"></el-input>
        <p style="font-size: 14px;color: #757474">请输入HWE,默认为0.000001</p>
        <el-input v-model="hweValue" placeholder="请输入HWE（小数）" style="border-radius: 20px;"></el-input>
          <el-button type="primary" @click="plinkFilter" round style="margin-top: 20%" :loading="loadingPlink">&nbsp;&nbsp;&nbsp;过    滤&nbsp;&nbsp;&nbsp;</el-button>
          <div v-if="showMessagePlink" style="margin-top: 10%"><h4 style="color: #409EFF">执行成功!</h4></div>
      </el-card>

      <el-card class="box-card4" >
        <p class="title4">QTL注释</p>
        <el-divider></el-divider>
        <p style="font-size: 14px;color: #757474">请输入interval,默认为0</p>
        <el-input v-model="interval" placeholder="请输入interval（整数值）" style="border-radius: 20px;"></el-input>
        <el-button type="primary" @click="qtlComments" round style="margin-top: 20%" :loading="loadingQtl">&nbsp;&nbsp;&nbsp;注    释&nbsp;&nbsp;&nbsp;</el-button>
        <div v-if="showMessageQtl" style="margin-top: 10%"><h4 style="color: #409EFF">执行成功!</h4></div>
      </el-card>

      <el-card class="box-card4" >
        <p class="title4">基因比对</p>
        <el-divider></el-divider>
        <el-button type="primary" @click="GeneAlignment" round style="margin-top: 20%" :loading="loadingAlignment">&nbsp;&nbsp;&nbsp;比    对&nbsp;&nbsp;&nbsp;</el-button>
        <div v-if="showMessageAlignment" style="margin-top: 10%"><h4 style="color: #409EFF">执行成功!</h4></div>
      </el-card>

      <el-card class="box-card4" >
        <p class="title4">一因多效检验</p>
        <el-divider></el-divider>
        <el-button type="primary" @click="checkout" round style="margin-top: 20%" :loading="loadingCheckout">&nbsp;&nbsp;&nbsp;添加     检验&nbsp;&nbsp;&nbsp;</el-button>

        <div v-if="showMessageCheckout" style="margin-top: 10%"><h4 style="color: #409EFF">检验成功!</h4></div>
      </el-card>

      <el-card class="box-card4" >
        <p class="title4" >展示下载理想个体</p>
        <el-divider></el-divider>
        <div style="display: flex;flex-direction: column">
          <el-button type="primary" @click="idealIndividual" round style="margin-top: 20%;width: 110px;margin-left: auto;margin-right: auto" :loading="loadingIdeal" >&nbsp;&nbsp;&nbsp;生    成&nbsp;&nbsp;&nbsp;</el-button>
          <div v-if="showMessageIdeal" style="margin-top: 1%"><h4 style="color: #409EFF">生成成功!</h4></div>
          <el-button type="primary" @click="ResultDisplay" round style="margin-top: 15%;width: 110px;margin-left: auto;margin-right: auto">&nbsp;&nbsp;&nbsp;展    示&nbsp;&nbsp;&nbsp;</el-button>
          <el-button type="primary" @click="ResultDown" round style="margin-top: 15%;width: 110px;margin-left: auto;margin-right: auto">&nbsp;&nbsp;&nbsp;下    载&nbsp;&nbsp;&nbsp;</el-button>

        </div>
    </el-card>
    </div>

    <el-card class="introduction4" style="margin-top: 3%;text-align: center" >
      <el-table :data="tableData" @click="ResultDisplay">
        <el-table-column v-for="(item, index) in headers" :key="index" :label="item" :prop="item" align="center" width="135px" >
        </el-table-column>
      </el-table>
    </el-card>



  </div>
</template>


<script>

import axios from "axios";


export default {
  components: {

  },
  data() {
    return {
      matrix:[],
      headers: [], // 表头数据
      tableData: [], // 表格数据
      snps:[],
      responseMessage: '',
      mafValue:"0.01",
      genoValue:"0.05",
      hweValue:"0.000001",
      interval:"0",
      showSuccessMessage: false,
      selectedFile: null,
      AbsolutePath:"",
      loadingPlink: false,
      showMessagePlink: false,

      loadingQtl: false,
      showMessageQtl:false,

      loadingAlignment:false,
      showMessageAlignment:false,

      loadingCheckout:false,
      showMessageCheckout:false,

      loadingIdeal:false,
      showMessageIdeal:false,

      showMessageValue:false,
      showMessagePath:false,
      loading: false,

      pageSize: 10, // 每页显示的数据条数
      currentPage: 1, // 当前页码
    }
  },
  mounted(){

    axios.get(`${this.$API_BASE_URL}/Snps`).then(response => {
      // 将获取到的数据存储在snpData中
      this.snps = response.data;
      console.log(response.data)
    }).catch(error => {
      console.error(error);
    });
  },
  computed: {
    currentPageData() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.snps.slice(startIndex, endIndex);
    },
  },

  methods: {

    handleCurrentChange(currentPage) {
      this.currentPage = currentPage;
    },
    selectFile(event) {
      this.selectedFile = event.target.files[0];
    },

    submitFile() {
      if (!this.$store.getters.loggedIn) {
        alert('请先登录！');
        return;
      }
      if (!this.selectedFile) return;
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      axios.post(`${this.$API_BASE_URL}/uploadFile`,formData,{
        headers: {
          'Content-Type': 'multipart/form-data',
          'username': this.$store.getters.username, // 添加用户名
        }}).then(response => {
        // 处理提交成功的逻辑
        if (response.data==='success'){
          this.showMessageValue = true;
        }}).catch(error => {
            // 处理提交失败的逻辑
      });
    },

    submitValue(){
      if (!this.$store.getters.loggedIn) {
        alert('请先登录！');
        return;
      }
      axios.post(`${this.$API_BASE_URL}/submitValue`,{
        AbsolutePath:this.AbsolutePath
      },{
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
              'username': this.$store.getters.username, // 添加用户名
        }}).then(response => {
        // 处理提交成功的逻辑
        if (response.data){
          this.showMessagePath = true;
          this.responseMessage = response.data;
        }
      }).catch(error => {
            // 处理提交失败的逻辑
      }).finally(() => {
        this.loading = false;
      });
    },

    //plink过滤
    plinkFilter(){
      if (!this.$store.getters.loggedIn) {
        alert('请先登录！');
        return;
      }
      this.loadingPlink = true;
      axios.post(`${this.$API_BASE_URL}/plinkFilter`,{
        even:"启动plink转换",
        mafValue:this.mafValue,
        genoValue:this.genoValue,
        hweValue:this.hweValue,
      },{
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'username': this.$store.getters.username, // 添加用户名
        }}).then(response => {
        // 处理提交成功的逻辑
        if (response.data==='success'){
          this.showMessagePlink = true;
        }
      }).catch(error => {
        // 处理提交失败的逻辑
      }).finally(() => {
        this.loadingPlink = false;
      });
    },

    //QTL注释
    qtlComments() {
      if (!this.$store.getters.loggedIn) {
        alert('请先登录！');
        return;
      }
      this.loadingQtl = true;
      axios.post(`${this.$API_BASE_URL}/qtlComments`, {
        events:"启动qlt注释",
        interval:this.interval,
      },{
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'username': this.$store.getters.username, // 添加用户名
        }
      }).then(response => {
        // 处理提交成功的逻辑
        if (response.data==='success'){
          this.showMessageQtl = true;
        }
      }).catch(error => {
            // 处理提交失败的逻辑
        console.log(error);
      }).finally(() => {
        this.loadingQtl = false;
      });
    },

    //基因比对
    GeneAlignment() {
      if (!this.$store.getters.loggedIn) {
        alert('请先登录！');
        return;
      }
      this.loadingAlignment = true;
      axios.post(`${this.$API_BASE_URL}/GeneAlignment`, {
        events:"基因比对启动..."
      },{
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'username': this.$store.getters.username, // 添加用户名
        }}).then(response => {
        // 处理提交成功的逻辑
        if (response.data==='success'){
          this.showMessageAlignment = true;
        }
      }).catch(error => {
            // 处理提交失败的逻辑
      }).finally(() => {
        this.loadingAlignment = false;
      });
    },

    //生成理想个体
    idealIndividual() {
      if (!this.$store.getters.loggedIn) {
        alert('请先登录！');
        return;
      }
      this.loadingIdeal = true;
      axios.post(`${this.$API_BASE_URL}/makeIdeaIndividual`, {
        events:"生成理想个体启动..."
      },{
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'username': this.$store.getters.username, // 添加用户名
        }
      }).then(response => {
        // 处理提交成功的逻辑
        if (response.data==='success'){
          this.showMessageIdeal = true;
        }
      }).catch(error => {
            // 处理提交失败的逻辑
      }).finally(() => {
        this.loadingIdeal = false;
      });
    },

    //去除一因多效
    checkout() {
      if (!this.$store.getters.loggedIn) {
        alert('请先登录！');
        return;
      }
      this.loadingCheckout = true;
      axios.post(`${this.$API_BASE_URL}/MultipleEffects`, {
        events:"启动"
      },{
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'username': this.$store.getters.username, // 添加用户名
        }
      }).then(response => {
        // 处理提交成功的逻辑
        if (response.data==='success'){
          this.showMessageCheckout = true;
        }
      }).catch(error => {
            // 处理提交失败的逻辑
      }).finally(() => {
        this.loadingCheckout = false;
      });
    },
    ResultDisplay() {
      if (!this.$store.getters.loggedIn) {
        alert('请先登录！');
        return;
      }
      axios.get(`${this.$API_BASE_URL}/ResultDisplay`, {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'username': this.$store.getters.username, // 添加用户名
        }
      }).then(response => {
            console.log(response.data)
            // 处理提交成功的逻辑
            this.matrix = response.data;
            this.showSuccessMessage = true;
            // 获取表头数据
            this.headers = this.matrix[0];
            // 转换矩阵数据为对象数组
            this.tableData = this.matrix.slice(1).map(row =>{
              let rowData = {};
              row.forEach((cell,index)=>{
                rowData[this.headers[index]]=cell;
              });
              return rowData;
            });
          })
          .catch(error => {
            // 处理提交失败的逻辑
          });
    },
    ResultDown(){
      if (!this.$store.getters.loggedIn) {
        alert('请先登录！');
        return;
      }
      axios({
        url: `${this.$API_BASE_URL}/IdealIndividualDownload`,
        method: 'GET',
        responseType: 'blob',
        params: { filename: 'Result.zip' },
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'username': this.$store.getters.username, // 添加用户名
        }
      })
          .then(response => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'Result.zip');
            document.body.appendChild(link);
            link.click();
          })
          .catch(error => {
            // 处理请求错误的逻辑
          });
    },

    tableRowClassName({row, rowIndex}) {
      if (rowIndex === 1) {
        return 'warning-row';
      } else if (rowIndex === 3) {
        return 'success-row';
      }
      return '';
    },
  },
}
</script>

<style >

.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}

.el-table__header th {
  font-size: larger;
  color: #409EFF;
}
.box-card4{
  width: 14.5%;
  height: 550px;
  margin: 0.5%;
  background-color: #fbfbfb;
  border:1px solid #d9d9d9;
  border-radius: 10px;
}
.el-card.is-always-shadow, .el-card.is-hover-shadow:focus, .el-card.is-hover-shadow:hover {
  FONT-WEIGHT: 500;
  box-shadow: 0 50px 50px 0 rgb(0 0 0 / 10%);
}
.title4{
  text-align: center;
  font-size: 22px;
  padding-top: 6%;
  margin-left: 4%;
  margin-right: 4%;
  line-height: 180%;
  font-weight: bold;
  color:#409EFF
}
.introduction4{
  width: 93%;
  margin-top: 5%;
  background-color: #fbfbfb;
  border:1px solid #d9d9d9;
  border-radius: 10px;
  margin-right: auto;
  margin-left: auto;
}
.el-button+.el-button, .el-checkbox.is-bordered+.el-checkbox.is-bordered {
  margin-left: 0px;
}

</style>