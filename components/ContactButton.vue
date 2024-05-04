<script lang="ts" setup>

</script>

<template>
  <a :class="$style.button_container">
      CONTACT
  </a>
</template>

<style lang="scss" module>
.button_container {
  padding      : var(--sp-medium) calc(var(--sp-large) * 2.5);
  color        : var(--white);
  border       : 1px solid var(--white);
  border-radius: 50px;
  font-size    : var(--fs-link);
  font-weight  : bold;
  cursor       : pointer;
  position     : relative;

  &::after {
    content    : '▶︎';
    font-size  : 10px;
    position   : absolute;
    top        : 50%;
    transform  : translateY(-50%);
    margin-left: var(--sp-large);
    transition : all 0.3s;
  }

  &:hover::after {
    margin-left: calc(var(--sp-large) + 5px);
  }
}

</style>