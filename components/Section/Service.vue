<script lang="ts" setup>
import servicesImage1 from '~/assets/images/service01.jpg'
import servicesImage2 from '~/assets/images/service02.jpg'
import servicesImage3 from '~/assets/images/service03.jpg'

const props = defineProps<{
  horizontalContainer?: boolean;
  horizontalCard?: boolean;
  index?: boolean;
}>()

const serviceContents = [
  {
    image: servicesImage1,
    title: 'Webサイト制作',
    text: `新規サイトはもちろん、サイトリニューアルやランディングページ制作も承っております。n/<br>
            サイトのゴールはお客様の夢や目的を実現することです。そのためにまずはしっかりとお話をうかがい、
            サイトに必要な要素を洗い出します。その後、ワイヤーフレーム（サイトのレイアウト）の作成、デザイン
            の制作、コーディングと進みます。制作の過程でお客様とのお打ち合わせを数回実施させていただき、ご要
            望とご意見を反映しながらサイトを制作していきます。`
  },
  {
    image: servicesImage2,
    title: 'Webサイト運用',
    text: `サイトの更新作業や独自のアクセス解析に基づいたサイト改善のご提案が可能です。n/<br>
            日々の面倒な更新作業は私たちにおまかせください。テキストの修正やリンクの張り替えなどの簡単な作業から、
            特集ページやバナーのデザインまで可能です。<br>
            また、アクセス解析によるサイト改善も承っております。ご購入やお申込数などにお悩みでしたらぜひご相談ください。
            サイトの課題を発見し、改善案のご提案から実装までワンストップで対応いたします。`
  },
  {
    image: servicesImage3,
    title: 'アプリ開発',
    text: `スマートフォンアプリ開発の他、Vue.jsやReactによるWebアプリの開発が可能です。n/ 開発力のみなら
          ず、充実したユーザー体験をもたらすためのUXデザインにも自信があります。作って終わり、ではなくユー
          ザーに愛されるUI（ユーザーインターフェース）を実現し、アプリ開発によるお客様の事業の目的を達成す
          る推進力となることを目指します。`
  }
]

const getFirstSentence = (text: string): string => {
  const firstSentence = text.split('n/')[0]; // n/タグで区切られた最初の文を取得
  return firstSentence;
}
</script>

<template>
  <div :class="[$style.services_container, {[$style.horizontal_container]: props.horizontalContainer}]"> 
    <div  
      :class="[$style.services_card, {[$style.horizontal_card]: props.horizontalCard}]"
      v-for="serviceContent in serviceContents"
      :key="serviceContent.title"
    >
      <div  :class="$style.services_image">
        <img :src="serviceContent.image" alt="イメージ画像" />
      </div>
      <div :class="$style.services_text">
        <h3>{{ serviceContent.title }}</h3>
        <p v-html="props.index ? getFirstSentence(serviceContent.text) : serviceContent.text" />
      </div>
    </div>
  </div>
</template>


<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.services_card {
  @include contentInner;
  display       : flex;
  gap           : var(--sp-larger);
  margin-block  : calc(var(--sp-large) * 2);

  @include mediaScreen('tablet') {
    flex-direction: column;
    gap           : var(--sp-medium);
    padding-inline: var(--sp-medium);
  }
}

.services_image {
  flex: 0 1 40%;

  >img {
    inline-size: 100%;
  }
}

.services_text {
  flex: 1;

  h3 {
    font-size    : var(--fs-service-title);
    font-weight  : bold;
    margin-bottom: var(--sp-large);

    @include mediaScreen('tablet') {
      text-align   : center;
      margin-bottom: var(--sp-medium);
    }
  }

  p {
    font-size  : var(--fs-medium);
    line-height: 1.8;
  }
}

.horizontal_container {
  display        : flex;
  justify-content: space-between;
  margin-block   : var(--sp-large);

  @include mediaScreen('tablet') {
    flex-direction: column;
    gap           : var(--sp-large);
  }
}

.horizontal_card {
  flex-direction  : column;
  gap             : var(--sp-small);
  margin-block    : 0;

  h3 {
    text-align      : center;
    margin-block-end: var(--sp-small);
  }
}
</style>