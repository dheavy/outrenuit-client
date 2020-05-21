<template>
  <nuxt-link
    :to="setDreamURI(id)"
    class="navigables--list-item"
  >
    {{ paddedID }} | {{ label }}
  </nuxt-link>
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
  },

  computed: {
    paddedID() {
      return `${this.id < 100 ? '0' : ''}${this.id < 10 ? '0' : '' }${this.id}`;
    }
  }
}
</script>
