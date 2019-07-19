import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import { Pill } from '../'

storiesOf('Pill', module)
  .add('Active', () => <Pill variant={text('Variant', 'active')}>Active</Pill>)
  .add('Inactive', () => (
    <Pill variant={text('Variant', 'inactive')}>Inactive</Pill>
  ))
