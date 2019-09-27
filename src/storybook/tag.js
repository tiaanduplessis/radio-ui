import React from 'react'
import { storiesOf } from '@storybook/react'
import { Tag } from '../'

storiesOf('Tag', module)
  .addParameters({ component: Tag })
  .add('Basic', () => <Tag name="foo" value="bar" />)
  .add('Close', () => <Tag name="foo" value="bar" onClose={() => console.log('clicked')} />)
