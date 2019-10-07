<template>
    <div>
        <header class="myHeader">
            <div class="page-title">创客</div>
            <div class="login-img">defr</div>
        </header>
    </div>
</template>


<script>
export default {
    name:"MyHeader"
}
</script>
<style lang="less">
    .myHeader{
        display: flex;
        justify-content: space-between;
        .page-title{
            font-size: 26px;
            color: springgreen;
        }
    }
</style>