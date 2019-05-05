<template>
  <div>
    <span>123</span>
    <span>
      {{count}}
    </span>
    <button type="button" @click='add'>提交</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: "App",
    data(){
        return {
            // count: this.$store.state.count,
        }
    },
    computed:{
      count(){
        return  this.$store.state.count
      },
      ...mapState([
        'page'
      ])
    },
    methods:{
      add(){
        this.$store.commit('increment')
      }
    },
    mounted(){
    },
    created(){
        console.dir(this.$store.state.count)
    }
}
</script>

<style lang="less">
  span {
    color: red;
  }
</style>

