<template>
  <div class="columns">
    <div class="column is-narrow" style="background: pink; width: 100px">
      Triggers
    </div>
    <div class="column navigables--dreams-list">
      <dreams-list
        v-if="dreams"
        :dreams="dreams"
      />
    </div>
    <div class="column is-three-fifths" style="background: yellow">
      Core
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
import DreamsList from '~/components/molecules/navigables/DreamsList';

export default {
  name: 'DreamExplorer',

  components: {DreamsList},

  watch: {
    $route: {
      immediate: true,
      handler(route) {
        if (route.params && route.params.id) {
          this.changeCurrentDream(+route.params.id);
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
      currentDreamID: state => state.explorer.currentDreamID
    })
  }
}
</script>

<style lang="scss" scoped>
.navigables--dreams-list {
  background-color: cyan;
  height: 100vh;
  overflow: auto;
}
</style>
