<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: hasaiki
 * @Date: 2021-09-07 10:38:07
 * @LastEditors: hasaiki
 * @LastEditTime: 2021-09-07 13:09:23
-->
<template>
  <div class="page2">
    <p>page2</p>
    <p>{{test}}</p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      test: 'test2'
    }
  },
  mounted() {
    this.$monitor('num',val =>{
      this.test = val;
    });
  },
}
</script>

<style>
.page2{
  width: 500px;
  height: 500px;
  background: pink;
}
</style>