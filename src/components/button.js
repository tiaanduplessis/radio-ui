import * as React from 'react'
import styled from 'styled-components'
import { typography, layout, space, buttonStyle } from 'styled-system'
import PropTypes from 'prop-types'

import theme from './theme'

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

const radius = props => ({
  borderRadius:
    props.shape === SHAPES.rounded
      ? props.theme.radii.large
      : props.theme.radii.small,
})

const size = props => ({
  fontSize:
    props.size === SIZES.large
      ? props.theme.fontSizes.medium
      : props.theme.fontSizes.small,
  padding:
    props.size === SIZES.compact
      ? '5px 10px'
      : props.size === SIZES.default
        ? '10px 20px'
        : '15px 40px',
})

const StyledButton = styled.button.attrs({
  type: 'button',
})`
  font-weight: ${props => props.theme.fontWeights.bold};
  font-family: ${props => props.theme.fonts[0]};
  min-width: 120px;
  width: ${props => (props.shape === SHAPES.block ? '100%' : 'auto')};
  border: none;
  cursor: pointer;
  transition: transform 0.1s;
  &:active {
    transform: ${props =>
    props.shape === SHAPES.block ? 'scale(0.99)' : 'scale(0.95)'};
  }

  ${buttonStyle}
  ${radius}
  ${size}
  ${space}
  ${layout}
  ${typography}
`

class Button extends React.PureComponent {
  static SHAPES = SHAPES
  static SIZES = SIZES

  static propTypes = {
    onClick: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
    shape: PropTypes.oneOf(Object.keys(SHAPES)),
    size: PropTypes.oneOf(Object.keys(SIZES)),
    ...space.propTypes,
    ...layout.propTypes,
    ...typography.propTypes,
  }

  static defaultProps = {
    shape: this.SHAPES.square,
    size: this.SIZES.default,
    theme: theme,
  }

  render() {
    return <StyledButton {...this.props}>{this.props.children}</StyledButton>
  }
}

export default Button
