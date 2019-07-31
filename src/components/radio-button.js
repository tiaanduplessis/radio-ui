/* eslint no-use-before-define: 0 */
import * as React from 'react'
import styled from 'styled-components'
import { space, layout } from 'styled-system'
import { RadioboxBlank, RadioboxMarked } from '@lessondesk/material-icons'

import theme from './theme'

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  font-family: ${props => props.theme.fonts[0]};
  font-size: ${props => props.theme.fontSizes.medium};
  line-height: ${props => props.theme.lineHeights.normal};
`

const StyledSpan = styled.span`
  margin-left: 0.5em;
`

class RadioButton extends React.PureComponent {
  static defaultProps = {
    theme: theme,
  }

  render() {
    const {
      children,
      theme,
      onChange,
      checked,
      onBlur,
      inputProps,
      labelProps,
      disabled,
      ...otherProps
    } = this.props

    const Icon = checked ? RadioboxMarked : RadioboxBlank

    return (
      <StyledLabel disabled={disabled} {...otherProps}>
        <Icon
          onChange={onChange}
          checked={checked}
          color={checked ? theme.colors.primary : theme.colors.gray.dark}
          {...inputProps}
        />
        {children && (<StyledSpan {...labelProps}>{children}</StyledSpan>)}
      </StyledLabel>
    )
  }
}

export default RadioButton
