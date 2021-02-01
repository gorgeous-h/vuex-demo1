import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    todos: [
      {id: 1, text: 'study', done: true},
      {id: 2, text: 'housework', done: false},
    ],
    people: {
        name: '张三',
    },
    career: {
      id: '',
      name: '',
    },
    certificateType: {
      id: '',
      name: '',
    },
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    },
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    },
  },
  mutations: {
    increment(state) {
      state.count++
    },
    // incrementBy(state, n) {
    //   state.count += n
    // },
    incrementBy(state, payload) {
        state.count += payload.amount
    },
    getCareerById(state, payload) {
      state.career = payload
    },
    getCertificateType(state, payload) {
      state.certificateType = payload
    },
  },
  actions: {
    // increment(context) {
    //   context.commit('increment')
    // },
    increment({commit}) {
      commit('increment')
    },
    incrementAsync({ commit }, payload) {
      setTimeout(() => {
        commit('incrementBy', payload)
      }, 1000)
    },
    actionA ({commit}) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('increment')
          resolve()
        }, 1000)
      })
    },
    actionB({dispatch, commit}) {
      return dispatch('actionA').then(() => {
        commit('incrementBy', {amount: 10})
      })
    },
    async actionC({commit}, payload) {
      let career = await axios.get(`http://192.168.3.117:8001/insurance/career/getCareerById/${payload.id}`);
      commit('getCareerById', career.data.data.career)
    },
    async actionD({dispatch, commit}, payload) {
      await dispatch('actionC', {id: 1})
      let certificateType = await axios.get(`http://192.168.3.117:8001/insurance/certificate-type/getCertificateTypeById/${payload.id}`);
      commit('getCertificateType', certificateType.data.data.certificateType)
    },
  },
  modules: {
  }
})
