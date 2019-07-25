import React from 'react'
import { Formik } from 'formik'
import { storiesOf } from '@storybook/react'
import { Select } from '../'

const options = [
  {label: 'option 1', value: '1'},
  {label: 'option 2', value: '2'},
]

storiesOf('Input | Select', module)
  .add('Empty', () => (
    <Select name='1' placeholder='Empty' />
  ))
  .add('With options', () => <Select options={options} label='Label' name='2' />)
  .add('White', () => (
      <Select isWhite options={options} label='Label' name='2' />
  ))
  .add('White + Bordered', () => (
      <Select bordered isWhite options={options} label='Label' name='2' />
  ))
  .add('White + Rounded', () => (
      <Select rounded isWhite options={options} label='Label' name='2' />
  ))
