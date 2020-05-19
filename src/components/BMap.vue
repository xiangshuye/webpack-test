<template>
    <div id="container"></div>
</template>

<script>
import {BMapLoader} from "@bmap/bmap-jsapi-loader";
import {BMAMKEY} from '@/config/keyCode'
// eIGwkbkGLzFGy3bVduSUXlBcPMQEM5fi
let map = "";
export default {
    data() {
        return {};
    },
    beforeDestroy() {
        if (map) {
            map.destroy();
        }
    },
    mounted() {
        BMapLoader({
            key: BMAMKEY,
            version: "3.0"
        })
            .then(BMap => {
                var map = new BMap.Map("container"); // 创建Map实例
                var point = new BMap.Point(116.404, 39.915); // 创建点坐标
                map.centerAndZoom(point, 15);
                map.enableScrollWheelZoom();
            })
            .catch(e => {
                console.error(e);
            });
    }
};
</script>

<style scoped>
#container {
    width: 100%;
    height: 500px;
}
</style>
