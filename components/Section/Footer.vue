<script lang="ts" setup>
import Contact from '~/pages/contact.vue';
import SectionHeading from '../SectionHeading.vue';
import ContactButton from '../ContactButton.vue';


</script>

<template>
  <div :class="$style.footer_container">
    <div :class="$style.contact_link">
      <SectionHeading 
        :heading="'CONTACT'"
        :subheading="'お問い合わせ'"
        :color="'var(--purple)'"
      />
      <p>Webサイトの制作のご依頼やお見積りなど、お気軽にご相談ください。</p>
      <MoreButton />
    </div>
    <div :class="$style.footer_menu">
      <ul>
        <li><a href=""></a>HOME</li>
        <li><a href="">NEWS</a></li>
        <li><a href="">SERVICES</a></li>
        <li><a href="">WORKS</a></li>
        <li><a href="">COMPANY</a></li>
        <li><a href="">RECRUIT</a></li>
        <li><a href="">CONTACT</a></li>
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
  width           : 100%;
  height          : 100%;
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