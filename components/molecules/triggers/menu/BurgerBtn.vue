<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'BurgerBtn'
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1024px) {
  .navbar-burger {
    display: block;
  }
}
</style>
