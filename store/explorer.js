const state = () => {
  return {
    currentDreamID: null
  };
};

const mutations = {
  setCurrentDreamID(state, dreamID) {
    state.currentDreamID = dreamID;
  }
};

const actions = {
  changeCurrentDream({commit}, dreamID) {
    commit('setCurrentDreamID', dreamID);
  }
}

export default {
  state,
  mutations,
  actions
};
