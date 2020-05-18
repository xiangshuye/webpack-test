<template>
    <MenuItem
        v-if="!menu.children || !menu.children.length"
        :to="path"
        :key="menu.id"
        :name="menu.name"
    >
        <template>
            {{ menu.title }}
        </template>
    </MenuItem>
    <Submenu v-else :key="menu.id" :name="menu.name">
        <template v-slot:title>
            {{ menu.title }}
        </template>
        <RenderMenu
            v-for="m of menu.children"
            :menu="m"
            :path="m.path"
            :key="m.path"
        ></RenderMenu>
    </Submenu>
</template>

<script>
export default {
    name: "RenderMenu",
    props: {
        menu: {
            type: Object,
            default() {
                return {};
            }
        },
        path: {
            type: String,
            default: ""
        }
    }
};
</script>
