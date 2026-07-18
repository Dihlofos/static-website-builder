<script setup>
import site from '~/../data/site.json'
import navItems from '~/../data/navigation.json'
</script>

<template>
  <footer class="footer">
    <Container>
      <div class="footer__grid">
        <div class="footer__brand">
          <a href="/" class="footer__logo">Template</a>
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
  background-color: #0f172a;
  color: #f1f5f9;
  padding: 64px 0 32px;

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;

    @media (min-width: 768px) {
      grid-template-columns: 2fr 1fr 1fr;
    }
  }

  &__logo {
    display: inline-block;
    font-weight: 700;
    font-size: 16px;
    color: #f1f5f9;
    text-decoration: none;

    &:hover {
      color: #0055ff;
    }
  }

  &__desc {
    margin-top: 16px;
    color: #94a3b8;
    font-size: 14px;
  }

  &__heading {
    margin-bottom: 16px;
    color: #f1f5f9;
    font-size: 16px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__link {
    color: #94a3b8;
    font-size: 14px;
    transition: color 150ms ease;

    &:hover {
      color: #0055ff;
    }
  }

  &__bottom {
    margin-top: 48px;
    padding-top: 24px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  &__copyright {
    color: #94a3b8;
    font-size: 14px;
    text-align: center;
  }
}
</style>
