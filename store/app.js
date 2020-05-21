const state = () => {
  return {
    navigablesScroll: 0
  };
};

const mutations = {
  setNavigablesScroll(state, amount) {
    state.navigablesScroll = amount;
  }
};

const actions = {
  setNavigablesScroll({commit}, amount) {
    commit('setNavigablesScroll', amount);
  }
}

export default {
  state,
  mutations,
  actions
};
