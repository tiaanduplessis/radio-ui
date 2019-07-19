import React from 'react'
import { storiesOf } from '@storybook/react'

import { Card } from '../'

storiesOf('Card', module)
  .add('With title', () => <Card title="Example">content</Card>)
  .add('With description', () => (
    <Card title="Example" description="This is a example description">
      content
    </Card>
  ))
