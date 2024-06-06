<script lang="ts" setup>
const profiles = [
  {
    title: '社名',
    text: '株式会社PON DESIGN'
  },
  {
    title: '設立',
    text: '2025.02.10'
  },
  {
    title: '代表取締役',
    text: '株猫山ポン太郎'
  },
  {
    title: '資本金',
    text: '1,000,000円'
  },
  {
    title: '所在地',
    text: '〒555-5555 東京都千代田区 ポンビルディング 606'
  }
];

</script>

<template>
  <div :class="$style.company_container">
    <SubHero
      :heading="'COMPANY'"
      :subheading="'私たちについて'"
    />
    <BreadcrumbList
      :currentSection="'COMPANY'"
    />
    <div :class="$style.message">
      <div :class="$style.message_inner">
        <div :class="$style.message_contents">
          <h3 :class="$style.contents_heading">メッセージ</h3>
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
        <div :class="$style.greeting_wrap">
          <div :class="$style.img_wrap">
            <img src="assets/images/ceo.jpg" alt="CEO紹介写真">
          </div>
          <div :class="$style.greeting_text">
            <p>
              テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります
              テキストが入りますテキストが入りますテキストが入りますテキストが入ります
            </p>
            <p>
              テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります
              テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります
              テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります
              テキストが入りますテキストが入りますテキストが入ります
            </p>
            <p>代表取締役社長 猫山ポン太郎</p>
          </div>
        </div>
      </div>
    </div>
    <div :class="$style.company_profile">
      <h3 :class="$style.contents_heading">会社概要</h3>
      <dl
        :class="$style.profile_list"
        v-for="profile in profiles"
        :key="profile.title"
      >
        <dt>{{ profile.title }}</dt>
        <dd>{{ profile.text }}</dd>
      </dl>
      <div :class="$style.map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.656783806038!2d139.8081254793457!3d35.710062699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ed0d12f9adf%3A0x7d1d4fb31f43f72a!2z5p2x5Lqs44K544Kr44Kk44OE44Oq44O8!5e0!3m2!1sja!2sjp!4v1715434536987!5m2!1sja!2sjp" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <a href="">Googleマップでみる</a>
    </div>
  </div>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.company_container {
  width: 100%;
}

.contents_heading {
  @include contentsHeading;
  margin-bottom: var(--sp-medium);
  padding-top: var(--sp-large);
}

.message_contents {
  width        : 100%;
  height             : 100%;
  background-image   : url('assets/images/bg-circle.png'), url('assets/images/bg-face.png');
  background-position: center center;
  background-repeat  : no-repeat;
  background-size    : contain;
  padding-block: var(--sp-larger);

  @include mediaScreen('tablet') {
    background-image: url('assets/images/bg-circle.png');
  }
}

.message_heading {
  font-size    : var(--fs-larger);
  font-weight  : bold;
  text-align   : center;
  line-height: var(--line-height-narrow);
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
  text-align: center;
  margin-block: var(--sp-large);
}

.message_inner {
  @include contentInner;
}

.greeting_wrap {
  width: 100%;
  display   : flex;
  gap       : var(--sp-large);
  margin-top: var(--sp-large);

  @include mediaScreen('tablet') {
    flex-direction: column;
    gap           : var(--sp-medium);
  }
}

.greeting_text {
  display: flex;
  flex-direction: column;
  gap: var(--sp-large);

  p {
    font-size  : var(--fs-medium);
    line-height: 1.8;
  }
}

.img_wrap {
  flex: 0 0 40%;

  > img {
    width: 100%;
  }
}

// 会社概要

.company_profile {
  width        : 100%;
  max-width    : var(--contents-max-width);
  padding      : var(--sp-large);
  margin-inline: auto;


}

.profile_list {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: var(--sp-medium);
  border-bottom: 1px solid var(--gray);
  padding-block: var(--sp-large);

  @include mediaScreen('tablet') {
    grid-template-columns: 1fr;
  }


  dt {
    font-weight: bold;
  }
}

.map {
  margin-top: var(--sp-large);
  text-align: center;

  iframe {
    width: 100%;
    height: 400px;
  }
}
</style>