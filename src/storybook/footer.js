import React from 'react'
import { storiesOf } from '@storybook/react'

import { Footer } from '../'

import footerReadme from '../docs/footer.md'

storiesOf('Footer', module)
  .addParameters({
    readme: {
      sidebar: footerReadme,
    },
  })
  .add('Default', () => <Footer />)
  .add('Custom copyright', () => (
    <Footer copyright="This is a custom copyright" />
  ))
