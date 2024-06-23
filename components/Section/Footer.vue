<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { navItems } from '~/assets/const/nav-items'

const route = useRoute()

// 現在のルートが'/contact'かどうかを判定
const isContactPage = computed(() => route.path === '/contact')
</script>

<template>
  <div :class="$style.footer_container">
    <div
      v-if="!isContactPage"
      :class="$style.contact_link"
    >
      <SectionHeading 
        :heading="'CONTACT'"
        :subheading="'お問い合わせ'"
        :color="'var(--purple)'"
      />
      <p>Webサイトの制作のご依頼やお見積りなど、お気軽にご相談ください。</p>
      <CommonButton :to="'/contact'"/>
    </div>
    <div :class="$style.footer_menu">
      <ul>
        <li
          v-for="item in navItems"
          :key="item.name"
        >
          <NuxtLink :to="item.path">
            {{ item.name }}
          </NuxtLink>
        </li>
      </ul>
      <p :class="$style.copyright">
        ©PON DESIGN
      </p>
    </div>
  </div>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.footer_container {
  background-color: var(--lightgray);
}

.contact_link {
  display        : flex;
  flex-direction : column;
  justify-content: center;
  align-items    : center;
  gap            : var(--sp-large);
  padding-block  : calc(var(--sp-large) * 3);
  padding-inline: var(--sp-large);
}

.footer_menu {
  background-color: var(--dark-black);
  padding-block   : calc(var(--sp-large) * 2);
  padding-inline: var(--sp-large);

  ul {
    display        : flex;
    justify-content: center;
    gap            : calc(var(--sp-medium) * 1.5);
    padding        : var(--sp-large) 0;
    color          : var(--white);
    font-size      : 12px;

      @include mediaScreen('tablet') {
        display: flex;
        flex-wrap: wrap;
        justify-content: left;      
    }
  }
}
.copyright {
  text-align: center;
  color     : var(--light-purple);
  font-size : var(--fs-min);
}
</style>