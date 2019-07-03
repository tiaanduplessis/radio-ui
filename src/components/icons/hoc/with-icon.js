import * as React from 'react'
import PropTypes from 'prop-types'

import theme from '../../../config/theme'

import Button, { VARIANTS } from '../components/button'

const { colors } = theme

const DEFAULT_ICON_SIZE = 24

const withIcon = SVG =>
  class Icon extends React.PureComponent {
    static propTypes = {
      variant: PropTypes.oneOf(Object.keys(VARIANTS)),
      color: PropTypes.string,
    }

    static defaultProps = {
      color: colors.darkGray,
    }

    static VARIANTS = VARIANTS

    render() {
      const { color, onClick } = this.props

      if (typeof onClick === 'function') {
        return (
          <Button {...this.props}>
            <SVG color={color} size={DEFAULT_ICON_SIZE} />
          </Button>
        )
      }

      return <SVG color={color} size={DEFAULT_ICON_SIZE} />
    }
  }

export default withIcon
