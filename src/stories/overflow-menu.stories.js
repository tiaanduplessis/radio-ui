import React from 'react'
import { storiesOf } from '@storybook/react'
import { OverflowMenu } from '../'

storiesOf('Overflow Menu', module)
  .addParameters({ component: OverflowMenu })
  .add('Position Right', () => (
    <OverflowMenu position="right">
      <h1>Item 1</h1>
      <h1>Item 2</h1>
    </OverflowMenu>
  ))
  .add('Bottom', () => (
    <OverflowMenu position="bottom">
      <h1>Item 1</h1>
      <h1>Item 2</h1>
    </OverflowMenu>
  ))
