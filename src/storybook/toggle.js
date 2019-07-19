import React from 'react'
import { storiesOf } from '@storybook/react'
import { Toggle } from '../'

storiesOf('Toggle', module)
  .add('Unchecked', () => <Toggle />)
  .add('Checked', () => <Toggle checked={true} />)
