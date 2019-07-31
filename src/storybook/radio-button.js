import React from 'react'
import { storiesOf } from '@storybook/react'
import { RadioButton } from '../'

storiesOf('Input | Radio', module)
  .add('Without label', () => <RadioButton />)
  .add('With Label', () => <RadioButton>With Label</RadioButton>)
  .add('Checked', () => <RadioButton checked>With Label</RadioButton>)
  .add('Disabled', () => <RadioButton disabled>Disabled</RadioButton>)
