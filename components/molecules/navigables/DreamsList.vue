<template>
  <section>
    <nav class="dreams-list--search">
      <div class="control">
        <input
          class="input"
          type="search"
          placeholder="Recherche"
          aria-label="Rechercher dans le corpus de rêves"
          @input="onSearchInput"
        />
      </div>
    </nav>
    <ul class="dreams-list" v-if="dreams">
      <li v-for="(dream, i) in displayedDreams" :key="i">
        <navigables-list-item :label="dream.text" :id="i" />
      </li>
    </ul>
  </section>
</template>

<script>
import {mapActions} from 'vuex';
import NavigablesListItem from '~/components/atoms/navigables/NavigablesListItem';

export default {
  name: 'DreamsList',

  components: {NavigablesListItem},

  props: {
    dreams: {
      type: Array,
      default: () => []
    },
    searchResults: {
      type: Array,
      default: () => []
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
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/_mixins';

input {
  @include monospace();
}

.input {
  box-shadow: none;
  border: none;
  padding-left: 1rem;
  margin-bottom: 1rem;
}
</style>
