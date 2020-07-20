import React, { forwardRef } from 'react'
import { useFormContext } from 'react-hook-form'
import Flex from '../flex'
import getErrors from '../../utils/get-errors'
import { StyledContainer, StyledLabel, StyledAsterisk, StyledAlertText, StyledInput } from './styles'

const InputField = forwardRef(({
  id,
  name,
  type,
  label,
  value,
  onBlur,
  onClick,
  disabled,
  required,
  onChange,
  fullWidth,
  placeholder
}, ref) => {
  const { errors } = useFormContext()

  const alertText = getErrors(errors, name)

  return (
    <StyledContainer fullWidth={fullWidth}>
      <Flex justifyContent='space-between'>
        <StyledLabel htmlFor={id}>
          {label}
          {!disabled && required && <StyledAsterisk aria-label='required'>*</StyledAsterisk>}
        </StyledLabel>
        {alertText && <StyledAlertText>{alertText}</StyledAlertText>}
      </Flex>
      <StyledInput
        id={id}
        ref={ref}
        type={type}
        value={value}
        onBlur={onBlur}
        onClick={onClick}
        required={required}
        disabled={disabled}
        onChange={onChange}
        name={ref ? name : undefined}
        placeholder={placeholder || label}
      />
    </StyledContainer>
  )
})

InputField.defaultProps = {
  label: '',
  type: 'text',
  onBlur: () => {},
  onClick: () => {},
  onChange: () => {}
}

export default InputField