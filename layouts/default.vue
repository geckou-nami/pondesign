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
  <main>
    <SectionHeader
      :class="$style.header"
      :isTransparent="isHidden"
    />
    <HamburgerMenu :class="$style.hamburger_menu"/>
    <SectionContainer>
      <slot />
    </SectionContainer>
    <SectionFooter />
  </main>
</template>

<style lang="scss" module>
.header {
  position: fixed;
  top:0;
}
</style>