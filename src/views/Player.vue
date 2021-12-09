<template>
  <div id="player"></div>
</template>
<script>
import Player from "xgplayer/dist/simple_player";
import { volume, playbackRate } from "xgplayer/dist/controls";

export default {
  name: "Player",
  data() {
    return {};
  },
  methods: {
    init() {
      let player = new Player({
        id: "player",
        width: "100%",
        height: "500px",
        url: "http://localhost:9101/public/images/123.mp4",
        controlPlugins: [volume, playbackRate],
        playbackRate: [0.5, 0.75, 1, 1.5, 2] //传入倍速可选数组
      });
      console.log(player);
    }
  },
  mounted() {
    this.init();
  }
};
</script>
<style lang="less">
#player {
  width: 100%;
  height: 500px;
}
</style>
