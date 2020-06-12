import React from 'react';
import { addDecorator } from '@storybook/react';
import { addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { themes } from '@storybook/theming';

import { ThemeProvider, Box, Normalize } from '../src'

import theme from '../src/components/theme'

addParameters({
  options: {
    theme: {
      ...themes.light,
      colorPrimary: theme.colors.primary,
      colorSecondary: theme.colors.gray[3],
      appBg: theme.colors.white,
      appContentBg: theme.colors.white,
      appBorderColor: theme.colors.gray[1],
      appBorderRadius: theme.radii[1],
      fontBase: theme.fonts[0],
      fontCode: 'monospace',
      textColor: theme.colors.dark,
      barTextColor: theme.colors.gray[3],
      barSelectedColor: theme.colors.primary,
      barBg: theme.colors.white,
      inputBg: theme.colors.white,
      inputBorder: theme.colors.gray[0],
      inputTextColor: theme.colors.black,
      inputBorderRadius: theme.radii[1],
      brandTitle: 'Radio Retail | UI',
      brandUrl: 'http://www.zapop.com/service/radioretail/',
      },
  },
});

addDecorator(withA11y);
addDecorator((story) => (
  <ThemeProvider>
    <>
      <Normalize />
      <Box p={3}>{story()}</Box>
    </>
  </ThemeProvider>
));
