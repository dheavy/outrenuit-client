const state = () => {
  return {
    dreams: null
  }
};

const mutations = {
  init(state, dreams) {
    dreams.forEach((dream, i) => {
      dream.uid = i;
    });
    state.dreams = dreams;
  }
};

export default {
  state,
  mutations
};
