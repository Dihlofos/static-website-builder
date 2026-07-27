<script setup>
import { navItems, images } from '~/../data/navigation.json'

const mobileOpen = ref(false)

function toggleMobile() {
  mobileOpen.value = !mobileOpen.value
}

function closeMobile() {
  mobileOpen.value = false
}
</script>

<template>
  <nav class="nav" :class="{ 'nav--open': mobileOpen }">
    <button class="nav__toggle" @click="toggleMobile" aria-label="Меню">
      <Image v-if="!mobileOpen" :src="images.burger" alt="Открыть меню" width="44" height="44" />
      <Image v-else :src="images.close" alt="Закрыть меню" width="35" height="35" />
    </button>

    <div class="nav__overlay">
      <ul class="nav__list">
        <li v-for="item in navItems" :key="item.link" class="nav__item">
          <a :href="item.link" class="nav__link" v-anchor @click="closeMobile">
            {{ item.label }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss">
.nav {
  img.nav__girls {
    display: none !important;

    @media (max-width: $tablet) {
      display: block !important;
    }
  }

  &__toggle {
    display: none;
    border: none;
    background: transparent;
    cursor: pointer;
    padding: 0;
    line-height: 0;

    &:focus-visible {
      outline: 2px solid #0055ff;
      outline-offset: 2px;
    }



    @media (max-width: $tablet) {
      display: flex;
      align-items: center;
      justify-content: center;
      position: fixed;
      top: 1.2rem;
      right: 1.6rem;
      z-index: 1030;

      .nav--open & {
        top: 1.6rem;
        right: 2rem;

      }
    }
  }

  &__overlay {
    display: contents;

    @media (max-width: $tablet) {
      display: flex;
      flex-direction: column;
      position: fixed;
      inset: 0;
      background-color: $magenta;
      z-index: 1029;
      padding: 2rem 2rem 4rem;
      opacity: 0;
      pointer-events: none;
      transition: opacity 300ms ease;
      overflow-y: auto;
    }

    .nav--open & {
      @media (max-width: $tablet) {
        opacity: 1;
        pointer-events: all;
      }
    }
  }

  &__list {
    display: flex;
    gap: 2.4rem;
    align-items: center;
    list-style: none;

    @media (max-width: $tablet) {
      flex-direction: column;
      gap: 2.4rem;
      padding: 0;
      flex-shrink: 0;
      align-items: flex-start;
    }
  }

  &__link {
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 1.1;
    color: $white;
    transition: color 150ms ease;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    @media (max-width: $tablet) {
      font-size: 2.4rem;
      font-weight: 600;
      padding: 0.8rem 0;
    }
  }
}
</style>
