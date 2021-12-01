<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: hasaiki
 * @Date: 2021-09-07 10:38:00
 * @LastEditors: hasaiki
 * @LastEditTime: 2021-09-07 12:54:50
-->
<template>
  <div class="page1">
    <p>page1</p>
    <p>{{getNum}}</p>
    <button @click="clicks">点击</button>
  </div>
</template>
<script>
export default {
  data(){
    return {
      value: ''
    }
  },
  computed:{
    getNum(){
      return localStorage.getItem('num')
    }
  },
   mounted() {
    this.$monitor( val =>{
      this.value = val;
    });
  },
  methods:{
    clicks(){
      localStorage.setItem('num', +localStorage.getItem('num') + 1)
    }
  }
}
</script>
<style>
.page1{
  width: 500px;
  height: 500px;
  background: yellowgreen;
}
</style>