<script lang="ts" setup>
const JobInformation = [
  {
    title: '雇用形態',
    content: '正社員'
  },
  {
    title: '給与',
    content: '400万円〜600万円（経験・能力を考慮のうえ優遇）'
  },
  {
    title: '仕事内容',
    content: 'Webサイトの制作。サイトのデザインとコーディングを担当していただきます。'
  },
  {
    title: '勤務時間',
    content: '10:00 〜 19:00（実働8時間、休憩1時間）'
  },
  {
    title: '応募資格',
    content: 'PhotoshopやXDなどのデザインツールの使い方を理解し、コーディングの基礎スキルがある方。実務未経験でも学校や独学で学習した方を歓迎します。',
    detail1: 'デザインやコーディングを楽しめる方取り入れる方',
    detail2: '常にアンテナを張って積極的にトレンドや最新の技術を取り入れる方',
    detail3: '常お客様と一緒に楽しみながら高い目的を目指せる方'
  },
]
</script>

<template>
  <div :class="$style.recruit_title_wrap">
    <h3>Enjoy Creation for Client</h3>
    <h4>楽しむ心が良いモノを生む</h4>
    <p>心を弾ましながら<br>
      夢いっぱいのサイトを作ろう！<br>
      お客様も自分もみんなが幸せになれるように
    </p>
  </div>
  <div :class="$style.recruit_image">
    <img src="assets/images/recruit01.jpg" alt="イメージ画像" />
  </div>
  <div :class="$style.job_list_wrap">
    <h3 :class="$style.contents_heading">募集中の職種</h3>
    <div :class="$style.job_list_card">
      <h4>Webデザイナー</h4>
      <dl
        :class="$style.job_list"
        v-for="Information in JobInformation"
        :key="Information.title"
      >
        <dt>{{ Information.title }}</dt>
        <dd>{{ Information.content }}</dd>
      </dl>
      <CommonButton
        :class="$style.recruit_button"
        :label="'応募する'"
      />
      <p  :class="$style.btn_text">求人サイトへ遷移します</p>
    </div>
    <h3 :class="$style.contents_heading">社内ムービー</h3>
    <div :class="$style.recruit_movie">
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Vq91e8dX3Ao?si=4YX2TcdZ-SZrk1wn&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </div>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.recruit_title_wrap {
  @include contentInner;
  text-align  : center;
  margin-block: var(--sp-larger);


  h3 {
    font-size: var(--fs-recruit-title);
    color    : var(--purple);
  }

  h4 {
    font-size    : var(--fs-recruit-subtitle);
    font-weight  : normal;
    color        : var(--purple);
    margin-bottom: var(--sp-medium);
  }

  p {
    line-height: 1.9;
  }
}

.recruit_image {
  clip-path: polygon(100% 0, 100% 85%, 0 100%, 0 15%);

  img {
    width: 100%;
  }
}

  // 求人情報
.contents_heading {
  @include contentsHeading;
}

.job_list_wrap {
  @include contentInner;
}

.job_list_card {
  border        : 1px solid #b067cf;
  padding-block : var(--sp-larger);
  padding-inline: calc(var(--sp-larger) * 2);
  text-align    : center;

  @include mediaScreen('tablet') {
    padding-inline: var(--sp-large);
  }

  h4 {
    text-align   : center;
    font-size    : 24px;
    margin-bottom: var(--sp-large);
  }
}

.job_list {
  display              : grid;
  grid-template-columns: 1fr 3fr;
  gap                  : var(--sp-medium);
  border-bottom        : 1px solid var(--gray);
  padding-block        : var(--sp-large);
  text-align           : left;

  @include mediaScreen('tablet') {
    grid-template-columns: 1fr;
  }

  dt {
    font-weight: bold;
  }
}

.recruit_button {
  margin-top: var(--sp-large);
}

.btn_text {
  margin-top: var(--sp-small);
  font-size : var(--fs-small);
}

  // 社内ムービー
.recruit_movie {
  width       : 100%;
  aspect-ratio: 16 / 9;
}
</style>