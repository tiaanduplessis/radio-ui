import styled from 'styled-components'
import { layout, shadow } from 'styled-system'
import PropTypes from 'prop-types'
import { isMap } from 'styled-funcs'

import theme from './theme'

const SHAPES = {
  square: 'square',
  round: 'round',
  rounded: 'rounded',
}

const Image = styled.img.attrs(props => ({
  alt: '',
  theme: props.theme || theme,
  shape: props.shape || SHAPES.square,
}))`
  display: block;
  max-width: 100%;
  height: auto;
  border-radius: ${props =>
    isMap('shapde', {
      [SHAPES.round]: props.theme.radii.full,
      [SHAPES.rounded]: props.theme.radii.large,
      default: props.theme.radii.none,
    })(props)};
  ${layout}
  ${shadow}
`

Image.displayName = 'Image'

Image.propTypes = {
  ...layout.propTypes,
  ...shadow.propTypes,
  shape: PropTypes.oneOf(Object.keys(SHAPES)),
}

Image.SHAPES = SHAPES

export default Image
