let user = {
    state: {
        count: 1,
        page: 10
    },
    mutations: { // 同步提交
        increments(state) {
            state.count++
        },
        addPages(state) {
            state.page++
        }
    }
}

export default user;