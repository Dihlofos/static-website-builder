<script setup>
import navItems from '~/../data/navigation.json'

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
      <span class="nav__toggle-icon">{{ mobileOpen ? '✕' : '☰' }}</span>
    </button>

    <ul class="nav__list">
      <li v-for="item in navItems" :key="item.link" class="nav__item">
        <a
          :href="item.link"
          class="nav__link"
          @click="closeMobile"
        >
          {{ item.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  &__toggle {
    display: none;
    &:focus-visible {
      outline: 2px solid #0055ff;
      outline-offset: 2px;
    }
  }

  &__toggle-icon {
    font-size: 24px;
    line-height: 1;
  }

  &__list {
    display: flex;
    gap: 24px;
    align-items: center;
  }

  &__link {
    font-size: 14px;
    font-weight: 500;
    color: #64748b;
    transition: color 150ms ease;

    &:hover {
      color: #0055ff;
    }
  }

  // Mobile
  @media (max-width: 767px) {
    &__toggle {
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1030;
    }

    &__list {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      width: 280px;
      flex-direction: column;
      padding: 64px 32px;
      background: #ffffff;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
      transform: translateX(100%);
      transition: transform 250ms ease;
      gap: 16px;
      z-index: 1039;
    }

    &--open &__list {
      transform: translateX(0);
    }

    &__link {
      font-size: 18px;
      padding: 8px 0;
    }
  }
}
</style>
