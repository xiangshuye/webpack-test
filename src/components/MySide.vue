<template>
  <!-- <div> -->
  <Menu
    accordion
    theme="dark"
    :open-names="openMenu"
    :active-name="activeName"
    @on-select="selectMenu"
    width="auto"
    ref="menu"
  >
    <RenderMenu
      v-for="menu of menus"
      :menu="menu"
      :path="`${menu.path}`"
      :key="menu.path"
    ></RenderMenu>
  </Menu>
  <!-- </div> -->
</template>
<script>
import { getMenu } from "@/api/menu";
import RenderMenu from "./RenderMenu";
import { mapState } from "vuex";

export default {
  name: "MySide",
  components: {
    RenderMenu
  },
  computed: {
    ...mapState({
      menus: state => state.permission.menu
    })
  },
  data() {
    return {
      // menu: [],
      openMenu: [],
      activeName: ""
    };
  },
  methods: {
    search() {
      this.$store.dispatch("getMenu").then(() => {
        this.setOpenMenu();
      });
      // getMenu().then(data => {
      //     if (data.code === 200) {
      //         // this.menu = Object.freeze(data.data);
      //         this.$store.commit("setMenu", {
      //             menu: data.data,
      //             perm: this.$store.state.permission.perm
      //         });
      //         this.setOpenMenu();
      //     }
      // });
    },
    selectMenu(name) {
      // console.log(name);
      // this.$router.push({path: `${name}`});
    },
    setOpenMenu() {
      let r = this.$route.path.split("/").filter(item => item);
      this.openMenu = Object.freeze(r);
      this.activeName = r[r.length - 1];
      this.$nextTick(() => {
        this.$refs.menu.updateOpened();
        this.$refs.menu.updateActiveName();
      });
    }
  },
  watch: {
    $route: function(to, from) {
      this.setOpenMenu();
    }
  },
  created() {
    this.search();
  }
};
</script>

<style lang="less"></style>
