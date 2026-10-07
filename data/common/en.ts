export default {
  site: {
    title: 'My Website',
    description: 'A modern static website built with Nuxt 3',
    keywords: ['nuxt', 'vue', 'ssg', 'template'],
    url: 'https://example.com',
    ogImage: '/images/favicons/favicon.svg',
  },
  navigation: {
    navItems: [
      { label: 'Home', link: '#hero' },
      { label: 'Features', link: '#features' },
      { label: 'About us', link: '#about' },
      { label: 'Contact', link: '#contact' },
    ],
    images: {
      burger: '/images/burger.svg',
      close: '/images/close.svg',
    },
  },
  footer: {
    type: 'footer',
    title: 'Contact us',
    contacts: [
      { label: 'Registration enquiries', email: 'name@mail.ru' },
      { label: 'Press enquiries', email: 'pressame@mail.ru' },
    ],
    info: {
      text: 'To request media accreditation for the event, email us with the following information:',
      items: [
        'Name of the media outlet and programme, and the planned publication date;',
        'Full names and contact phone numbers of the correspondent and all members of the filming crew.',
      ],
    },
    docs: [
      { href: '/docs/policy.pdf', label: 'Privacy Policy' },
      { href: '/docs/reject.pdf', label: 'Participant Waiver' },
      { href: '/docs/reject_child.pdf', label: 'Parent/Guardian Waiver for a Child' },
    ],
  },
  ui: {
    languageSwitcher: 'Choose language',
    menu: 'Menu',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    cookieMessage: 'By continuing to use this site, you agree to the use of cookies. Cookies help us keep the site working properly. If you do not agree, change your browser settings.',
    cookieAccept: 'OK',
    sliderPrevious: 'Previous',
    sliderNext: 'Next',
  },
}
