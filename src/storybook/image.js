import React from 'react'
import { storiesOf } from '@storybook/react'
import { Image } from '../'

storiesOf('Image', module)
  .addParameters({ component: Image })
  .add('Basic', () => (
    <Image src="https://www.lessondesk.com/assets/images/lessondesk/Icon.png" size="300px" />
  ))
  .add('Rounded', () => (
    <Image
      shape="rounded"
      src="https://www.lessondesk.com/assets/images/lessondesk/Icon.png"
      size="300px"
    />
  ))
  .add('Round', () => (
    <Image
      shape="round"
      src="https://www.lessondesk.com/assets/images/lessondesk/Icon.png"
      size="300px"
    />
  ))
  .add('Shadow', () => (
    <Image
      shape="round"
      boxShadow={3}
      src="https://www.lessondesk.com/assets/images/lessondesk/Icon.png"
      size="300px"
    />
  ))
