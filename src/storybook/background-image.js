import React from 'react'
import { storiesOf } from '@storybook/react'
import { BackgroundImage } from '../'

storiesOf('BackgroundImage', module).add('Default', () => (
  <BackgroundImage source="http://placekitten.com/g/300/300" size="300px" />
))
