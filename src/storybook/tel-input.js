import React from 'react'
import { storiesOf } from '@storybook/react'
import { TelInput } from '../'
import { Formik } from 'formik'

storiesOf('Tel Input', module)
  .add('Default', () => (
    <TelInput id='1' name='1' label='Default' />
  ))
  .add('With Formik', () => (
    <Formik>
      <TelInput
        label='With Formik'
        name='test'
      />
    </Formik>
  ))
