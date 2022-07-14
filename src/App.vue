<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    console.log(Promise.allSettled)
    Promise.allSettled([]).then(() => {});
  }
};
</script>

<style lang="less"></style>
