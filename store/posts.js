export const state = () => ({
  postList: false
})

export const getters = {
  postList: state => state.postList
}

export const actions = {
  setPostList ({ commit }, postList) {
    commit('SET_POST_LIST', postList)
  }
}

export const mutations = {
  SET_POST_LIST (state, postList) {
    state.postList = postList
  }
}
