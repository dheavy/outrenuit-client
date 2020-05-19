<template>
  <dream-explorer />
</template>

<script>
import {loadDreams} from '~/api';
import DreamExplorer from '~/components/organisms/DreamExplorer';

export default {
  name: 'PagesIndex',

  components: {DreamExplorer},

  async asyncData({store}) {
    const dreams = await loadDreams();
    store.commit('data/init', dreams);
  }
}
</script>
