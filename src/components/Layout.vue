<template>
  <div class="layout">
    <Layout>
      <Header>
        <MyHeader></MyHeader>
      </Header>
      <Layout>
        <Sider hide-trigger>
          <MySide></MySide>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <Breadcrumb :style="{margin: '24px 0'}">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem>Layout</BreadcrumbItem>
          </Breadcrumb>
          <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
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
