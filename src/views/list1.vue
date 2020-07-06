<template>
    <div>
        List1
        <span v-pre>{{hahahahha}}</span>
        <div v-cloak>
            {{ message }}
        </div>
    </div>
</template>

<script>
export default {
    name:"List1",
    data(){
        return {
            message: 123456
        }
    }
}
</script>
<style lang="less">

</style>
