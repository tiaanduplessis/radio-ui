import React from 'react'
import { useFormContext } from 'react-hook-form'
import './styles.css'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

import InputWrapper from '../input-wrapper'

const defaultMasks = {
  za: '+.. .. ... ....',
}

const TelInput = props => {
  const {
    masks,
    value,
    onBlur,
    onChange,
    placeholder,
    defaultCountry = 'za',
    inputProps,
    disabled,
    alertText: alertTextOverride,
    ...otherProps
  } = props

  const { id = otherProps.name, label, name } = otherProps
  const { register, errors } = useFormContext()

  return (
    <InputWrapper disabled={disabled} alertText={alertTextOverride || errors[name] ? errors[name].message : ''} {...otherProps}>
      <PhoneInput
        onChange={onChange}
        disabled={disabled}
        name={name}
        masks={masks || defaultMasks}
        placeholder={placeholder || label}
        ref={register}
      />
    </InputWrapper>
  )
}

TelInput.defaultProps = {
  onChange: () => {}
}

export default TelInput
