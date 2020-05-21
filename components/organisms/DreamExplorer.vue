<template>
  <div class="columns is-clipped">
    <div class="column is-narrow triggers">
      <burger-btn />
    </div>
    <div class="column is-paddingless navigables" ref="navigables">
      <dreams-list
        v-if="dreams"
        :dreams="dreams"
        :search-results="searchResults"
        :on-scroll="onScroll"
        :current-dream-uid="currentDreamUID"
        ref="list"
      />
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
          this.updateDreamListScrollPosition();
        }
      }
    }
  },

  methods: {
    ...mapActions('app', ['setNavigablesScroll']),
    ...mapActions('explorer', ['changeCurrentDream']),

    onScroll(amount) {
      this.setNavigablesScroll(amount);
    },

    async updateDreamListScrollPosition() {
      await this.$nextTick();
      if (this.$refs && this.$refs.list) {
        this.$refs.list.setScrollPosition(this.dreamsListScrollTop);
      }
    }
  },

  computed: {
    ...mapState({
      dreams: state => state.data.dreams,
      currentDream: state => state.explorer.currentDream,
      dreamSearchResults: state => state.explorer.searchResults,
      dreamsListScrollTop: state => state.app.navigablesScroll
    }),

    searchResults() {
      return this.dreamSearchResults ? this.dreamSearchResults : this.dreams;
    },

    currentDreamUID() {
      return this.currentDream ? this.currentDream.uid : '';
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/_mixins';

.navigables {
  @include monospace();
  @include border();
  font-size: 0.75rem;
  overflow: hidden;
}
</style>
