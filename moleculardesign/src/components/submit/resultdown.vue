<template>
  <div>
    <el-button @click="fetchData">{{ buttonLabel }}</el-button>
    <div v-if="showDiv">{{ responseData }}</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "resultdown",
  data() {
    return {
      buttonLabel: 'Click Me',
      showDiv: false,
      responseData: ''
    }
  },
  methods: {
    fetchData() {
      axios.get('https://console-mock.apipost.cn/mock/ba7e3caf-2fd9-480f-a54f-61a54889a51e/')
          .then(response => {
            this.responseData = response.data
            this.showDiv = true
          })
          .catch(error => {
            console.log(error)
          })
    }
  }
}
</script>

<style scoped>

</style>