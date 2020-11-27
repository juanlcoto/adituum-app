const settings = {
  name: 'adituum-app',
  state: {
    frontity: {
      url: 'https://adituum.com',
      title: 'Intranet para promotoras',
      description: 'Intranet personalizada para promotoras inmobiliarias'
    }
  },
  packages: [
    {
      name: 'adituum'
    },
    {
      name: '@frontity/wp-source',
      state: {
        source: {
          url: 'https://wp.adituum.com',
          api: 'https://wp.adituum.com/wp-json'
        }
      }
    },
    '@frontity/tiny-router',
    '@frontity/html2react',
    'frontity-contact-form-7',
    '@frontity/head-tags'
  ]
}

export default settings
