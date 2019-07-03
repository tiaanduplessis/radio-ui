import * as React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import theme from '../../config/theme'

const { colors, fontWeights, borderRadius, fontSizes, fonts } = theme

const VARIANTS = {
  active: 'active',
  inactive: 'inactive',
}

const StyledPill = styled.button.attrs({
  type: 'button',
})`
  background-color: ${colors.transparent};
  color: ${props =>
    props.variant === VARIANTS.active ? '#faa221' : colors.grayExtraDark};
  padding: 1em;
  min-width: 80px;
  border-radius: ${borderRadius.large};
  box-shadow: ${props =>
    props.variant === VARIANTS.active
      ? '0 2px 5px 3px rgba(213, 213, 213, 0.39)'
      : 'none'};
  border: none;
  font-size: ${fontSizes.small};
  font-weight: ${fontWeights.bold};
  font-family: ${fonts.Montserrat};
`

class Pill extends React.PureComponent {
  static VARIANTS = VARIANTS

  static propTypes = {
    variant: PropTypes.oneOf(Object.keys(VARIANTS)),
  }

  render() {
    return <StyledPill {...this.props} />
  }
}

export default Pill
