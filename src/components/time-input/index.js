import React from 'react'
import { useFormContext } from 'react-hook-form'
import { StyledInput } from './styles'
import InputWrapper from '../input-wrapper'
import theme from '../theme'
import defaultPropTypes from '../../config/prop-types'

const TimeInput = ({
  alertText: alertTextOverride,
  disabled,
  value,
  onBlur,
  onChange,
  inputProps,
  required,
  ...otherProps
}) => {
  const { id = otherProps.name, label, placeholder, inputStyle, name } = otherProps
  const { register, errors, triggerValidation } = useFormContext()

  return (
    <InputWrapper alertText={alertTextOverride || errors[name] ? errors[name].message : ''} required={required} {...otherProps}>
      <StyledInput
        id={id}
        style={inputStyle}
        aria-label={label}
        aria-required={required}
        placeholder={placeholder || label}
        disabled={disabled}
        name={name}
        onChange={onChange}
        onBlur={async () => await triggerValidation({ name })}
        ref={register}
        {...inputProps}
      />
    </InputWrapper>
  )
}

TimeInput.propTypes = defaultPropTypes

TimeInput.defaultProps = {
  label: '',
  inputStyle: {},
  theme: theme,
}

export default TimeInput