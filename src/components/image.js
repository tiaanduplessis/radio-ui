import styled from 'styled-components'
import { layout, shadow } from 'styled-system'

import theme from './theme'

const SHAPES = {
  square: 'square',
  round: 'round',
  rounded: 'rounded',
}

const shape = props => {
  if (props.shape === SHAPES.round) {
    return { borderRadius: props.theme.radii.full }
  }

  if (props.shape === SHAPES.rounded) {
    return { borderRadius: props.theme.radii.large }
  }

  return props.theme.radii.none
}

const Image = styled.img.attrs({
  alt: '',
})`
  display: block;
  max-width: 100%;
  height: auto;
  ${shape}
  ${layout}
  ${shadow}
`

Image.displayName = 'Image'

Image.propTypes = {
  ...layout.propTypes,
}

Image.defaultProps = {
  theme: theme,
  shape: SHAPES.square,
}

export default Image
