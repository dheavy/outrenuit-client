import {fuzzy} from '~/utils/search';

const state = () => {
  return {
    currentDream: null,
    searchResults: []
  };
};

const mutations = {
  setCurrentDream(state, dream) {
    state.currentDream = dream;
  },
  search(state, {list, pattern}) {
    state.searchResults = fuzzy(list, pattern).map(res => res.item);
  }
};

const actions = {
  changeCurrentDream({commit}, dream) {
    commit('setCurrentDream', dream);
  },
  searchDreams({commit}, {list, pattern}) {
    commit('search', {list, pattern});
  }
}

export default {
  state,
  mutations,
  actions
};
