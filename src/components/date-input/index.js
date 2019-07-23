import React from 'react'
import DatePicker from 'react-datepicker'
import styled from 'styled-components'
import { connect } from 'formik'

import 'react-datepicker/dist/react-datepicker.css'
import './styles.css'

import InputWrapper from '../input-wrapper'
import createDefaultInputProps from '../../utils/create-input-defaults'

const StyledDatePicker = styled(DatePicker)`
  background-color: ${props =>
    props.disabled ? props.theme.colors.transparent : props.theme.colors.gray.xlight};
  border: 1px solid
    ${props => (props.disabled ? props.theme.colors.gray.light : props.theme.colors.gray.xlight)};
  font-family: inherit;
  font-size: ${props => props.theme.fontSizes.small};
  padding: 0.6em 1em;
  height: 38px;
  border-radius: ${props => props.theme.radii.small};
  width: 100%;

  ::placeholder {
    color: ${props => props.theme.colors.gray.dark};
  }
`

const iconStyles = {
  position: 'absolute',
  right: 10,
  bottom: 7,
  pointerEvents: 'none'
}

function getDateString (value) {
  return value instanceof Date ? value.toDateString() : value
}

const DateInput = props => {
  const {
    dateFormat,
    formik,
    disabled,
    theme,
    value,
    onBlur,
    onChange,
    placeholder,
    inputProps,
    alertText: alertTextOverride,
    dateFormatter = getDateString,
    ...otherProps
  } = props

  const {
    id = otherProps.name,
    label,
    inputStyle,
    name,
    required
  } = otherProps

  const { alertText, ...inputDefaults } = createDefaultInputProps({
    value,
    onBlur,
    onChange,
    name,
    formik,
    alertText: alertTextOverride
  })
  const { hasFormik } = inputDefaults
  const defaultChangeHandler = hasFormik && (value => formik.setFieldValue(name, value))
  const defaultValue = hasFormik

  return (
    <InputWrapper alertText={alertTextOverride || alertText} {...otherProps}>
      <StyledDatePicker
        {...inputDefaults}
        onChange={onChange ? onChange : defaultChangeHandler}
        value={dateFormatter(value || inputDefaults.value)}
        
        style={inputStyle}
        aria-label={label}
        aria-required={required}
        placeholderText={placeholder || label}
        disabled={disabled}
        name={name}
        {...inputProps}
      />
      {/*<Icon name='calender_today' style={iconStyles} />*/}
    </InputWrapper>
  )
}

DateInput.defaultProps = {
  dateFormat: 'dd/MM/yyyy'
}

export default connect(DateInput)
