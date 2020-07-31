import React from 'react'
import { FormContext, useForm } from 'react-hook-form'
import { TelInput } from '../'
import NewTelInput from '../components/new-tel-input'

export default {
  component: TelInput,
  title: 'TelInput',
}

const options = [
  { label: 'option 1', value: '1' },
  { label: 'option 2', value: '2' },
]

export const New = () => {
  const methods = useForm()
  const onSubmit = data => {
    console.log(data)
  }

  return (
    <FormContext {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <NewTelInput id="new" name="new" label="New" options={options} />
      </form>
    </FormContext>
  )
}

export const Basic = () => {
  const methods = useForm()
  const onSubmit = data => {
    console.log(data)
  }

  return (
    <FormContext {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <TelInput id="1" name="1" label="Default" />
      </form>
    </FormContext>
  )
}
