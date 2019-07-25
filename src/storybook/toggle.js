import React from 'react'
import { storiesOf } from '@storybook/react'
import { Toggle } from '../'

import toggleReadme from '../docs/toggle.md'

storiesOf('Input | Toggle', module)
  .addParameters({
    readme: {
      sidebar: toggleReadme,
    },
  })
  .add('Unchecked', () => <Toggle />)
  .add('Checked', () => <Toggle checked={true} />)
