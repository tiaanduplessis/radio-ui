import React from 'react'
import { storiesOf } from '@storybook/react'
import { Image } from '../'

storiesOf('Image', module)
  .addParameters({ component: Image })
  .add('Basic', () => (
    <Image src="https://avatars1.githubusercontent.com/u/53628491?s=400&u=25953147f2bc709ab3a8b65adb52e81a857edcef&v=4" size="300px" />
  ))
  .add('Rounded', () => (
    <Image
      shape="rounded"
      src="https://avatars1.githubusercontent.com/u/53628491?s=400&u=25953147f2bc709ab3a8b65adb52e81a857edcef&v=4"
      size="300px"
    />
  ))
  .add('Round', () => (
    <Image
      shape="round"
      src="https://avatars1.githubusercontent.com/u/53628491?s=400&u=25953147f2bc709ab3a8b65adb52e81a857edcef&v=4"
      size="300px"
    />
  ))
  .add('Shadow', () => (
    <Image
      shape="round"
      boxShadow={3}
      src="https://avatars1.githubusercontent.com/u/53628491?s=400&u=25953147f2bc709ab3a8b65adb52e81a857edcef&v=4"
      size="300px"
    />
  ))
