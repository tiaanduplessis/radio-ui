import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'
import { addReadme } from 'storybook-readme'

import { ThemeProvider, Box, Normalize } from '../src'

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
addDecorator(addReadme)

const req = require.context('../src/storybook', true, /[\w\d\s]+\.js$/)

const load = () => {
  req.keys().forEach(key => {
    req(key)
  })
}

configure(load, module)
