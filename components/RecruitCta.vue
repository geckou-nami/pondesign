<template>
<div :class="$style.container">
  <div :class="$style.cta_text">
    <SectionHeading
        :heading="'RECRUIT'"
        :subheading="'採用情報'"
        :color="'var(--purple)'"
      />
    <p>私たちを一緒に働きませんか？</p>
    <CommonButton :to="'/recruit'"/>
  </div>
  <div :class="$style.img_wrap">
    <img src="assets/images/recruit.jpg" alt="">
  </div>
</div>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.container {
  @include contentInner();
  display: flex;

  @include mediaScreen('tablet') {
    flex-direction: column;
  }
}

.cta_text {
  flex            : 1;
  background-color: var(--lightgray);
  display         : flex;
  flex-direction  : column;
  justify-content : center;
  align-items     : center;
  gap             : var(--sp-large);
  padding-block   : calc(var(--sp-large) * 2);
  padding-inline  : calc(var(--sp-large) * 4);

  @include mediaScreen('tablet') {
    order         : 2;
    padding-inline: calc(var(--sp-large) * 2);
  }
}

.img_wrap {

  img {
    width     : 100%;
    height    : 100%;
    object-fit: cover;
  }

  @include mediaScreen('tablet') {
    order: 1;
  }
}
</style>