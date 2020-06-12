import React from 'react'
import { storiesOf } from '@storybook/react'
import { Checkbox } from '../'

export default {
  component: Checkbox,
  title: "Checkbox",
}

export const Withoutlabel = () => <Checkbox />
export const WithLabel = () => <Checkbox>With Label</Checkbox>
export const Checked = () => <Checkbox checked>With Label</Checkbox>
export const Disabled = () => <Checkbox disabled>Disabled</Checkbox>
