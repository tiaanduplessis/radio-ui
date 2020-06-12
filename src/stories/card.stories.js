import React from 'react'
import { storiesOf } from '@storybook/react'

import { Card } from '../'

import mdx from '../docs/card.mdx'

storiesOf('Card', module)
  .addParameters({
    docs: mdx,
    component: Card,
  })
  .add('Empty', () => <Card />)
  .add('With title', () => <Card title="Example"></Card>)
