
<script lang="ts" setup>
const props = defineProps<{
  currentSection: string
}>()
</script>

<template>
  <nav>
    <ol :class="$style.breadcrumb">
      <li><a href="/">HOME</a></li>
      <li>></li>
      <li>{{ currentSection }}</li>
    </ol>
  </nav>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

nav {
  inline-size     : 100%;
  background-color: var(--lightgray);
  padding-block   : calc(var(--sp-medium) * 0.8);
  z-index         : calc(var(--z-index-header) - 1);
}

.breadcrumb {
  @include contentInner;
  padding-inline: var(--sp-medium);
  font-size     : var(--fs-small);
  display       : flex;
  gap           : var(--sp-small);
}
</style>