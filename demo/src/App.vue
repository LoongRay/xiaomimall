<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <router-view />
  </div>
</template>

<script>
import jsonp from "jsonp";
import axios from "axios"
export default {
  name: "App",
  data() {
    return {
      data: {},
    };
  },
  mounted() {
    //用jsonp代理服务器实现跨域
    let url = "/activity/servicetime";
    // jsonp(url,(err,res)=>{
    //   let result = res;
    //   this.data = result;
    //   console.log(result);
    // })

    axios.get(url)
      .then(res=>{console.log(res)})
      .catch(err => {console.log(err)});
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
