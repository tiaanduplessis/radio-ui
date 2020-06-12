import React from 'react'
import { FormContext, useForm } from 'react-hook-form'
import { Select } from '../'

const options = [{ label: 'option 1', value: '1' }, { label: 'option 2', value: '2' }]

export default {
  component: Select,
  title: 'Select'
}

export const Empty = () => () => {
  const methods = useForm()
  const onSubmit = data => { console.log(data) }

  return (
    <FormContext {...methods} >
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Select name="1" placeholder="Empty" />
      </form>
    </FormContext>
  )
}

export const WithOptions = () => {
  const methods = useForm()
  const onSubmit = data => { console.log(data) }

  return (
    <FormContext {...methods} >
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Select options={options} label="Label" name="2" />
      </form>
    </FormContext>
  )
}

export const WhiteBordered = () => {
  const methods = useForm()
  const onSubmit = data => { console.log(data) }

  return (
    <FormContext {...methods} >
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Select variant="light" options={options} />
      </form>
    </FormContext>
  )
}

export const WhiteRounded = () => {
  const methods = useForm()
  const onSubmit = data => { console.log(data) }

  return (
    <FormContext {...methods} >
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Select shape="rounded" variant="light" hasShadow options={options} />
      </form>
    </FormContext>
  )
}

export const Disabled = () => {
  const methods = useForm()
  const onSubmit = data => { console.log(data) }

  return (
    <FormContext {...methods} >
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Select disabled options={options} />
      </form>
    </FormContext>
  )
}
