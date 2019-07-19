import styled from 'styled-components'
import {
  space,
  layout,
  color,
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
} from 'styled-system'
import theme from './theme'

import { mapProps } from './utils'

const Flex = mapProps(({ wrap, align, justify, ...props }) => ({
  flexWrap: wrap ? 'wrap' : 'no-wrap',
  alignItems: align,
  justifyContent: justify,
  ...props,
}))(styled.div`
  display: flex;
  ${space}
  ${layout}
  ${color}
  ${alignItems}
  ${justifyContent}
  ${flexDirection}
  ${flexWrap}
`)

Flex.defaultProps = {
  theme,
}

Flex.propTypes = {
  ...space.propTypes,
  ...layout.propTypes,
  ...color.propTypes,
  ...alignItems.propTypes,
  ...justifyContent.propTypes,
  ...flexWrap.propTypes,
  ...flexDirection.propTypes,
}

Flex.displayName = 'Flex'

export default Flex
