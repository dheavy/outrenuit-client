<template>
  <dream-explorer />
</template>

<script>
import {loadDreams} from '~/api';
import DreamExplorer from '~/components/organisms/explorer/DreamExplorer';

export default {
  name: 'PagesIndex',

  components: {DreamExplorer},

  async asyncData({store}) {
    if (store.state.dreams) return;
    const dreams = await loadDreams();
    store.commit('data/init', dreams);
  }
}
</script>
