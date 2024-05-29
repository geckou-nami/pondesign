<script setup lang="ts">
const props = defineProps<{ isActive: boolean }>()

const values = ref({
  email  : '',
  name   : '',
  message: '',
})

const inputItems = ref({
  email: {
    label: 'EMAIL',
    type : 'email',
  },
  name: {
    label: 'NAME',
    type : 'text',
  },
  message: {
    label: 'MESSAGE',
    type : 'textarea',
  },
})

const isAllFilled = computed(() => Object.values(values.value).every(Boolean))
</script>

<template>
  <form
    method="post"
    action="https://hyperform.jp/api/rTWb9pIX"
    :class="$style.contact_form"
  >
    <fieldset
      v-for="(item, key) in inputItems"
      :key="key"
      :class="[$style.fieldset, { [$style.active]: isActive }]"
    >
      <input
        v-if="item.type !== 'textarea'"
        :id="'input-' + key"
        v-model="values[key]"
        :type="item.type"
        :name="key"
        placeholder=" "
        required
        autocomplete="off"
        :class="$style.text_box"
      >
      <textarea
        v-else
        :id="'textarea-' + key"
        v-model="values[key]"
        :name="key"
        placeholder=" "
        required
        autocomplete="off"
        :class="$style.textarea"
      />
      <label
        :for="item.type !== 'textarea' ? 'input-' + key : 'textarea-' + key"
        :class="$style.legend"
      >
        {{ item.label }}
      </label>
    </fieldset>

    <button 
      :class="[
        $style.button,
        { [$style.active]: isActive },
        isAllFilled ? $style.send_button : $style.fill_button
      ]"
      type="submit"
      :disabled="!isAllFilled"
    >
      <span>
        {{ isAllFilled ? 'SEND' : 'FILL EVERYTHING' }}
      </span>
    </button>
  </form>
</template>