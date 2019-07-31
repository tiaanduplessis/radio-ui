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
  margin-left: 1em;
`

const Icon = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.4em;
  height: 1.4em;
  padding: 0.2em;
  border: solid 0.1em;
  border-radius: ${props => props.theme.radii.full};

  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.primary};
  }

  ${({ checked }) => checked ? `
    border-color: ${props => props.theme.colors.primary};

    &::after {
      width: 100%;
      height: 100%;
    }
  ` : `
    border-color: ${props => props.theme.colors.gray.dark};
  `}

  &::after {

  }
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
