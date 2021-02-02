export default {
    namespaced: true,

    state: {
        count: 10,
    },
    mutations: {
        increment(state) {
            state.count++
        }
    },
    getters: {
        // doubleCount(state) {
        //     return state.count * 2
        // },
        sumWithRootCount (state, getters, rootState) {
            return state.count + rootState.count
        },
    },
    actions: {
        incrementIfOddOnRootSum ({ state, commit, rootState }) {
            if ((state.count + rootState.count) % 2 === 1) {
                commit('increment')
                // commit('increment', null, {root: true})
            }
        }
    },
}
