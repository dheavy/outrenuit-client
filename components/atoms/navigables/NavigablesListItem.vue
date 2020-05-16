<template>
  <nuxt-link :to="setDreamURI(id)" class="navigables--list-item">{{ label }}</nuxt-link>
</template>

<script>
export default {
  name: 'NavigablesListItem',

  props: {
    label: {
      type: String,
      default: ''
    },
    id: {
      type: Number,
      default: 0
    }
  },

  methods: {
    setDreamURI(id) {
      return `/dreams/${id}`;
    }
  }
}
</script>

<style lang="scss" scoped>
.navigables--list-item {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>
