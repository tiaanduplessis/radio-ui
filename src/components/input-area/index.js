import React from 'react'
import { useFormContext } from 'react-hook-form'
import { StyledInputArea } from './styles'
import getErrors from '../../utils/get-errors'
import InputWrapper from '../input-wrapper'
import theme from '../theme'
import defaultPropTypes from '../../config/prop-types'

const InputArea = ({
  alertText,
  disabled,
  onChange,
  inputProps,
  required,
  ...otherProps
}) => {
  const { id = otherProps.name, label, placeholder, inputStyle, name } = otherProps
  const { register, errors, triggerValidation } = useFormContext()

  return (
    <InputWrapper
      alertText={alertText || getErrors(name, errors)}
      required={required}
      disabled={disabled}
      {...otherProps}
    >
      <StyledInputArea
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

InputArea.propTypes = defaultPropTypes

InputArea.defaultProps = {
  label: '',
  inputStyle: {},
  theme: theme,
}

export default InputArea
