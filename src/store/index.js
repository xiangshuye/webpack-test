import Vuex from 'vuex';

export default new Vuex.Store({
    state: {
        count: 1
    },
    mutation: { // 同步提交
        increase(state) {
            state.count++
        }
    }
})