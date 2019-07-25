import React from 'react'
import { storiesOf } from '@storybook/react'
import { RangeInput } from '../'
import { Formik } from 'formik'

storiesOf('Input | Range Input', module)
  .add('Default', () => (
    <RangeInput
      label='Price (per learner)'
      name='price'
      metric='R'
    />
  ))
  .add('With Formik', () => (
    <Formik
      initialValues={{
        price: [0, 0]
      }}
    >
      <RangeInput
        label='Price (per learner)'
        name='price'
        metric='R'
      />
    </Formik>
  ))
