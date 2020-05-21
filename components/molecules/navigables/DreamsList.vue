<template>
  <section>
    <nav class="dreams-list--search">
      <div class="control">
        <search-box :on-input="onSearchInput" />
      </div>
    </nav>
    <ul class="dreams-list" v-if="dreams" @scroll="scrollHandler" ref="list">
      <li
        v-for="(dream, i) in displayedDreams"
        :class="{'is-selected': isItemSelected(dream)}"
        :key="i"
      >
        <navigables-list-item :label="dream.text" :id="dream.uid" />
      </li>
    </ul>
  </section>
</template>

<script>
import {mapActions} from 'vuex';
import NavigablesListItem from '~/components/atoms/navigables/NavigablesListItem';
import SearchBox from '~/components/atoms/navigables/SearchBox';

export default {
  name: 'DreamsList',

  components: {
    NavigablesListItem,
    SearchBox
  },

  props: {
    dreams: {
      type: Array,
      default: () => []
    },
    searchResults: {
      type: Array,
      default: () => []
    },
    onScroll: {
      type: Function,
      default: () => {}
    },
    currentDreamUid: {
      type: String,
      default: ''
    }
  },

  computed: {
    displayedDreams() {
      return this.searchResults.length > 0 ? this.searchResults : this.dreams;
    }
  },

  methods: {
    ...mapActions('explorer', ['searchDreams']),

    onSearchInput(e) {
      const pattern = e.target.value;
      this.searchDreams({list: this.dreams, pattern});
    },

    scrollHandler(e) {
      if (this.$refs.list) {
        this.onScroll(this.$refs.list.scrollTop);
      }
    },

    setScrollPosition(amount) {
      if (this.$refs.list) {
        this.$refs.list.scrollTop = amount;
      }
    },

    isItemSelected(dream) {
      return dream.uid === this.currentDreamUid;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/_mixins';
@import '~/assets/_variables';

@include navigables-list();

.dreams-list--search {
  height: $searchbox-height;
}

.dreams-list {
  height: calc(100vh - #{$searchbox-height});
  overflow: auto;
}
</style>
