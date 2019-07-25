import React from 'react'
import { storiesOf } from '@storybook/react'
import { TranslateInput } from '../'
import { Formik } from 'formik'

storiesOf('Input | Translate Input', module)
  .add('With Formik', () => (
    <Formik
      initialValues={{
        test: [{
          value: '',
          locale: 'en-ZA',
          default: true,
        }, {
          value: '',
          locale: 'af',
        }]
      }}
    >
      {<TranslateInput
        label='With Formik'
        name='test'
        languages={[
          {
            value: 'English',
            code: 'en-ZA',
          },
          {
            value: 'Afrikaans',
            code: 'af'
          }
        ]}
      />}
    </Formik>
  ))
