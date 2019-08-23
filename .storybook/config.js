import React from 'react'
import { configure, addDecorator, addParameters } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'
import { jsxDecorator } from 'storybook-addon-jsx'

import { ThemeProvider, Box, Normalize } from '../src'

import theme from './theme'

addParameters({
  options: {
    theme,
  },
})

addDecorator(jsxDecorator)
addDecorator(story => (
  <ThemeProvider>
    <>
    <Normalize/>
    <Box p={3}>{story()}</Box>
    </>
  </ThemeProvider>
))

addDecorator(withA11y)
addDecorator(withKnobs)

const req = require.context('../src/storybook', true, /[\w\d\s]+\.(js|mdx)$/)

const load = () => {
  req.keys().forEach(key => {
    req(key)
  })
}

configure(load, module)
