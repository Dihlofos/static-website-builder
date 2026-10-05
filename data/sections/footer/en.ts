export default {
  type: 'footer',
  title: 'Contact us',
  contacts: [
    {
      label: 'Registration enquiries',
      email: 'name@mail.ru',
    },
    {
      label: 'Press enquiries',
      email: 'pressame@mail.ru',
    },
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
}
