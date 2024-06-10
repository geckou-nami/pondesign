<script lang="ts" setup>
const props = withDefaults(defineProps<{
  heading: string;
  subheading: string;
  color: string
}>(), {
  color: 'var(--white)'
});
</script>

<template>
  <div :class="$style.section_heading">
    <h2 :style="{ '--heading-color': color }">
      {{ heading }}
    </h2>
    <p  :style="{ '--heading-color': color }">
      {{ subheading }}
    </p>
  </div>
</template>

<style lang="scss" module>

.section_heading {
  text-align: center;

  h2 {
    font-size    : var(--fs-section-heading);
    color: var(--heading-color);
  }

  p {
    font-size: 13px;
    font-weight: bold;
    color: var(--heading-color);
  }
}
</style>