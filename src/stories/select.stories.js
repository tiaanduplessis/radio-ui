import React from 'react'
import { storiesOf } from '@storybook/react'
import { FormContext, useForm } from 'react-hook-form'
import { Select } from '../'

const options = [{ label: 'option 1', value: '1' }, { label: 'option 2', value: '2' }]

storiesOf('Input | Select', module)
  .addParameters({ component: Select })
  .add('Empty', () =>  {
    const methods = useForm()
    const onSubmit = data => { console.log(data) }

    return (
      <FormContext {...methods} >
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Select name="1" placeholder="Empty" />
        </form>
      </FormContext>
    )
  })

  .add('With options', () =>  {
    const methods = useForm()
    const onSubmit = data => { console.log(data) }

    return (
      <FormContext {...methods} >
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Select options={options} label="Label" name="2" />
        </form>
      </FormContext>
    )
  })
  .add('White + Bordered', () =>  {
    const methods = useForm()
    const onSubmit = data => { console.log(data) }

    return (
      <FormContext {...methods} >
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Select variant="light" options={options} />
        </form>
      </FormContext>
    )
  })
  .add('White + Rounded', () =>  {
    const methods = useForm()
    const onSubmit = data => { console.log(data) }

    return (
      <FormContext {...methods} >
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Select shape="rounded" variant="light" hasShadow options={options} />
        </form>
      </FormContext>
    )
  })
  .add('Disabled', () =>  {
    const methods = useForm()
    const onSubmit = data => { console.log(data) }

    return (
      <FormContext {...methods} >
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Select disabled options={options} />
        </form>
      </FormContext>
    )
  })
