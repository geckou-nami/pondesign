<script lang="ts" setup>

</script>

<template>
  <div :class="$style.hero_container">
    <div :class="$style.hero_content">
      <h1 :class="$style.hero_title">
        WEB DESIGN SPECIALIST
      </h1>
      <P :class="$style.hero_subtitle">
        お客様の夢を叶える
        <span :class="$style.break" />
        Webサイトを制作
      </P>
      <CommonButton
        :label="'CONTACT'"
        style="--button-border-color: var(--white); --button-gradient: transparent;"
      />      
    </div>
    <span :class="$style.scroll">
      SCROLL
    </span>
  </div>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.hero_container {
  width              : 100%;
  height             : 100svh;
  background-image   : url('assets/images/hero.jpg');
  background-size    : cover;
  background-position: center;
  background-repeat  : no-repeat;
  display            : flex;
  justify-content    : center;
  align-items        : center;
  margin-inline      : auto;
} 

.hero_content {
  padding-inline  : var(--sp-large);
  text-align      : center;

  @include mediaScreen('tablet') {
    text-align: left;
  }
}

.hero_title {
    //tablet以下の場合、font-size: 40px;にぱっきと切り替えしたいためあえてpxで指定
  font-size    : 72px;
  color        : var(--white);
  margin-bottom: var(--sp-medium);

  @include mediaScreen('tablet') {
    font-size  : 40px;
    line-height: var(--line-height-tight);
  }
}

.hero_subtitle {
  font-size    : 24px;
  color        : var(--white);
  margin-bottom: calc(var(--sp-large) * 2);

  @include mediaScreen('tablet') {
    font-size: 16px;
  }
}

.break {
  display: none;

  @include mediaScreen('tablet') {
    display: block;
  }
}

.scroll {
  display        : inline-block;
  position       : absolute;
  right          : 20px;
  bottom         : 0;
  color          : #fff;
  padding        : 10px 10px 90px;
  writing-mode   : vertical-lr;
  font-size      : var(--fs-small);

  &::after {
    position  : absolute;
    bottom    : 0;
    left      : 50%;
    width     : 1px;
    height    : 80px;
    background: #fff;
    content   : "";
    animation : scrollDownLine 1.5s infinite;
  }
}

@keyframes scrollDownLine {
  0% {
    transform: scale(1, 0);
    transform-origin: 0 0;
  }
  50% {
    transform: scale(1, 1);
    transform-origin: 0 0;
  }
  50.1% {
    transform: scale(1, 1);
    transform-origin: 0 100%;
  }
  100% {
    transform: scale(1, 0);
    transform-origin: 0 100%;
  }
}

</style>