import React from 'react'
import { storiesOf } from '@storybook/react'
import useForm, { FormContext } from 'react-hook-form'
import { Input } from '../'

storiesOf('Input | Input', module)
  .addParameters({ component: Input })
  .add('Without label', () => {
    const methods = useForm()
    const onSubmit = data => { console.log(data) }

    return (
      <FormContext {...methods} >
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Input id="1" name="foo" placeholder="Without label" />
        </form>
      </FormContext>
    )
  }
)
  .add('With label', () => {
    const methods = useForm()
    const onSubmit = data => { console.log(data) }

    return (
      <FormContext {...methods} >
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Input id="2" label="Label" name="bar" />
        </form>
      </FormContext>
    )
  })
  .add('With required', () => {
    const methods = useForm()
    const onSubmit = data => { console.log(data) }

    return (
      <FormContext {...methods} >
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Input id="2" label="Label" name="baz" required />
        </form>
      </FormContext>
    )
  })
  .add('Disabled', () => {
    const methods = useForm()
    const onSubmit = data => { console.log(data) }

    return (
      <FormContext {...methods} >
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Input id="3" label="Disabled" name="bar" disabled />
        </form>
      </FormContext>
    )
  })
  .add('With alert', () => {
    const methods = useForm()
    const onSubmit = data => { console.log(data) }

    return (
      <FormContext {...methods} >
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Input id="4" label="With Alert" name="foo" alertText="Invalid input given" />
        </form>
      </FormContext>
    )
  })
