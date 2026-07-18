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
      <Icon :name="mobileOpen ? 'x' : 'menu'" :size="24" />
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
    @include focus-ring;
  }

  &__list {
    display: flex;
    gap: $spacing-lg;
    align-items: center;
  }

  &__link {
    font-size: $font-size-sm;
    font-weight: $font-weight-medium;
    color: $color-text-muted;
    transition: color $transition-fast;

    &:hover {
      color: $color-primary;
    }
  }

  // Mobile
  @include down('md') {
    &__toggle {
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: $z-fixed;
    }

    &__list {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      width: 280px;
      flex-direction: column;
      padding: $spacing-3xl $spacing-xl;
      background: $color-bg;
      box-shadow: $shadow-xl;
      transform: translateX(100%);
      transition: transform $transition-base;
      gap: $spacing-md;
      z-index: $z-modal - 1;
    }

    &--open &__list {
      transform: translateX(0);
    }

    &__link {
      font-size: $font-size-lg;
      padding: $spacing-sm 0;
    }
  }
}
</style>
