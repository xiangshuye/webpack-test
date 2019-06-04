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
    },
    actions:{ // 异步
        async_count(ctx){ // 接收与 store 相同的 context
            setTimeout(() => {
                ctx.state.count++
            }, 1000);
        }
    }
}

export default user;