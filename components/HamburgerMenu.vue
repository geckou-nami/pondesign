<script lang="ts" setup>
import { navItems } from '~/assets/const/nav-items'

const isActive = ref(false)
</script>

<template>
  <div :class="[$style.menu_list, isActive ? $style.active : '']">
    <ul>
      <li
        v-for="item in navItems.filter(item => item.name !== 'HOME')"
        :key="item.name"
      >
        <NuxtLink :to="item.path">
          {{ item.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
    <div
      :class="$style.btn"
      @click="isActive = !isActive"
    >
      <span :class="[$style.btn_bar, isActive ? $style.active : '']"></span>
      <span :class="[$style.btn_bar, isActive ? $style.active : '']"></span>
      <span :class="[$style.btn_bar, isActive ? $style.active : '']"></span>
    </div>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.menu_list {
  width          : 100%;
  height         : 100svh;
  background     : linear-gradient(135deg, #7633a4, #250d65);
  color          : white;
  font-weight    : bold;
  display: none;
  justify-content: center;
  align-items    : center;
  text-align     : center;
  opacity        : 0;
  transition     : all 0.3s ease-in-out;
  position       : relative;
  visibility     : hidden;
  z-index        : var(--z-index-overlay);

  &.active {
    display        : flex;
    opacity: 1;
    visibility     : visible;
  }

  li {
    margin-block-end: calc(var(--sp-medium) * 1.5);
  }
}

.btn {
  position       : absolute;
  top            : calc(var(--sp-medium)* 1.2);
  right          : var(--sp-large);
  width          : 30px;
  height         : 20px;
  display        : none;
  flex-direction : column;
  justify-content: space-between;
  cursor         : pointer;
  z-index: var(--z-index-overlay);
  display: none;

  @include mediaScreen('tablet') {
    display: flex;
    z-index: var(--z-index-max);
  }
}

.btn_bar {
  width           : 100%;
  height          : 2px;
  background-color: var(--white);
  border-radius   : 2px;

  &.active {
    transition: all 0.4s ease-in-out;

    &:nth-of-type(1) {
      transform: translateY(9px) rotate(45deg);
    }
    &:nth-of-type(2) {
      opacity: 0;
    }
    &:nth-of-type(3) {
      transform: translateY(-9px) rotate(-45deg);
    }
  }
}
</style>