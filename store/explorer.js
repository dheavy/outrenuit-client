const state = () => {
  return {
    currentDream: null,

  };
};

const mutations = {
  setCurrentDream(state, dream) {
    state.currentDream = dream;
  }
};

const actions = {
  changeCurrentDream({commit}, dream) {
    commit('setCurrentDream', dream);
  }
}

export default {
  state,
  mutations,
  actions
};
