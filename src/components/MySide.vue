<template>
    <div>
        <Menu
            accordion
            theme="dark"
            :open-names="openMenu"
            :active-name="activeName"
            width="auto"
            ref="menu"
        >
        <RenderMenu v-for="m of menu" :menu="m" :path="`${m.path}`" :key="m.path"></RenderMenu>
        </Menu>
    </div>
</template>
<script>
import { getMenu } from "@/api/menu";
import RenderMenu from './RenderMenu';

export default {
    name: "MySide",
    components:{
        RenderMenu
    },
    data() {
        return {
            menu: [],
            openMenu: [],
            activeName: ""
        };
    },
    methods: {
        search() {
            getMenu().then(data => {
                console.log(data);
                if (data.code === 200) {
                    this.menu = Object.freeze(data.data);
                    this.setOpenMenu();
                }
            });
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
        '$route': function(to, from) {
            this.setOpenMenu();
        }
    },
    created() {
        this.search();
    }
};
</script>

<style lang="less"></style>
