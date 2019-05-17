<template>
  <div>
    <span>123</span>
    <span>
      {{count}} {{page}}
    </span>
    <button type="button" @click='add'>提交</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: "UserList",
    data(){
        return {
            // count: this.$store.state.count,
        }
    },
    computed:{
      count(){
        return  this.$store.state.user.count
      },
      ...mapState([
        'page'
      ])
    },
    methods:{
      add(){
        this.$store.commit('increments')
      }
    },
    mounted(){
    },
    created(){

    }
}
</script>

<style lang="less">
  span {
    color: red;
  }
</style>

