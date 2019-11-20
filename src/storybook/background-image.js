import React from 'react'
import { storiesOf } from '@storybook/react'
import { BackgroundImage } from '../'

storiesOf('BackgroundImage', module)
  .addParameters({ component: BackgroundImage })
  .add('Basic', () => (
    <BackgroundImage
      source="https://avatars1.githubusercontent.com/u/53628491?s=400&u=25953147f2bc709ab3a8b65adb52e81a857edcef&v=4"
      size="300px"
    />
  ))
