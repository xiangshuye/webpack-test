<template>
    <header class="myHeader">
        <div class="page-title">创客</div>
        <div class="login-img" @click="logout">defr</div>
    </header>
</template>

<script>
export default {
    name: "MyHeader",
    methods: {
        logout() {
            this.$store.commit("clearRouter");
            // this.$router.push("/login");
            window.location.replace("/login");
        }
    }
};
</script>
<style lang="less">
.myHeader {
    display: flex;
    justify-content: space-between;
    .page-title {
        font-size: 26px;
        color: springgreen;
    }
    .login-img {
        padding: 0 10px;
        cursor: pointer;
        &:hover {
            background: #eee;
        }
    }
}
</style>
