import React from 'react'
import { useFormContext } from 'react-hook-form'
import { StyledInput } from './styles'
import InputWrapper from '../input-wrapper'
import theme from '../theme'
import defaultPropTypes from '../../config/prop-types'

const Input = ({
  alertText,
  disabled,
  onChange,
  inputProps,
  required,
  ...otherProps
}) => {
  const { id = otherProps.name, label, placeholder, inputStyle, name } = otherProps
  const { register, errors, triggerValidation } = useFormContext()
  const nestedName = name.split('.')

  const getErrors = () => {
    if (nestedName.length === 1) {
      return errors[name] && errors[name].message ? errors[name].message  : ''
    }
    else {
      return nestedName.reduce((obj, key) => (obj && obj[key] !== undefined) ? obj[key] : undefined, errors)
    }
  }

  return (
    <InputWrapper
      alertText={alertText || (getErrors() || '')}
      required={required}
      disabled={disabled}
      {...otherProps}
    >
      <StyledInput
        id={id}
        style={inputStyle}
        aria-label={label.toString()}
        aria-required={required}
        placeholder={placeholder || label}
        disabled={disabled}
        name={name}
        onChange={onChange}
        onBlur={async () => await triggerValidation(name)}
        ref={register}
        {...inputProps}
      />
    </InputWrapper>
  )
}

Input.propTypes = defaultPropTypes

Input.defaultProps = {
  label: '',
  inputStyle: {},
  theme: theme,
}

export default Input
