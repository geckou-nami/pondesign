<script lang="ts" setup>

</script>

<template>
  <div>
    <SubHero
      :heading="'CONTACT'"
      :subheading="'お問い合わせ'"
    />
    <fieldset>
      <input
        type="text"
        id="name"
        name="name"
        placeholder=" "
        required
        autocomplete="off"
      >
      <label for="name">お名前</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder=" "
        required
        autocomplete="off"
      >
      <label for="name">会社名</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder=" "
        required
        autocomplete="off"
      >
      <label for="name">メールアドレス</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder=" "
        required
        autocomplete="off"
      >
      <label for="name">電話番号</label>
      <textarea name="" id="" cols="30" rows="10" />
      <label for="name">お問い合わせ内容</label>
    </fieldset>
  </div>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

fieldset {
  @include contentInner;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: darkkhaki;
}

</style>