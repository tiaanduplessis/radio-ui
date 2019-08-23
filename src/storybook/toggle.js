import React from 'react'
import { storiesOf } from '@storybook/react'
import { Toggle } from '../'

import mdx from '../docs/toggle.mdx'

storiesOf('Input | Toggle', module)
  .addParameters({
    component: Toggle,
    docs: mdx,
  })
  .add('Unchecked', () => <Toggle />)
  .add('Checked', () => <Toggle checked={true} />)
