export default {
    namespaced: true,

    state: {
        count: 20,
    },
    mutations: {
        increment(state) {
            state.count++
        }
    },
    getters: {
        // someGetter(state, getters, rootState, rootGetters) {
        //
        // },
    },
    actions: {
        // someAction({dispatch, commit, getters, rootGetters}) {
        someAction({commit}) {
            commit('increment') // 触发模块B的increment
            // commit('increment', null, {root: true}) // 触发Vuex实例全局的increment
        },
        someAction2: {
            root: true,
            handler({commit}) {
                // commit('increment')
                commit('increment', null, {root: true})
            }
        },
    },
}
