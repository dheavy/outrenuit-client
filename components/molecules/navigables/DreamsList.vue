<template>
  <ul v-if="dreams">
    <li v-for="(dream, i) in dreams" :key="i">
      <navigables-list-item :label="dream.text" :id="i" />
    </li>
  </ul>
</template>

<script>
import NavigablesListItem from '~/components/atoms/navigables/NavigablesListItem';

export default {
  name: 'DreamsList',

  components: {NavigablesListItem},

  props: {
    dreams: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  display: inline-block;
  width: 100%;
}

li {
  display: inline-flex;
  width: 100%;
}
</style>
