import React, { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { FormControl, InputLabel, FormHelperText, OutlinedInput } from '@material-ui/core'
import styled from 'styled-components'
import Flex from '../flex'
import { colors, radii, fontSizes, fonts } from '../theme'
import getErrors from '../../utils/get-errors'

const Label = styled(InputLabel)`
  color: #5C6C7F !important;
  position: static !important;
  font-weight: bold !important;
  
  .MuiInputLabel-asterisk {
    color: #ed7470;
  }
`

const StyledInput = styled(OutlinedInput)`
  border-radius: 5px;
  border: 1px solid #eef2f4;

  input {
    color: #4a5b6d;
    padding: 0.6em;
    font-size: 0.875em;
  }

  .MuiOutlinedInput-notchedOutline {
    border: none;
  }
`

const ErrorText = styled(FormHelperText)`
  font-weight: bold !important;
`

const Input = ({
  id,
  label,
  name,
  placeholder,
  disabled,
  required
}) => {
  const { register, errors, triggerValidation, watch, setValue, getValues } = useFormContext()

  const helperText = getErrors(errors, name)

  const test = watch(name)

  useEffect(() => {
    console.log(getValues())
  }, [test])

  return (
    <FormControl>
      <Flex alignItems='center' justifyContent='space-between'>
        <Label htmlFor={id} shrink required={required}>{label}</Label>
        <ErrorText error>{helperText}</ErrorText>
      </Flex>
      <StyledInput
        id={id}
        name={name}
        label={label}
        required={required}
        disabled={disabled}
        placeholder={placeholder || label}
        variant='outlined'
        notched={false}
        onBlur={async () => await triggerValidation(name)}
        error={helperText.length}
        ref={register({ name }, { required: { value: true, message: 'ERROR'} })}
      />
    </FormControl>
  )
}

export default Input