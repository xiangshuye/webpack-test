<template>
    <MenuItem
        v-if="!menu.children || !menu.children.length"
        :to="`/${to}`"
        :key="menu.id"
        :name="menu.path"
    >
        <template>
            {{ menu.title }}
        </template>
    </MenuItem>
    <Submenu v-else :key="menu.id" :name="menu.path">
        <template v-slot:title>
            {{ menu.title }}
        </template>
        <RenderMenu v-for="m of menu.children" :menu="m" :path="`${path}/${m.path}`" :key="m.path"></RenderMenu>
    </Submenu>
</template>

<script>
export default {
    name: "RenderMenu",
    props: {
        menu:{
            type: Object,
            default(){
                return {}
            }
        },
        path:{
            type: String,
            default: ''
        }
    },
    computed:{
        to(v){
            return this.path.split("/").filter(item => item).join("/");
        }
    }
};
</script>
