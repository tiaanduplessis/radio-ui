import styled from 'styled-components'
import { typography, space, color } from 'styled-system'

import theme from './theme'

const Text = styled.p`
  color: ${props => props.theme.colors.gray.xxdark};
  ${typography}
  ${space}
  ${color}
`

Text.defaultProps = {
  theme: theme,
}

Text.propTypes = {
  ...typography.propTypes,
  ...space.propTypes,
  ...color.propTypes,
}

Text.displayName = 'Text'

export default Text
