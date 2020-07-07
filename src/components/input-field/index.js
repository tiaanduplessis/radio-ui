import React from 'react'
import { useFormContext } from 'react-hook-form'
import { FormControl } from '@material-ui/core'
import Flex from '../flex'
import getErrors from '../../utils/get-errors'
import { Label, StyledInput, ErrorText } from './styles'

const InputField = ({
  id,
  label,
  name,
  type,
  placeholder,
  disabled,
  required
}) => {
  const { errors, triggerValidation } = useFormContext()

  const helperText = getErrors(errors, name)

  return (
    <FormControl>
      <Flex alignItems='center' justifyContent='space-between'>
        <Label htmlFor={id} required={required}>{label}</Label>
        <ErrorText>{helperText}</ErrorText>
      </Flex>
      <StyledInput
        id={id}
        name={name}
        label={label}
        required={required}
        disabled={disabled}
        type={type}
        placeholder={placeholder || label}
        onBlur={async () => await triggerValidation(name)}
        error={helperText.length}
      />
    </FormControl>
  )
}

export default InputField