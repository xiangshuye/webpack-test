<template>
    <div>
        <Button @click="getSelect">get</Button>
        <Tree ref="tree" :data="data2" show-checkbox></Tree>
    </div>
</template>
<script>
import { getMenu } from "@/api/menu";
export default {
    data() {
        return {
            data2: Object.freeze([])
        };
    },
    methods: {
        getSelect(){
            const arr = this.$refs.tree.getCheckedNodes();
            console.log(arr.map(el => el.id))
            // console.log(this.$refs.tree.getCheckedNodes())
        },
        getmenu() {
            getMenu().then(data => {
                if (data.code === 200) {
                    function ft(chl) {
                        return chl.map(el => {
                            return {
                                ...el,
                                expand: true,
                                children: ft(el.children || [])
                            };
                        });
                    }
                    this.data2 = Object.freeze(ft(data.data));

                }
            });
        }
    },
    mounted() {
        this.getmenu();
    }
};
</script>
