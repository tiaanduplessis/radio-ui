import React from 'react'
import { storiesOf } from '@storybook/react'

import { Card } from '../'

import cardReadme from '../docs/card.md'

storiesOf('Card', module)
  .addParameters({
    readme: {
      sidebar: cardReadme,
    },
  })
  .add('With title', () => <Card title="Example">content</Card>)
  .add('With description', () => (
    <Card title="Example" description="This is a example description">
      content
    </Card>
  ))
