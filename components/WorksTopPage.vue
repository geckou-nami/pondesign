<script lang="ts" setup>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css';
import image1 from '~/assets/images/smoothiesta.jpg'
import image2 from '~/assets/images/web-conference.jpg'
import image3 from '~/assets/images/lamina.jpg'

const worksImages = [
  { image: image1,},
  { image: image2,},
  { image: image3,}
]

</script>

<template>
  <div :class="$style.container">
    <div :class="$style.img_wrap">
      <Carousel
        :loop="true"
        :transition="'fade'"
      >
        <Slide
          v-for="worksImage in worksImages"
          :key="worksImage.image"
          :class="$style.slide"
        >
          <img :src="worksImage.image"  />
        </Slide>
        <template #addons>
          <Navigation :class="$style.navigation"/>
          <Pagination :class="$style.pagination"/>
        </template>
      </Carousel>
    </div>
    <div :class="$style.text_wrap">
    <SectionHeading
        :heading="'WORKS'"
        :subheading="'制作実績'"
        :color="'var(--purple)'"
    />
    <p>様々なジャンルのWebサイト制作が可能です。<br>
      ご購入やお申込み数の増加などを実現します！
    </p>
    <CommonButton />
    </div>
  </div>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.container {
  /* @include contentInner(); */
  width         : 100%;

  max-width: 1300px;
  margin-inline : auto;
  display: flex;

  @include mediaScreen('tablet') {
    flex-direction: column;
  }
}

.img_wrap {
  max-width: 704px;

  img {
    width     : 100%;
    height    : 100%;
    object-fit: cover;
  }
}


.slide {
  transition: opacity 0.5s ease-in-out;
  opacity: 0;
  padding-block: var(--sp-medium);

  @include mediaScreen('tablet') {
    margin-inline: auto;
    padding: var(--sp-medium);
  }

  > img {
    width        : 100%;
    height       : 100%;
    object-fit   : cover;
  }
}

.text_wrap {
  width: 100%;
  flex:1;
  display         : flex;
  flex-direction  : column;
  justify-content : center;
  align-items     : center;
  gap             : var(--sp-large);
  padding-block   : calc(var(--sp-large) * 2);
  padding-inline  : calc(var(--sp-large) * 2);
  position: relative;

  @include mediaScreen('tablet') {
    padding-block-start: 0;
  }

  &::after {
    position: absolute;
    top: 50%;
    right: 0;
    z-index: -1;
    display: block;
    width: 150%;
    height: 100%;
    content: "";
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    background-color: var(--lightgray);

    @include mediaScreen('tablet') {
      top: 0;
      width: 100%;
      height: 200%;
    }
  }
}
</style>

<style>

.carousel__slide--active {
  opacity: 1;
}


  .carousel__prev {
    width   : var(--carousel-button-size);
    height  : var(--carousel-button-size);
    color   : var(--purple);
    position: absolute;
    left    : 0;
    margin  : 0;
  }


.carousel__next {
  width           : var(--carousel-button-size);
  height          : var(--carousel-button-size);
  color           : var(--purple);
  position        : absolute;
  right           : 0;
  margin          : 0;
}

.carousel__pagination {
  display         : flex;
  justify-content : end;
  margin-block: 0;
}

.carousel__pagination-button {
  width           : 6px;
  height          : 6px;
  margin          : 0 5px;
  border-radius   : 50%;
  background-color: var(--darkgray);
  transition      : background-color 0.3s;

  &::after{
    display: none;
  }
}

.carousel__pagination-button--active {
  background-color: var(--black);
  text-align: end;
}
</style>