<template>
  <div>
    <h1>哈哈，我是组件Test！</h1><br>
    <h2>接收到父组件msg是：{{msg}}</h2>
  </div>
</template>

<script>
    export default {
      name: "Test",
      props:{
        msg: String
      },
      data(){
        return{
        }
      }
    }
</script>

<style scoped>

</style>
