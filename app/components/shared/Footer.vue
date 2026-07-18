<script setup>
</script>

<template>
  <footer class="footer" id="footer">
    <Container>
      <div class="footer__wrapper">
        <div class="footer__content">
          <div class="footer__title">Контакты</div>

          <div class="footer__contacts">
            <div class="footer__contacts-item">
              <div class="footer__contacts-label">По вопросам регистрации</div>
              <a href="mailto:ano@mossport.ru" target="_blank" class="footer__contacts-link">ano@mossport.ru</a>
            </div>
            <div class="footer__contacts-item">
              <div class="footer__contacts-label">Для СМИ</div>
              <a href="mailto:press@moscow.sport" target="_blank" class="footer__contacts-link">press@moscow.sport</a>
            </div>
          </div>

          <div class="footer__info">
            <p class="footer__info-text">
              Для аккредитации на событие отправьте письмо на электронный адрес со следующей информацией:
            </p>
            <ul>
              <li>название СМИ и программы, планируемая дата выхода материала;</li>
              <li>ФИО корреспондента / всех участников съемочной группы с контактными телефонами.</li>
            </ul>
          </div>

          <div class="footer__docs">
            <a href="/docs/policy.pdf" target="_blank">Политика конфиденциальности</a>
            <a href="/docs/reject.pdf" target="_blank">Отказ от претензий от участника</a>
            <a href="/docs/reject_child.pdf" target="_blank">Отказ от претензий от опекуна ребенка</a>
          </div>
        </div>
      </div>
    </Container>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  position: relative;
  background-color: $darkBlue;
  padding: 7rem 0 3.2rem;
  overflow: hidden;

  @media (max-width: $tablet) {
    padding: 4rem 0 2rem;
  }

  &__wrapper {
    position: relative;
  }

  &__content {
    position: relative;
    display: flex;
    flex-direction: column;
  }

  &__title {
    font-family: $mossport;
    font-size: 6.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: 0.86;
    text-transform: uppercase;
    color: $white;
    text-align: left;
    margin-bottom: 4rem;

    @media (max-width: $tablet) {
      font-size: 4rem;
      margin-bottom: 3.5rem;
    }
  }

  &__contacts {
    display: flex;
    flex-direction: row;
    gap: 6.6rem;
    margin-bottom: 4rem;

    @media (max-width: $tablet) {
      flex-direction: column;
      gap: 1.5rem;
      margin-bottom: 1.5rem;
    }
  }

  &__contacts-item {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (max-width: $tablet) {
      gap: 0.2rem;
    }
  }

  &__contacts-label {
    color: $white;
    font-family: $monserrat;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    text-transform: uppercase;

    @media (max-width: $tablet) {
      font-size: 1.2rem;
    }
  }

  &__contacts-link {
    color: $white;
    font-family: $monserrat;
    font-size: 4rem;
    font-style: normal;
    font-weight: 400;
    line-height: 3.2rem;
    text-decoration: none;

    @media (max-width: $tablet) {
      font-size: 2.4rem;
    }
  }

  &__info {
    color: $white;
    font-family: $monserrat;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    max-width: 105rem;

    @media (max-width: $tablet) {
      font-size: 1.2rem;
    }

    &-text {
      margin: 0;
    }

    ul {
      margin-top: 2.3rem;
      margin-bottom: 2.2rem;
      padding-left: 3rem;
      max-width: 85rem;

      @media (max-width: $tablet) {
        margin-top: 1rem;
        margin-bottom: 2.4rem;
      }
    }
  }

  &__docs {
    display: flex;
    flex-direction: row;
    gap: 5rem;

    @media (max-width: $tablet) {
      flex-direction: column;
      gap: 0.3rem;
    }

    a {
      color: $white;
      opacity: 0.8;
      font-family: $monserrat;
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 400;
      line-height: 2rem;

      @media (max-width: $tablet) {
        font-size: 1.2rem;
      }
    }
  }
}
</style>
