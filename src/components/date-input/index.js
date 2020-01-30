import React from 'react'
import { useFormContext, Controller } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import styled from 'styled-components'

import InputWrapper from '../input-wrapper'

import 'react-datepicker/dist/react-datepicker.css'
import './styles.css'

const StyledDatePicker = styled(DatePicker)`
  background-color: ${props =>
    props.disabled ? props.theme.colors.transparent : props.theme.colors.gray[0]};
  border: 1px solid
    ${props => (props.disabled ? props.theme.colors.gray.light : props.theme.colors.gray[0])};
  font-family: inherit;
  font-size: ${props => props.theme.fontSizes.small};
  padding: 0.6em 1em;
  height: 38px;
  border-radius: ${props => props.theme.radii.small};
  width: 100%;

  ::placeholder {
    color: ${props => props.theme.colors.gray.xdark};
  }
`

const DateInput = props => {
  const {
    disabled,
    onChange,
    placeholder,
    inputProps,
    required,
    alertText: alertTextOverride,
    ...otherProps
  } = props

  const { id = otherProps.name, label, inputStyle, name } = otherProps
  const { errors = {}, triggerValidation } = useFormContext()

  const getDateString = dateValue => dateValue instanceof Date ? dateValue.toDateString() : dateValue

  return (
    <InputWrapper
      required={required}
      disabled={disabled}
      alertText={alertTextOverride || (errors[name] ? errors[name].message : '')}
      {...otherProps}
    >
      <Controller
        as={
          <StyledDatePicker
            id={id}
            placeholderText={label}
            dateFormat={dateFormat}
            style={inputStyle}
            aria-label={label}
            aria-required={required}
            placeholderText={placeholder || label}
            disabled={disabled}
            onBlur={async () => await triggerValidation(name)}
          />
        }
        onChange={([dateValue]) => {
          const dateString = getDateString(dateValue)
          onChange(dateString)
          return { value: dateString }
        }}
        name={name}
      />
    </InputWrapper>
  )
}

DateInput.defaultProps = {
  dateFormat: 'dd/MM/yyyy',
  onChange: () => {},
}

export default DateInput
