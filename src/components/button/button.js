import * as React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import theme from '../../config/theme'

const { colors, fontWeights, fontSizes, fonts, borderRadius } = theme

const SHAPES = {
  square: 'square',
  round: 'round',
  rounded: 'rounded',
  block: 'block',
}

const VARIANTS = {
  primary: 'primary',
  secondary: 'secondary',
  minimal: 'minimal',
  disabled: 'disabled',
  delete: 'delete',
}

const SIZES = {
  compact: 'compact',
  default: 'default',
  large: 'large',
}

const StyledButton = styled.button.attrs({
  type: 'button',
})`
  font-size: ${props => {
    if (props.size === SIZES.large) {
      return fontSizes.medium
    }

    return fontSizes.small
  }};
  font-weight: ${fontWeights.bold};
  font-family: ${fonts.Montserrat};
  min-width: 120px;
  width: ${props => (props.shape === SHAPES.block ? '100%' : 'auto')};
  color: ${props => {
    if (props.variant === VARIANTS.secondary) {
      return colors.dark
    }

    if (props.variant === VARIANTS.minimal) {
      return colors.primary
    }

    if (
      props.variant === VARIANTS.delete ||
      props.variant === VARIANTS.disabled
    ) {
      return colors.white
    }

    return props.variant === VARIANTS.primary ? colors.white : colors.black
  }};
  background-color: ${props => {
    if (props.variant === VARIANTS.disabled) {
      return colors.gray
    }

    if (props.variant === VARIANTS.delete) {
      return colors.red
    }

    return props.variant === VARIANTS.primary ? colors.primary : colors.white
  }};
  padding: ${props => {
    if (props.size === SIZES.compact) {
      return '5px 10px'
    }

    if (props.size === SIZES.default) {
      return '10px 20px'
    }

    return '15px 40px'
  }};
  border: none;
  border-radius: ${props => {
    if (props.shape === SHAPES.rounded) {
      return borderRadius.large
    }

    return borderRadius.small
  }};
  box-shadow: ${props =>
    props.variant !== VARIANTS.minimal ? '0 2px 4px 0 rgba(0,0,0,.1)' : 'none'};
  cursor: pointer;
  pointer-events: ${props =>
    props.variant === VARIANTS.disabled ? 'none' : 'inherit'};
  margin: ${props => props.margin || '0px'};
  transition: transform 0.1s;

  &:active {
    transform: scale(0.95);
  }
`

class Button extends React.PureComponent {
  static SHAPES = SHAPES
  static VARIANTS = VARIANTS
  static SIZES = SIZES

  static propTypes = {
    onClick: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
    variant: PropTypes.oneOf(Object.keys(VARIANTS)),
    shape: PropTypes.oneOf(Object.keys(SHAPES)),
    size: PropTypes.oneOf(Object.keys(SIZES)),
    margin: PropTypes.string,
  }

  static defaultProps = {
    variant: this.VARIANTS.primary,
    shape: this.SHAPES.square,
    size: this.SIZES.default,
  }

  render() {
    return <StyledButton {...this.props}>{this.props.children}</StyledButton>
  }
}

export default Button
