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
    placeholder,
    defaultCountry = 'ZA',
    disabled,
    required,
    alertText: alertTextOverride,
    ...otherProps
  } = props

  const { id = otherProps.name, label, name } = otherProps
  const { register, errors, setValue, triggerValidation } = useFormContext()
  return (
    <InputWrapper
      required={required}
      disabled={disabled}
      alertText={alertTextOverride || errors[name] ? errors[name].message : ''}
      {...otherProps}
    >
      <PhoneInput
        id={id}
        onChange={value => setValue(name, value)}
        disabled={disabled}
        name={name}
        country={defaultCountry}
        onBlur={async () => await triggerValidation({ name })}
        masks={masks || defaultMasks}
        placeholder={placeholder || label}
        ref={register({ name })}
      />
    </InputWrapper>
  )
}

TelInput.defaultProps = {
  onChange: () => {},
}

export default TelInput
