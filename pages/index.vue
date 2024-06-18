<script lang="ts" setup>
const showButton = ref(false)

const handleScroll = () => {
  showButton.value = window.scrollY > 0
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>


<template>
  <div>
    <SectionHero />
    <section :class="$style.news_section">
      <SectionHeading
        :heading="'NEWS'"
        :subheading="'お知らせ'"
        :color="'var(--purple)'"
      />
      <SectionNews 
        :maxArticles="3"
        :indexStyle="true"
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
      <CommonButton :to="'/service'"/>
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
    <div
      :class="[$style.page_top, !showButton ? $style.hidden : '']"
      @click="scrollToTop"
    >
      <span class="material-symbols-outlined">arrow_upward</span>
    </div>
  </div>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

section {
  padding-block: calc(var(--sp-large) * 2);
  text-align   : center;
}

.news_section {
  display        : flex;
  align-items    : center;
  justify-content: center;
  gap            : calc(var(--sp-large) * 2);

  @include mediaScreen('tablet') {
    flex-direction: column;
  }
}

.page_top {
  display      : grid;
  place-items  : center;
  width        : 50px;
  aspect-ratio : 1/1;
  background   : rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  filter       : drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.1));
  position     : fixed;
  bottom       : 45px;
  right        : 45px;
  cursor       : pointer;
  transition   : all 0.5s ease-in-out;
  opacity      : 1;
  visibility   : visible;

  &.hidden {
    opacity   : 0;
    visibility: hidden;
  }

  span {
    font-size: 18px;
  }
}
</style>