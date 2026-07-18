<script setup>
import site from '~/../data/site.json'
import navItems from '~/../data/navigation.json'
</script>

<template>
  <footer class="footer">
    <Container>
      <div class="footer__grid">
        <div class="footer__brand">
          <Logo size="sm" />
          <p class="footer__desc">{{ site.description }}</p>
        </div>

        <div class="footer__links">
          <h4 class="footer__heading">Навигация</h4>
          <ul class="footer__list">
            <li v-for="item in navItems" :key="item.link">
              <a :href="item.link" class="footer__link">{{ item.label }}</a>
            </li>
          </ul>
        </div>

        <div class="footer__links">
          <h4 class="footer__heading">Контакты</h4>
          <ul class="footer__list">
            <li><a href="mailto:hello@example.com" class="footer__link">hello@example.com</a></li>
            <li><a href="tel:+79991234567" class="footer__link">+7 (999) 123-45-67</a></li>
          </ul>
        </div>
      </div>

      <div class="footer__bottom">
        <p class="footer__copyright">{{ site.copyright }}</p>
      </div>
    </Container>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background-color: $color-bg-dark;
  color: $color-text-on-dark;
  padding: $spacing-3xl 0 $spacing-xl;

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: $spacing-xl;

    @include up('md') {
      grid-template-columns: 2fr 1fr 1fr;
    }
  }

  &__brand {
    .logo {
      color: $color-text-on-dark;
    }
  }

  &__desc {
    margin-top: $spacing-md;
    color: $color-text-light;
    font-size: $font-size-sm;
  }

  &__heading {
    margin-bottom: $spacing-md;
    color: $color-text-on-dark;
    font-size: $font-size-base;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: $spacing-sm;
  }

  &__link {
    color: $color-text-light;
    font-size: $font-size-sm;
    transition: color $transition-fast;

    &:hover {
      color: $color-primary;
    }
  }

  &__bottom {
    margin-top: $spacing-2xl;
    padding-top: $spacing-lg;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  &__copyright {
    color: $color-text-light;
    font-size: $font-size-sm;
    text-align: center;
  }
}
</style>
