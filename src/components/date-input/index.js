import React from 'react'
import { useFormContext } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import styled from 'styled-components'
import getErrors from '../../utils/get-errors'

import InputWrapper from '../input-wrapper'

import 'react-datepicker/dist/react-datepicker.css'
import './styles.css'

const StyledDatePicker = styled(DatePicker)`
  background-color: ${props =>
    props.disabled ? props.theme.colors.gray[0] : props.theme.colors.white};
  border: ${props => `1px solid ${props.theme.colors.gray[0]}`};
  font-family: inherit;
  font-size: ${props => props.theme.fontSizes.small};
  padding: 0.6em 1em;
  height: 25px;
  border-radius: ${props => props.theme.radii.small};
  width: 100%;

  ::placeholder {
    color: ${props => props.theme.colors.gray.dark};
  }
`

const DateInput = ({
  disabled,
  onChange,
  placeholder,
  dateFormat,
  inputProps,
  required,
  alertText: alertTextOverride,
  ...otherProps
}) => {
  const { id = otherProps.name, label, inputStyle, name } = otherProps
  const { errors, watch, triggerValidation, setValue, register, reset, getValues } = useFormContext()
  const currentValue = watch(name)

  const getDateString = () => currentValue ? new Date(currentValue).toDateString() : ''

  return (
    <InputWrapper
      required={required}
      disabled={disabled}
      alertText={alertTextOverride || getErrors(errors, name)}
      {...otherProps}
    >
      <StyledDatePicker
        id={id}
        name={name}
        placeholderText={label}
        dateFormat={dateFormat}
        style={inputStyle}
        aria-label={label}
        aria-required={required}
        placeholderText={placeholder || label}
        disabled={disabled}
        value={getDateString(currentValue)}
        onBlur={async () => await triggerValidation(name)}
        onChange={async value => {
          setValue(name, value.toISOString())
          await triggerValidation(name)
          const values = getValues()
          reset(values)
          onChange(value)
        }}
        ref={register({ name })}
      />
    </InputWrapper>
  )
}

DateInput.defaultProps = {
  dateFormat: 'dd/MM/yyyy',
  onChange: () => {},
}

export default DateInput
