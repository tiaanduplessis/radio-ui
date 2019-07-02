import theme from './src/config/theme'

const {colors} = theme


export default {
  title: '🚌 School Bus',
  description: 'Lesson Desk component library"',
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
    // logo: {
    //   src: './logo.png',
    //   width: 180,
    // },
    colors: {
      primary: colors.primary,
    },
  },
}
