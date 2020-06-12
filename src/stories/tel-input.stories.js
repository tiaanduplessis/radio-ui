import React from 'react'
import { FormContext, useForm } from 'react-hook-form'
import { TelInput } from '../'

export default {
  component: TelInput,
  title: 'TelInput'
}

export const Basic = () => {
  const methods = useForm()
  const onSubmit = data => { console.log(data) }

  return (
    <FormContext {...methods} >
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <TelInput id="1" name="1" label="Default" />
      </form>
    </FormContext>
  )
}
