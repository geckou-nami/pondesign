<script lang="ts" setup>
const props = defineProps<{
  heading: string;
  subheading: string;
}>();

</script>

<template>
  <div :class="$style.sub_hero">
    <SectionHeading
      :heading="heading"
      :subheading="subheading"
    />
  </div>
</template>

<style lang="scss" module>
.sub_hero  {
  height             : 240px;
  background-image   : url('assets/images/hero.jpg');
  background-size    : cover;
  background-position: center;
  background-repeat  : no-repeat;
  display            : grid;
  place-items        : center;
}
</style>