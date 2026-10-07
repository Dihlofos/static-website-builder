export default {
  site: {
    title: 'Мой сайт',
    description: 'Современный статический сайт на Nuxt 3',
    keywords: ['nuxt', 'vue', 'ssg', 'template'],
    url: 'https://example.com',
    ogImage: '/images/favicons/favicon.svg',
  },
  navigation: {
    navItems: [
      { label: 'Главная', link: '#hero' },
      { label: 'Возможности', link: '#features' },
      { label: 'О нас', link: '#about' },
      { label: 'Контакты', link: '#contact' },
    ],
    images: {
      burger: '/images/burger.svg',
      close: '/images/close.svg',
    },
  },
  footer: {
    type: 'footer',
    title: 'Контакты',
    contacts: [
      { label: 'По вопросам регистрации', email: 'name@mail.ru' },
      { label: 'Для СМИ', email: 'pressame@mail.ru' },
    ],
    info: {
      text: 'Для аккредитации на событие отправьте письмо на электронный адрес со следующей информацией:',
      items: [
        'название СМИ и программы, планируемая дата выхода материала;',
        'ФИО корреспондента / всех участников съемочной группы с контактными телефонами.',
      ],
    },
    docs: [
      { href: '/docs/policy.pdf', label: 'Политика конфиденциальности' },
      { href: '/docs/reject.pdf', label: 'Отказ от претензий от участника' },
      { href: '/docs/reject_child.pdf', label: 'Отказ от претензий от опекуна ребенка' },
    ],
  },
  ui: {
    languageSwitcher: 'Выбор языка',
    menu: 'Меню',
    openMenu: 'Открыть меню',
    closeMenu: 'Закрыть меню',
    cookieMessage: 'Продолжая пользоваться сайтом, вы соглашаетесь с условиями обработки cookie-файлов. Это необходимо для качественной работы сайта. Если вы не согласны, установите специальные настройки в браузере.',
    cookieAccept: 'Ок',
    sliderPrevious: 'Назад',
    sliderNext: 'Вперёд',
  },
}
