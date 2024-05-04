<script lang="ts" setup>
const props = defineProps<{
  heading: string;
  subheading: string;
}>();

</script>

<template>
  <div :class="$style.section_heading">
    <h2>
      {{ heading }}
    </h2>
    <p>
      {{ subheading }}
    </p>
  </div>

</template>

<style lang="scss" module>

.section_heading {
  text-align: center;

  h2 {
    font-size    : var(--fs-section-heading);
    color: var(--white);
    /* color        : var(--purple); */
  }

  p {
    font-size: 13px;
    font-weight: bold;
    color: var(--white);
    /* color    : var(--purple); */
  }
}

</style>