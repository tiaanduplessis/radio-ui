import React from 'react'
import { storiesOf } from '@storybook/react'
import { DateInput } from '../'
import { Formik } from 'formik'

storiesOf('Input | Date Input', module)
  .addParameters({ component: DateInput })
  .add('Basic', () => <DateInput id="1" name="1" label="Default" />)
  .add('With Formik', () => (
    <Formik>
      <DateInput label="With Formik" name="test" />
    </Formik>
  ))
