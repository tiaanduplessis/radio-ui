import React from 'react'
import { useFormContext } from 'react-hook-form'
import InputField from '../input-field'

const Input = props => {
  const { name } = props
  const { register, errors, setValue } = useFormContext()

  return (
    <InputField
      {...props}
      onChange={e => setValue(name, e.target.value)} //TODO: check if you can find a way to remove this
      ref={register({ name }, { required: { value: true, message: 'Required'} })}
    />
  )
}

export default Input