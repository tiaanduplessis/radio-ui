import React from 'react'
import { storiesOf } from '@storybook/react'
import { Checkbox } from '../'

storiesOf('Checkbox', module)
  .add('Without label', () => <Checkbox />)
  .add('With Label', () => <Checkbox>With Label</Checkbox>)
  .add('Checked', () => <Checkbox value={true}>With Label</Checkbox>)
  .add('Disabled', () => <Checkbox disabled>Disabled</Checkbox>)
