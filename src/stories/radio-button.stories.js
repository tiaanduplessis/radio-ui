import React from 'react'
import { RadioButton } from '../'

export default {
  component: RadioButton,
  title: 'RadioButton'
}

export const Withoutlabel = () => <RadioButton />

export const WithLabel = () => <RadioButton>With Label</RadioButton>

export const Checked = () => <RadioButton checked>With Label</RadioButton>

export const Disabled = () => <RadioButton disabled>Disabled</RadioButton>
