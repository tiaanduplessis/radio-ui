import styled from 'styled-components'

import theme from '../../config/theme'

const {
  colors,
  fontWeights,
  borderRadius,
  fontSizes,
  fonts,
  letterSpacing,
} = theme

export const StyledCard = styled.section`
  background-color: ${colors.white};
  border-radius: ${borderRadius.default};
  margin: ${props => props.margin || '1em 0'};
  padding: ${props => props.padding || '1.5em'};
  box-shadow: 0 0 8px 0 rgba(44, 44, 44, 0.1);
  flex: 1;
`

export const StyledCardHeader = styled.header`
  position: relative;
`

export const StyledCardTitle = styled.h2`
  font-size: ${fontSizes.small};
  font-family: ${fonts.Montserrat};
  border-left: 5px solid ${colors.primary};
  padding: 0 0.5em;
  text-transform: uppercase;
  letter-spacing: ${letterSpacing.tight};
  color: ${colors.darkGray};
  margin: 1em;
`

export const StyledCardDescription = styled.p`
  margin: 1em 1em 2em;
  padding-bottom: 2em;
  border-bottom: 3px solid #f4f4f4;
  color: #77797a;
  font-weight: ${fontWeights.light};
  font-size: ${fontSizes.small};
  padding-right: 5em;
`

export const StyledContent = styled.div`
  margin: 1em;
`
