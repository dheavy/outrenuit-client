<template>
  <div class="columns is-clipped">
    <div class="column is-narrow triggers">
      <burger-btn />
    </div>
    <div class="column is-paddingless navigables">
      <dreams-list v-if="dreams" :dreams="dreams" :search-results="searchResults" />
    </div>
    <div class="column is-two-thirds core">
      <explorer-core v-if="dreams" :dream="currentDream" />
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
import BurgerBtn from '~/components/molecules/triggers/menu/BurgerBtn';
import DreamsList from '~/components/molecules/navigables/DreamsList';
import ExplorerCore from '~/components/molecules/core/ExplorerCore';

export default {
  name: 'DreamExplorer',

  components: {
    DreamsList,
    ExplorerCore,
    BurgerBtn
  },

  watch: {
    $route: {
      immediate: true,
      handler(route) {
        if (route.params && route.params.id) {
          this.changeCurrentDream(this.dreams[+route.params.id]);
        }
      }
    }
  },

  methods: {
    ...mapActions('explorer', ['changeCurrentDream'])
  },

  computed: {
    ...mapState({
      dreams: state => state.data.dreams,
      currentDream: state => state.explorer.currentDream,
      dreamSearchResults: state => state.explorer.searchResults
    }),
    searchResults() {
      return this.dreamSearchResults ? this.dreamSearchResults : this.dreams;
    }
  }
}
</script>
