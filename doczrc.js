import theme from './src/config/theme'

const {colors} = theme

export default {
  title: '🚌 School Bus',
  description: 'Lesson Desk component library"',
  menu: ['Getting Started'],
  htmlContext: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Montserrat:100,300,300i,400,400i,500,500i,600,600i,700,800&display=swap',
        },
         {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,600,600i,700,700i,800,800i&display=swap',
        },
      ],
    },
  },
  themeConfig: {
    colors: {
      primary: colors.primary,
      text: colors.black,
      sidebarText: colors.black,
      footerText: colors.black,
      link: colors.primary
    },
  },
}
