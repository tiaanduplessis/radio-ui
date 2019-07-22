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
  return value.toDateString()
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
    alertText: alertTextOverride,
    ...otherProps
  } = props

  const {
    id,
    label,
    placeholder,
    inputStyle,
    name
  } = otherProps

  const { alertText, ...inputDefaults } = createDefaultInputProps({
    value,
    onBlur,
    onChange,
    name,
    formik,
  })

  return (
    <InputWrapper alertText={alertTextOverride || alertText} {...otherProps}>
      <StyledDatePicker
        {...inputDefaults}
        theme={theme}
        style={inputStyle}
        aria-label={label}
        aria-required={otherProps.required}
        placeholder={placeholder || label}
        disabled={disabled}
        name={name}
      />
      {/*<Icon name='calender_today' style={iconStyles} />*/}
    </InputWrapper>
  )
}

DateInput.defaultProps = {
  dateFormat: 'dd/MM/yyyy'
}

export default connect(DateInput)
