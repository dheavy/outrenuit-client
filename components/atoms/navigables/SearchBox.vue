<template>
  <input
    class="input"
    type="search"
    placeholder="Recherche"
    aria-label="Rechercher dans le corpus de rêves"
    @input="onInput"
  />
</template>

<script>
export default {
  name: 'SearchBox',

  props: {
    onInput: {
      type: Function,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/_mixins';
@import '~/assets/_variables';

input {
  @include monospace();
  box-shadow: none;
  border: none;
  padding-left: 1rem;
  margin-bottom: 1rem;

  &:focus {
    outline: none !important;
    box-shadow: none;
  }
}
</style>
