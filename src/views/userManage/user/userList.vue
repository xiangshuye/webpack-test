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
      ...mapState({
        'page': state => state.user.page,
      })
    },
    methods:{
      add(){
        this.$store.commit('increments')
        this.$store.dispatch('async_count')
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

