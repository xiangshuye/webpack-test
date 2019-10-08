<template>
  <div class="layout">
    <Layout>
      <Header>
        <MyHeader></MyHeader>
      </Header>
      <Layout>
        <Sider hide-trigger  :style="{width: '234px', minWidth: '234px', maxWidth: '234px'}">
          <MySide></MySide>
        </Sider>
        <Layout :style="{padding: '0 10px'}">
          <Content :style="{padding: '10px', background: '#fff'}">
            <router-view></router-view>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import MyHeader from "./MyHeader";
import MySide from "./MySide";

export default {
  name: "MyLayout",
  components: {
    MyHeader,
    MySide
  }
};
</script>
<style lang="less" scoped>
</style>
