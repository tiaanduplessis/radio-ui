import React from 'react'
import styled from 'styled-components'
import { layout, space } from 'styled-system'
import { byTheme } from 'styled-funcs'

const StyledLabel = styled.label`
  display: block;
  font-family: inherit;
  height: 1em;
  color: ${byTheme('colors.gray.xxdark')};
  font-weight: ${byTheme('fontWeights.bold')};
  font-size: ${byTheme('fontSizes.xsmall')};
  margin-bottom: ${byTheme('space[1]')};
`

const StyledInputContainer = styled.div`
  min-width: 300px;
  width: 45%;
  ${({ empty }) => !empty && 'margin-bottom: 1.5em;'}
  position: relative;

  @media (max-width: 990px) {
    width: 100%;
  }

  ${space}
  ${layout}
`

StyledInputContainer.displayName = 'InputContainer'

const StyledAlertText = styled.span.attrs({
  role: 'alert',
})`
  position: absolute;
  top: 0;
  right: 0;
  font-size: ${byTheme('fontSizes.xsmall')};
  font-style: italic;
  color: ${byTheme('colors.red[1]')};
  font-weight: ${byTheme('fontWeights.bold')};
`

const Required = styled.span`
  margin-left: ${byTheme('space[1]')};
  color: ${byTheme('colors.red[1]')};
  font-weight: ${byTheme('fontWeights.bold')};
`

const InputWrapper = ({
  id,
  label,
  children,
  alertText,
  alertStyle,
  containerStyle,
  labelStyle,
  required,
  disabled,
  ...otherProps
}) => (
  <StyledInputContainer empty={!label} style={containerStyle} {...otherProps}>
    <StyledLabel htmlFor={id} required={required} style={labelStyle}>
      {label}
      {!disabled && required && <Required aria-label="required">*</Required>}
    </StyledLabel>
    {children}
    {alertText && <StyledAlertText style={alertStyle}>{alertText}</StyledAlertText>}
  </StyledInputContainer>
)

export default InputWrapper
