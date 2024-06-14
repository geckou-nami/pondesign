<script lang="ts" setup>

</script>

<template>
  <div>
    <SectionHero />
    <section>
      <SectionHeading
        :heading="'NEWS'"
        :subheading="'お知らせ'"
        :color="'var(--purple)'"
      />
      <SectionNews 
        :maxArticles="3"
      />
    </section>
    <section>
      <SectionHeading
        :heading="'SERVICE'"
        :subheading="'事業内容'"
        :color="'var(--purple)'"
      />
      <SectionService
        horizontalContainer
        horizontalCard
        index
      />
      <CommonButton />
    </section>
    <section>
      <WorksTopPage />
    </section>
    <section>
      <CompanyMessage isIndexPage/>
    </section>
    <section>
      <RecruitCta />
    </section>
  </div>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

section {
  padding-block: calc(var(--sp-large) * 2);
  text-align: center;
}

</style>