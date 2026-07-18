const type = "hero";
const title = "Создаём современные веб-сайты";
const subtitle = "Быстро, надёжно, красиво. Используем Nuxt 3 и SCSS.";
const button = { "text": "Узнать больше", "link": "#features" };
const secondaryButton = { "text": "Связаться", "link": "#contact" };
const backgroundImage = "components/HeroSection/bg-hero.jpg";
const hero = {
  type,
  title,
  subtitle,
  button,
  secondaryButton,
  backgroundImage
};
export {
  backgroundImage,
  button,
  hero as default,
  secondaryButton,
  subtitle,
  title,
  type
};
