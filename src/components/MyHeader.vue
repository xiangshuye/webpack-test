<template>
    <header class="myHeader">
        <div class="page-title">创客</div>
        <div class="login-img" @click="logout">
            <img src="@/assets/photo.png" alt="photo" />&nbsp; defr
        </div>
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
        display: flex;
        align-items: center;
        padding: 0 10px;
        font-size: 16px;
        color: #fff;
        cursor: pointer;
        img {
            width: 28px;
            border-radius: 50%;
        }
        &:hover {
            background: rgba(255, 255, 255, 0.3);
        }
    }
}
</style>
