<script lang="ts" setup>
const isHidden = ref(true);

// スクロールイベントをハンドリングする関数
function handleScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  isHidden.value = scrollTop === 0;
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // コンポーネントマウント時に一度チェック
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

</script>

<template>
  <div>
    <SectionHeader
      :class="$style.header"
      :isTransparent="isHidden"
    />
    <SectionHero />
    <SectionNews />
    <SectionService />
    <SectionWorks />
    <SectionCompany />
    <SectionRecruit />
    <SectionContact />
    <SectionFooter />
  </div>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.header {
  position: fixed;
  top:0;
}


</style>