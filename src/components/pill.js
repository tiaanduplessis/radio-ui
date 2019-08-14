import * as React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { space, layout } from 'styled-system'

import theme from './theme'

const VARIANTS = {
  active: 'active',
  inactive: 'inactive',
}

const StyledPill = styled.button.attrs({
  type: 'button',
})`
  background-color: ${props => props.theme.colors.transparent};
  color: ${props =>
    props.variant === VARIANTS.active ? props.theme.colors.primary : props.theme.colors.gray.xdark};
  padding: 1em;
  min-width: 80px;
  border-radius: ${props => props.theme.radii.full};
  box-shadow: ${props => (props.variant === VARIANTS.active ? props.theme.shadows[1] : 'none')};
  border: none;
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-family: ${props => props.theme.fonts[0]};
  ${space}
  ${layout}
`

StyledPill.displayName = 'Pill'

class Pill extends React.PureComponent {
  static VARIANTS = VARIANTS

  static defaultProps = {
    theme: theme,
    variant: VARIANTS.inactive,
  }

  static propTypes = {
    variant: PropTypes.oneOf(Object.keys(VARIANTS)),
    ...space.propTypes,
    ...layout.propTypes,
  }

  render() {
    return <StyledPill {...this.props} />
  }
}

export default Pill
