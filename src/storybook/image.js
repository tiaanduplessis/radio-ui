import React from 'react'
import { storiesOf } from '@storybook/react'
import { Image } from '../'

storiesOf('Image', module)
  .add('Default', () => (
    <Image src="http://placekitten.com/g/300/300" size="300px" />
  ))
  .add('Rounded', () => (
    <Image
      shape="rounded"
      src="http://placekitten.com/g/300/300"
      size="300px"
    />
  ))
  .add('Round', () => (
    <Image shape="round" src="http://placekitten.com/g/300/300" size="300px" />
  ))
  .add('Shadow', () => (
    <Image
      shape="round"
      boxShadow={3}
      src="http://placekitten.com/g/300/300"
      size="300px"
    />
  ))
