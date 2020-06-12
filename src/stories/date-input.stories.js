import React from 'react'
import { FormContext, useForm } from 'react-hook-form'
import { DateInput } from '../'

export default {
  component: DateInput,
  title: 'Input | Date Input',
};

export const Basic = () => {
  const methods = useForm()
  const onSubmit = data => { console.log(data) }
  return (
    <FormContext {...methods} >
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <DateInput id="1" name="1" label="Default" />
      </form>
    </FormContext>
  )
}
