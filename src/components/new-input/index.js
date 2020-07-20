import React from 'react'
import { useFormContext } from 'react-hook-form'
import InputField from '../input-field'

const Input = props => {
  const { name } = props
  const { register, setValue, triggerValidation } = useFormContext()

  return (
    <InputField
      {...props}
      onChange={e => setValue(name, e.target.value)} //TODO: check if you can find a way to remove this
      onBlur={async () => await triggerValidation(name)}
      ref={register({ name }, { required: { value: true, message: 'Required'} })}
    />
  )
}

export default Input