import React from 'react'
import { storiesOf } from '@storybook/react'
import { BackgroundImage } from '../'

storiesOf('BackgroundImage', module).add('Default', () => (
  <BackgroundImage
    source="https://www.lessondesk.com/assets/images/lessondesk/Icon.png"
    size="300px"
  />
))
