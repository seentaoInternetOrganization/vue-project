import text from '../../api/text'
import * as types from '../mutation-types'

// initial state
const state = {
  text: 'Welcome to Your Vue.js App'
}

// getters
const getters = {
  text: state => state.text
}

// actions
const actions = {
  getText ({ commit, state }) {
    text.getText(
      {},
      (response) => commit(types.GET_SUCCESS, { response }),
      () => commit(types.GET_FAILURE)
    )
  }
}

// mutations
const mutations = {
  [types.GET_SUCCESS] (state, { response }) {
    state.text = response.data.text
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
