<template>
  <header class="myHeader">
    <div class="page-title">创客</div>
    <div class="login-img" @click="logout">
      <img src="@/assets/photo.png" alt="photo" />&nbsp; {{ username }}
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "MyHeader",
  methods: {
    logout() {
      this.$store.commit("clearRouter");
      this.$router.replace("/login");
      window.location.reload();
    }
  },
  computed: {
    username() {
      return this.$store.state.userinfo.name;
    }
  }
};
</script>
<style lang="less">
.myHeader {
  display: flex;
  justify-content: space-between;
  .page-title {
    font-size: 20px;
    color: springgreen;
    font-family: cursive;
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
