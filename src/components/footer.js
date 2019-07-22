import * as React from 'react'
import styled from 'styled-components'

import Box from './box'

import theme from './theme'

const CopyrightText = styled.p`
  text-align: center;
  margin: 2em 0 0;
  color: ${props => props.theme.colors.gray[3]};
  font-size: ${props => props.theme.fontSizes.xsmall};
  font-family: ${props => props.theme.fonts[0]};
  font-weight: ${props => props.theme.fontWeights.bold};
`

CopyrightText.displayName = 'CopyrightText'

const Footer = ({ copyright, theme, children, ...props }) => (
  <Box theme={theme} {...props}>
    {children}
    <CopyrightText theme={theme}>{copyright}</CopyrightText>
  </Box>
)

Footer.defaultProps = {
  copyright: '2019 Lesson Desk (Pty) Ltd. All rights reserved.',
  theme: theme,
}

Footer.displayName = 'Footer'

export default Footer
