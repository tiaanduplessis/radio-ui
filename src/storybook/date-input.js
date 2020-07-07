import React from 'react'
import { storiesOf } from '@storybook/react'
import { useForm, FormContext } from 'react-hook-form'
import { DateInput } from '../'

storiesOf('Input | Date Input', module)
  .addParameters({
    component: DateInput,
  })
  .add('Basic', () => {
    const methods = useForm()
    const onSubmit = data => { console.log(data) }

    return (
      <FormContext {...methods} >
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <DateInput id="1" name="1" label="Default" />
        </form>
      </FormContext>
    )
  })
