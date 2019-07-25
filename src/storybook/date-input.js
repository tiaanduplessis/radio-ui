import React from 'react'
import { storiesOf } from '@storybook/react'
import { DateInput } from '../'
import { Formik } from 'formik'

storiesOf('Input | Date Input', module)
  .add('Default', () => (
    <DateInput id='1' name='1' label='Default' />
  ))
  .add('With Formik', () => (
    <Formik>
      <DateInput
        label='With Formik'
        name='test'
      />
    </Formik>
  ))
