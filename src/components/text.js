import styled from 'styled-components'
import { typography, space, color } from 'styled-system'
import { byTheme } from 'styled-funcs'

import theme from './theme'

const Text = styled.p.attrs(props => ({
  theme: props.theme || theme
}))`
  color: ${byTheme('colors.gray.xxdark')};
  ${typography}
  ${space}
  ${color}
`

Text.propTypes = {
  ...typography.propTypes,
  ...space.propTypes,
  ...color.propTypes,
}

Text.displayName = 'Text'

export default Text
