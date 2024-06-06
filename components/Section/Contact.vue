<script lang="ts" setup>
const radioOptions = [
  { 
    value: '制作依頼',
    label: 'お仕事のご依頼・ご相談'
  },
  {
    value: 'お見積もり依頼',
    label: 'お見積もり依頼'
  },
  {
    value: '採用について',
    label: '採用について'
  },
  {
    value: 'その他',
    label: 'その他'
  },
]

const inputFields = [
  {
    title: 'お名前',
    name: 'name',
    type: 'text'
  },
  {
    title: '会社名',
    name: 'company',
    type: 'text'
  },
  {
    title: 'メールアドレス',
    name: 'mail',
    type: 'email'
  },
  {
    title: '電話番号',
    name: 'number',
    type: 'tel'
  },
]
</script>


<template>
  <div :class="$style.contact_container">
    <SubHero
      :heading="'CONTACT'"
      :subheading="'お問い合わせ'"
    />
    <BreadcrumbList
      :currentSection="'CONTACT'"
    />
    <div :class="$style.form_contents">
      <p>Webサイトの制作のご依頼やお見積りなど、お気軽にご相談ください。</p>
      <!-- form -->
        <form action="">
          <p :class="$style.form_title">
            お問い合わせ種別
            <span :class="$style.required_item">※必須</span>
          </p>
          <!---------- ラジオボタン ---------->
          <div :class="$style.form_radio">
            <label
              v-for="radioOption in radioOptions"
              :key="radioOption.value"
              :for="`radio_${radioOption.value}`"
            >
              <input
                type="radio"
                name="radio"
                :id="`radio_${radioOption.value}`"
                :value="radioOption.value"
              />
              {{ radioOption.label }}
            </label>
          </div>
          <!---------- インプット ---------->
          <label
            v-for="inputField in inputFields"
            :key="inputField.name"
            :for="inputField.name"
          >
            <p :class="$style.form_title">
              {{ inputField.title }}
              <span :class="[$style.required_item, inputField.name === 'number' ? $style.number_item : '']">
                {{ inputField.name === 'number' ? '(半角数字ハイフンなし)' : '※必須' }}
              </span>
            </p>
            <input
              :class="$style.input"
              :type="inputField.type"
              :name="inputField.name"
              :id="inputField.name"
              placeholder=" "
              required
              autocomplete="off"
            >
          </label>
          <!---------- テキストエリア　---------->
          <p :class="$style.form_title">お問い合わせ内容</p>
          <textarea
            name="お問い合わせ内容"
            id="お問い合わせ内容"
            placeholder="お問い合わせ内容を具体的にご記入ください。"
            cols="30"
            rows="10" />
          <label for="お問い合わせ内容" />
          <!---------- セレクトボックス　---------->
          <p :class="$style.form_title">
            PON DESIGNをどちらでお知りになりましたか？
            <span :class="$style.required_item">※必須</span>
          </p>
          <select name="referral_source">
            <option value="" disabled selected>選択して下さい</option>
            <option value="search">Google/Yahoo検索</option>
            <option value="sns">SNS</option>
            <option value="blog">ブログ</option>
            <option value="friend">友人や知人</option>
            <option value="other">その他</option>
          </select>
          <MoreButton
            :label="'送信する'"
            :class="$style.submit_button"
          />
      </form>
    </div>
  </div>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.contact_container {

}

.form_contents {
  @include contentInner;
  display        : flex;
  flex-direction : column;
  justify-content: center;
  align-items    : center;
  padding-block  : var(--sp-larger);
}

form {
  max-width       : 780px;
  width           : 100%;
  display         : flex;
  flex-direction  : column;
  background-color: var(--gray-medium);
  padding-block: calc(var(--sp-medium) * 4);
  padding-inline       : calc(var(--sp-medium) * 6);
  margin-block: var(--sp-large);
  margin-inline   : auto;

}

.form_title {
  font-size    : var(--sp-medium);
  font-weight  : bold;
  margin-top: var(--sp-large);
  margin-bottom: var(--sp-small);
}

.form_radio {
  display  : flex;
  flex-wrap: wrap;

  > label {
    margin-right: var(--sp-large);
  }
}

@mixin formContents() {
  padding         : calc(var(--sp-small) * 1.5);
  border          : solid 1px #aaa;
  border-radius   : 5px;
  background-color: #fff;
} 

.input {
  @include formContents;
  width: 300px;
}

textarea {
  @include formContents;
}

select {
  @include formContents;
  width: 300px;
}

.required_item {
  color    : var(--purple);
  font-size: var(--fs-small);
}

.number_item {
  color      : var(--black);
  font-size  : var(--fs-small);
  font-weight: normal;
}

.submit_button {
  margin-top: var(--sp-larger);
  align-self: center;
}
</style>