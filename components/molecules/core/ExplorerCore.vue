<template>
  <div class="corpus-explorer columns">
    <div v-if="dream" class="dream column is-two-thirds">
      <div class="dream--meta">{{ transcriptionDate }}</div>
      <div class="dream--text" v-html="formattedText" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExplorerCore',

  props: {
    dream: {
      type: Object,
      default: () => {}
    }
  },

  computed: {
    formattedText() {
      if (!this.dream || !this.dream.text) {
        throw new Error('[components/molecules/core/ExplorerCore] #formattedText - missing dream.text property');
      }
      return this.dream.text.replace('\n', '<br>');
    },

    transcriptionDate() {
      if (!this.dream || !this.dream.transcripted_at) {
        throw new Error('[components/molecules/core/ExplorerCore] #formattedText - missing dream.transcriped_at property');
      }
      const formattedDate = new Date(this.dream.transcripted_at);
      return formattedDate.toLocaleDateString(undefined, {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/_mixins';

.dream {
  padding-left: 4rem;

  .dream--meta {
    @include monospace();
    font-size: 0.75rem;
    margin-top: 0.3rem;
    margin-bottom: 2rem;
    text-transform: capitalize;
  }

  .dream--text {
    font-size: 1.5rem;
  }
}
</style>
