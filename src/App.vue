<template>
  <div id="app">
    <span>123</span>
    <!-- <img src="static/image/163-1.png" alt="ai" width="100"> -->
    <!-- <img src="@/asset/123.jpg" alt="" width="100"> -->
    <!-- <div id="editor"></div> -->
  </div>
</template>

<script>
// import Vditor from 'vditor'
export default {
    name: "App",
    data(){
        return {
            editor: '',
        }
    },
    mounted(){
        // this.vditor = new Vditor("editor",{
        //     height: 400
        // })
        // this.vditor.focus()
    },
    created(){
        
    }
}
</script>


<style lang="less">
#app {
  span {
    color: red;
  }
}
</style>

