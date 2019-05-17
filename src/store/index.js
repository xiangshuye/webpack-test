import Vue from 'vue';
import Vuex from 'vuex';

import user from './user';

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        count: 1,
        page: 10
    },
    mutations: { // 同步提交
        increment(state) {
            state.count++
        },
        addPage(state){
            state.page++
        }
    },
    modules: {
        user
    }
})