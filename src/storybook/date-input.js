import React from 'react'
import { storiesOf } from '@storybook/react'
import { DateInput } from '../'

storiesOf('Input', module)
  .add('Without label', () => (
    <DateInput id='1' name='1' placeholder='Without label' />
  ))
