import React from 'react'
import { storiesOf } from '@storybook/react'
import { useForm, FormContext } from 'react-hook-form'
import { Toggle } from '../'

import mdx from '../docs/toggle.mdx'

storiesOf('Input | Toggle', module)
  .addParameters({
    component: Toggle,
    docs: mdx,
  })
  .add('Unchecked', () => {
    const methods = useForm()
    const onSubmit = data => { console.log(data) }

    return (
      <FormContext {...methods} >
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Toggle label="Closed" />
        </form>
      </FormContext>
    )
  })
  .add('Checked', () => {
    const methods = useForm()
    const onSubmit = data => { console.log(data) }

    return (
      <FormContext {...methods} >
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Toggle label="Closed" checked={true} />
        </form>
      </FormContext>
    )
  })
