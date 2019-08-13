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
  .add('Empty', () => <Card />)
  .add('With title', () => <Card title="Example"></Card>)
  .add('With description', () => (
    <Card title="Example" description="This is a example description">
      content
    </Card>
  ))
  .add('With onAdd', () => (
    <Card
      title="Example"
      description="This is a example description"
      onAdd={() => console.log('adding')}
    >
      content
    </Card>
  ))
  .add('viewstate hiding description and actions.', () => (
    <Card
      viewState
      title="Example"
      description="This is a example description"
      onAdd={() => console.log('adding')}
    >
      content
    </Card>
  ))
