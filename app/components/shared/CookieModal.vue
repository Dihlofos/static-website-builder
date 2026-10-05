<script setup lang="ts">
import { computed, ref, onMounted, toRef } from 'vue'
import uiRu from '~/../data/common/ui/ru'
import uiEn from '~/../data/common/ui/en'

const props = defineProps({
  locale: { type: String, default: null },
})
const { locale } = useLocale(toRef(props, 'locale'))
const uiByLocale = { ru: uiRu, en: uiEn }
const ui = computed(() => uiByLocale[locale.value])
const STORAGE_KEY = 'cookie-modal-shown'

const isVisible = ref(false)

onMounted(() => {
  if (!localStorage.getItem(STORAGE_KEY)) {
    isVisible.value = true
  }
})

function accept() {
  isVisible.value = false
  localStorage.setItem(STORAGE_KEY, 'true')
}
</script>

<template>
  <div v-show="isVisible" class="cookie-modal">
    <div class="cookie-modal__text">
      <p>{{ ui.cookieMessage }}</p>
    </div>

    <button class="cookie-modal__close" @click="accept">
      {{ ui.cookieAccept }}
    </button>
  </div>
</template>

<style lang="scss" scoped>
.cookie-modal {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  display: flex;
  align-items: flex-start;
  gap: 1.6rem;
  background-color: $white;
  color: $black;
  padding: 1.6rem 2rem;
  max-width: 48.6rem;
  border-radius: 10px;

  @media (max-width: $tablet) {
    max-width: 90%;
    right: auto;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (max-width: $mobile) {
    left: 1rem;
    right: 1rem;
    max-width: unset;
    transform: none;
  }

  &__close {
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: $magenta;
    font-family: $monserrat;
    font-size: 1.6rem;
    font-weight: 600;
    color: $white;
    border-radius: 30px;
    padding: 0.6rem 1.6rem;
    border: none;
    cursor: pointer;

    @media (max-width: $mobile) {
      padding: 2rem;
    }
  }

  &__text {
    color: $black;
    max-width: 37.4rem;

    p {
      color: $black;
      font-family: $monserrat;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.3;
      margin: 0;

      @media (max-width: $mobile) {
        font-size: 1.4rem;
        line-height: 1.1;
      }
    }
  }
}
</style>
