<script lang="ts" setup>
const props = withDefaults(defineProps<{
  label: string;
}>(), {
  label: 'MORE' // ここでデフォルト値を設定
});

</script>

<template>
  <a :class="$style.button_container">
      {{ label }}
  </a>
</template>

<style lang="scss" module>
.button_container {
  /* width           : 220px; */
  padding-block   : var(--sp-medium);
  padding-inline  : calc(var(--sp-large) * 2.5);
  color           : var(--white);
  background-image: var(--button-gradient, linear-gradient(to right, #ff7e5f, #feb47b)); /* デフォルト値を設定 */
  border          : 1px solid var(--button-border-color, transparent); /* デフォルトは透明 */
  background-size : 200% auto;
  border-radius   : 50px;
  font-size       : var(--fs-link);
  font-weight     : bold;
  cursor          : pointer;
  position        : relative;
  transition      : all 0.3s;
  text-align: center;


  &::after {
    content    : '▶︎';
    font-size  : 10px;
    position   : absolute;
    top        : 50%;
    right      : var(--sp-large); 
    transform  : translateY(-50%);
    margin-left: var(--sp-large);
    transition : all 0.3s;
  }

  &:hover {
    background-position: right center;
  } 

  &:hover::after {
    margin-left: calc(var(--sp-large) + 5px);
  }
}
</style>