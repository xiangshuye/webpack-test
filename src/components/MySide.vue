<template>
    <div>
        <Menu accordion theme="dark" width="auto">
            <Submenu v-for="item of menu" :key="item.id" :name="item.path">
                <template v-slot:title>
                    {{ item.title }}
                </template>
                <MenuItem
                    v-for="ls of item.children"
                    :to="`/${item.path}/${ls.path}`"
                    :key="ls.id"
                    :name="ls.path"
                    >{{ ls.title }}</MenuItem
                >
            </Submenu>
        </Menu>
    </div>
</template>
<script>
import { getMenu } from "@/api/menu";

export default {
    name: "MySide",
    data() {
        return {
            menu: []
        };
    },
    methods: {
        search() {
            getMenu().then(data => {
                console.log(data);
                if (data.code === 200) {
                    this.menu = Object.freeze(data.data);
                }
            });
        }
    },
    created() {
        console.log(90);
        this.search();
    }
};
</script>

<style lang="less"></style>
