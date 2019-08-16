import React from 'react'
import { Formik } from 'formik'
import { storiesOf } from '@storybook/react'
import { Select } from '../'

const options = [{ label: 'option 1', value: '1' }, { label: 'option 2', value: '2' }]

storiesOf('Input | Select', module)
  .add('Empty', () => <Select name="1" placeholder="Empty" />)
  .add('With options', () => <Select options={options} label="Label" name="2" />)
  .add('White + Bordered', () => <Select bordered isWhite options={options} />)
  .add('White + Rounded', () => <Select rounded isWhite hasShadow options={options} />)
  .add('With Box Shadow + Rounded', () => <Select rounded options={options} />)
  .add('Disabled', () => <Select disabled options={options} />)
  .add('Value', () => (
    <Formik
      initialValues={{
        option: options[0],
      }}
    >
      <Select name="option" options={options} />
    </Formik>
  ))
