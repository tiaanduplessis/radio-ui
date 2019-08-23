import { create } from '@storybook/theming';

import theme from '../src/components/theme'

export default create({
  base: 'light',

  colorPrimary: theme.colors.primary,
  colorSecondary: theme.colors.gray[3],

  // UI
  appBg: theme.colors.white,
  appContentBg: theme.colors.white,
  appBorderColor: theme.colors.gray[1],
  appBorderRadius: theme.radii[1],

  // Typography
  fontBase: theme.fonts[0],
  fontCode: 'monospace',

  // Text colors
  textColor: theme.colors.dark,

  // Toolbar default and active colors
  barTextColor: theme.colors.gray[3],
  barSelectedColor: theme.colors.primary,
  barBg: theme.colors.white,

  // Form colors
  inputBg: theme.colors.white,
  inputBorder: theme.colors.gray[0],
  inputTextColor: theme.colors.black,
  inputBorderRadius: theme.radii[1],

  brandTitle: 'Lesson Desk | Schoolbus',
  brandUrl: 'https://www.lessondesk.com/',
  brandImage: 'https://individual.lessondesk.com/login-logo.507057cf.svg',
});
