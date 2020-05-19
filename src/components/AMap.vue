<template>
    <div class="mapview" id="mapview"></div>
</template>

<script>
import AMapLoader from "@amap/amap-jsapi-loader";
import {AMAPKEY} from '@/config/keyCode'
// 425d4ea45f9e4df0b51323634035c434
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
        AMapLoader.load({
            key: AMAPKEY, //必填
            version: "2.0",
            plugins: ["AMap.Scale"]
        })
            .then(AMap => {
                map = new AMap.Map("mapview", {
                    center: [116.397428, 39.90923],
                    zoom: 13
                });
                map.addControl(new AMap.Scale());
            })
            .catch(e => {
                console.error(e);
            });
    }
};
</script>

<style scoped>
.mapview {
    width: 100%;
    height: 500px;
}
</style>
