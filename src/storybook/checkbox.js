import React from 'react'
import { storiesOf } from '@storybook/react'
import { Checkbox } from '../'

import checkboxReadme from '../docs/checkbox.md'

storiesOf('Input | Checkbox', module)
  .addParameters({
    readme: {
      sidebar: checkboxReadme,
    },
  })
  .add('Without label', () => <Checkbox />)
  .add('With Label', () => <Checkbox>With Label</Checkbox>)
  .add('Checked', () => <Checkbox checked>With Label</Checkbox>)
  .add('Disabled', () => <Checkbox disabled>Disabled</Checkbox>)
