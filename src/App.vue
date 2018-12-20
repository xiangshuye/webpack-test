<template>
    <div id="app">
        <span>123</span>
        <img src="static/image/163-1.png" alt="ai" width="100">
        <ChartVue :width='600' :height='400'></ChartVue>    
    </div>
</template>

<script>
import ChartVue from '@/components/ChartVue' 
export default {
    name: "App",
    components:{
        ChartVue
    },
    created(){
        
    }
}
</script>


<style lang="less" scoped>
    #app{
        span{
            color: red;
        }
    }
</style>

