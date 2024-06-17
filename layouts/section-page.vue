<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { navItems } from '~/assets/const/nav-items'
import { computed } from 'vue'

const route = useRoute()

// 現在のルートに基づいてnavItemsから対応する項目を取得
const currentNavItem = computed(() => navItems.find(item => item.path === route.path))

// デフォルトのプロパティを設定
const heading = computed(() => currentNavItem.value ? currentNavItem.value.name : '')
const subheading = computed(() => currentNavItem.value ? currentNavItem.value.subTitle : '')
const currentSection = computed(() => currentNavItem.value ? currentNavItem.value.name : '')

// スクロールイベントをハンドリングする関数
function handleScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
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
    <SubHero
      :heading="heading"
      :subheading="subheading"
    />
    <BreadcrumbList
      :currentSection="currentSection"
      :class="$style.breadcrumb"
    />
    <slot />
  </div>
</template>

<style lang="scss" module>
.breadcrumb {
  position: sticky;
  top: calc((var(--sp-medium) * 2.5) + var(--fs-link));
}

</style>
