import styled from 'styled-components'

import theme from '../../config/theme'

const { colors, borderRadius } = theme

export const VARIANTS = {
  primary: 'primary',
  minimal: 'minimal',
  disabled: 'disabled',
}

export const Button = styled.button.attrs({
  type: 'button',
})`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${borderRadius.full};
  border: none;
  background-color: ${props => {
    if (props.variant === VARIANTS.disabled) {
      return colors.gray
    }

    if (props.variant === VARIANTS.minimal) {
      return colors.transparent
    }

    return colors.primary
  }};
  pointer-events: ${props =>
    props.variant === VARIANTS.disabled ? 'none' : 'inherit'};
  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.12), 0 2px 15px 0 rgba(0, 0, 0, 0.08);
  width: 38px;
  height: 38px;
  cursor: pointer;
  min-width: 38px;
`
