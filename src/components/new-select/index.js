import React, { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import styled from 'styled-components'
import { colors, radii, fontSizes, fonts } from '../theme'
import getErrors from '../../utils/get-errors'

//TODO: finish new select

const StyledInput = styled(TextField).attrs({
  variant: 'outlined',
  InputLabelProps: { shrink: true }
})`
  label {
    color: ${colors.black};
    position: static;
    font-weight: bold;

    .MuiInputLabel-asterisk {
      color: #ed7470;
    }
  }
`

const customInputProps = { notched: false }

const Select = ({ id, label, name, options, placeholder, disabled, required }) => {
  const { register, errors, triggerValidation, watch, setValue, getValues } = useFormContext()

  register({ name }, { required: { value: true, message: 'ERROR'} })
  const currentValue = watch(name)

  const helperText = getErrors(errors, name)

  useEffect(() => {
    console.log(getValues())
    console.log(errors)
  }, [currentValue])

  return (
    <Autocomplete
      id={id}
      options={options}
      disabled={disabled}
      getOptionLabel={option => option.label}
      value={options.find(({ value }) => value === currentValue) || null}
      onChange={(e, valueOption) => {
        if (valueOption) {
          setValue(name, valueOption.value)
        }
        else {
          setValue(name, '')
        }
      }}
      renderInput={params => {
        const { InputProps } = params
        
        return (
          <StyledInput
            {...params}
            name={name}
            label={label}
            required={required}
            placeholder={placeholder || label}
            InputProps={{ ...InputProps, ...customInputProps }}
            onBlur={async () => await triggerValidation(name)}
            helperText={helperText}
            error={helperText.length}
          />
        )
      }
      }
    />
  )
}

export default Select