<template>
  <ul class="dreams-list" v-if="dreams">
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
