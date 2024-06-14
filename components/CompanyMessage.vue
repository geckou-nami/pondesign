<script lang="ts" setup>
const props = defineProps<{
  isIndexPage?: boolean;
}>()
</script>

<template>
  <div :class="$style.message_contents">
    <SectionHeading
        v-if="props.isIndexPage"
        :heading="'COMPANY'"
        :subheading="'私たちについて'"
        :color="'var(--purple)'"
        :class="$style.contents_heading"
    />
    <h3
      v-else
      :class="$style.contents_heading"
    >
    メッセージ
  </h3>
    <div :class="$style.message_heading">
      <span>サイトのゴール=</span><br><span>夢を叶えること</span>
    </div>
    <p :class="$style.message_text">
      お客様の夢を叶えること。<br>
      それがWebサイトのゴールであり、私たちが目指すことです。<br>
      だからこそちゃんと成果を出すサイトを全力でお作りします。<br>
      お客様の笑顔を見たい。<br>
      夢を実現する手助けをさせてください。
    </p>
  </div>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.contents_heading {
  @include contentsHeading;
  margin-bottom: var(--sp-medium);
  padding-top  : var(--sp-large);
}

.message_contents {
  @include contentInner;
  width              : 100%;
  background-image   : url('assets/images/bg-circle.png'), url('assets/images/bg-face.png');
  background-position: center center;
  background-repeat  : no-repeat;
  background-size    : contain;
  padding-block      : var(--sp-larger);

  @include mediaScreen('tablet') {
    background-image: url('assets/images/bg-circle.png');
  }
}

.message_heading {
  font-size     : var(--fs-larger);
  font-weight   : bold;
  text-align    : center;
  line-height   : var(--line-height-narrow);
  letter-spacing: 0.15em;
  
  br {
    display: none;
  }

  span {
    background: linear-gradient(transparent 70%, #f5f534 0%);
  }

  @include mediaScreen('tablet') {
    br {
      display: block;
    }

  }
}

.message_text {
  text-align  : center;
  margin-block: var(--sp-large);
}

.message_inner {
  @include contentInner;
}
</style>