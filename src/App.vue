<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    Promise.allSettled([]).then(() => {});
  }
};
</script>

<style lang="less"></style>
