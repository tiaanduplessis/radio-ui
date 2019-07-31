import React from 'react'
import { storiesOf } from '@storybook/react'
import { ExpandingSearchInput } from '../'

storiesOf('Input | Expanding Search Input', module).add('Default', () => (
  <ExpandingSearchInput label="Default" />
))
