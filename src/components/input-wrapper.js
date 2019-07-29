import React from 'react'
import styled from 'styled-components'
import { layout, space } from 'styled-system'

import theme from './theme'

const StyledLabel = styled.label`
  display: block;
  font-family: inherit;
  color: ${props => props.theme.colors.gray.xxdark};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.xsmall};
  margin-bottom: 0.4em;
`

StyledLabel.displayName = 'InputLabel'


const StyledInputContainer = styled.div`
  min-width: ${({ minWidth }) => minWidth || '300px'};
  width: ${({ width }) => width || '48%'};
  margin-bottom: 1.5em;
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
  font-size: ${props => props.theme.fontSizes.xsmall};
  font-style: italic;
  color: ${props => props.theme.colors.red[1]};
  font-weight: ${props => props.theme.fontWeights.bold};
`

StyledAlertText.displayName = 'StyledAlertText'

const InputWrapper = ({
  id,
  label,
  children,
  alertText,
  alertStyle,
  containerStyle,
  labelStyle,
  required,
  ...otherProps
}) => {
  return (
    <StyledInputContainer style={containerStyle} {...otherProps}>
      <StyledLabel
        htmlFor={id}
        required={required}
        style={labelStyle}
      >
        {label}
      </StyledLabel>
      {children}
      {alertText && (
        <StyledAlertText style={alertStyle}>
          {alertText || alertTextOverride}
        </StyledAlertText>
      )}
    </StyledInputContainer>
  )
}

export default InputWrapper
