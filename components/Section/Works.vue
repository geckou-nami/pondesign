<script lang="ts" setup>
import smoothiestaImage from '~/assets/images/smoothiesta.jpg';
import webConferenceImage from '~/assets/images/web-conference.jpg';
import laminaImage from '~/assets/images/lamina.jpg';
import citylabImage from '~/assets/images/citylab.jpg';
import tabilogImage from '~/assets/images/tabilog.jpg';

const worksContents = [
  {
    image: smoothiestaImage,
    title: 'Smothesta 様',
  },
  {
    image: webConferenceImage,
    title: 'Web Conference 様',
  },
  {
    image: laminaImage,
    title: 'LAMINA 様',
  },
  {
    image: citylabImage,
    title: 'CTIYLab 様',
  },
  {
    image: tabilogImage,
    title: 'TABILOG 様',
  },
];
</script>

<template>
  <div  :class="$style.works_container">
    <SubHero
      :heading="'WORKS'"
      :subheading="'制作実績'"
    />
    <div :class="$style.works_contents">
      <div
        :class="$style.works_card"
        v-for="workContent in worksContents"
        :key="workContent.title"
      >
        <img :src="workContent.image" alt="イメージ画像" />
        <a href="">{{ workContent.title }}</a>
      </div>
  </div>
  </div>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;


.works_contents {
  @include contentInner;
  display              : grid;
  grid-template-columns: repeat(3, 1fr);
  gap                  : var(--sp-large);
  padding-block        : var(--sp-large);

  @include mediaScreen('tablet') {
    grid-template-columns: 1fr;
    padding-inline       : var(--sp-medium)
  }

}

.works_card {
  display        : flex;
  flex-direction : column;
  align-items    : center;
  justify-content: center;
  gap            : var(--sp-medium);

  >img {
    width : 100%;
    border: solid 1px var(--lightgray);

  }
}
</style>