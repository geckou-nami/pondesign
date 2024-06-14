<script lang="ts" setup>

</script>

<template>
  <div>
    <SubHero
      :heading="'NEWS'"
      :subheading="'お知らせ'"
    />
    <BreadcrumbList
      :currentSection="'NEWS'"
    />
    <SectionNews
      :maxArticles="10"
    />
  </div>
</template>

<style lang="scss" module>

</style>