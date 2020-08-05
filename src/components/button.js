import * as React from 'react'
import styled from 'styled-components'
import { typography, layout, space, buttonStyle } from 'styled-system'
import { isMap, byTheme } from 'styled-funcs'
import PropTypes from 'prop-types'

const SHAPES = {
  square: 'square',
  round: 'round',
  rounded: 'rounded',
  block: 'block',
}

const SIZES = {
  compact: 'compact',
  default: 'default',
  large: 'large',
}

const StyledButton = styled.button.attrs(props => ({
  type: 'button',
  shape: props.shape || SHAPES.square,
  size: props.size || SIZES.default,
}))`
  font-weight: ${byTheme('fontWeights.bold')};
  font-family: ${byTheme('fonts[0]')};
  min-width: 120px;
  border: none;
  cursor: pointer;
  transition: transform 100ms;
  ${buttonStyle};
  border-radius: ${props =>
    isMap('shape', {
      [SHAPES.round]: props.theme.radii.full,
      [SHAPES.rounded]: props.theme.radii.large,
      default: props.theme.radii.small,
    })(props)};
  font-size: ${props =>
    isMap('size', {
      [SIZES.large]: props.theme.fontSizes.medium,
      default: props.theme.fontSizes.small,
    })(props)};
  width: ${isMap('shape', {
    [SHAPES.block]: '100%',
    default: 'auto',
  })};
  padding: ${isMap('size', {
    [SIZES.compact]: '5px 10px',
    [SIZES.default]: '10px 20px',
    [SIZES.large]: '15px 40px',
  })};

  &:active {
    transform: ${props => (props.shape === SHAPES.block ? 'scale(0.99)' : 'scale(0.95)')};
  }

  &:disabled {
    pointer-events: none;
    background-color: ${byTheme('colors.gray[0]')};
    color: ${byTheme('colors.gray[4]')};
    box-shadow: none;
  }

  ${space}
  ${layout}
  ${typography}
`

const Button = ({ children, ...props }) => <StyledButton {...props}>{children}</StyledButton>

Button.propTypes = {
  onClick: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
  shape: PropTypes.oneOf(Object.keys(SHAPES)),
  size: PropTypes.oneOf(Object.keys(SIZES)),
  ...space.propTypes,
  ...layout.propTypes,
  ...typography.propTypes,
}

Button.SHAPES = SHAPES
Button.SIZES = SIZES

Button.displayName = 'Button'

export default React.memo(Button)
