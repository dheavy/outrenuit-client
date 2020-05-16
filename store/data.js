const state = () => {
  return {
    dreams: null
  }
};

const mutations = {
  init(state, dreams) {
    state.dreams = dreams;
  }
};

export default {
  state,
  mutations
};
