import React from 'react'
import { storiesOf } from '@storybook/react'
import { DateInput } from '../'

storiesOf('Date Input', module)
  .add('Default', () => (
    <DateInput id='1' name='1' label={'Default'} />
  ))
