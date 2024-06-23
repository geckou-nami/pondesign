<script lang="ts" setup>
const props = defineProps<{
  maxArticles: number
  indexStyle?: boolean
}>()

const newsArticle = [
  {
    date: '2030.01.20',
    category: 'お知らせ',
    title: 'Webデザインニュースサイト「ウェブマガジン」に取材いただきました'
  },
  {
    date: '2030.01.25',
    category: '制作実績',
    title: 'Smoothiesta様のWebサイトを制作いたしました'
  },
  {
    date: '2030.01.20',
    category: '採用',
    title: 'Webデザイナーを1名募集中です!'
  },
  {
    date: '2030.01.31',
    category: 'おしらせ',
    title: 'テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。'
  },
  {
    date: '2030.01.31',
    category: 'おしらせ',
    title: 'テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。'
  },
  {
    date: '2030.01.31',
    category: 'おしらせ',
    title: 'テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。'
  },
  {
    date: '2030.01.31',
    category: 'おしらせ',
    title: 'テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。'
  },
  {
    date: '2030.01.31',
    category: 'おしらせ',
    title: 'テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。'
  },
]
</script>

<template>
    <div
      :class="[$style.news_container, indexStyle ? $style.index_style : '']">
      <ul
        :class="$style.news_list"
        v-for="(article, index) in newsArticle.slice(0, props.maxArticles)"
        :key="article.title"  
      > 
        <li>
          <div>
            <date> {{ article.date }}</date>
            <p :class="$style.category">{{ article.category }}</p>
          </div>
          <p>{{ article.title }}</p>
          
        </li>
      </ul>
    </div>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.news_container {
  @include contentInner;
  max-inline-size: 780px;
  margin-block   : calc(var(--sp-large) * 2);
}

.index_style {
  inline-size: auto;
  margin     : 0;
  padding    : 0;
}

.news_list {
  margin-block: var(--sp-medium);

  li {
    display    : flex;
    gap        : var(--sp-medium);
    align-items: center;

    @include mediaScreen('tablet') {
      display: block;
    }
  }

  div {
    display    : flex;
    gap        : var(--sp-medium);
    align-items: center;
  }
}

.category {
  font-size       : var(--fs-small);
  font-weight     : bold;
  background-color: var(--darkgray);
  border-radius   : 50px;
  min-width       : 80px;
  text-align      : center;
  padding-block   : var(--sp-min);
}
</style>
