import styled from 'styled-components'
import { space, layout, flexbox } from 'styled-system'
import { byTheme } from 'styled-funcs'

import { flexCenter } from '../../utils/mixins'

export const StyledCard = styled.section`
  background-color: ${byTheme('colors.white')};
  border-radius: ${byTheme('radii.large')};
  border: 1px solid ${byTheme('colors.gray.xlight')};
  margin: ${byTheme('space[3]')} 0;
  padding: ${byTheme('space[3]')};
  box-shadow: ${byTheme('shadows[0]')};
  flex: 1;
  ${space}
  ${layout}
  ${flexbox}
`

export const StyledCardHeader = styled.header`
  position: relative;
`

export const StyledIndicator = styled.div`
  height: 16px;
  width: 6px;
  background: ${byTheme('colors.primary')};
  margin-right: ${byTheme('space[2]')};
  border-radius: 2px;
`

export const StyledCardTitle = styled.h3`
  font-size: ${byTheme('fontSizes.small')};
  font-family: ${byTheme('fonts[0]')};
  font-weight: ${byTheme('fontWeights.extrabold')};
  text-transform: uppercase;
  letter-spacing: ${byTheme('letterSpacings.tight')};
  color: ${byTheme('colors.gray[5]')};
`

export const StyledContent = styled.div`
  margin: ${byTheme('space[2]')};
`

export const TitleContainer = styled.div`
  ${flexCenter};
`

export const Container = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: column;
  margin: ${byTheme('space[3]')};
`

export const ActionsContainer = styled.div`
  position: absolute;
  top: 0;
  right: 1em;
  display: flex;
  align-items: center;
`

export const StyledCardDivider = styled.div`
  height: ${props => (props.showDivider ? '1em' : 0)};
  margin: ${props => (props.showDivider ? '0 1em 2em' : 0)};
  border-bottom: ${props =>
    props.showDivider ? `2px solid ${props.theme.colors.gray.xlight}` : 'none'};
`

export const StyledCardDescription = styled.p`
  margin: 1em 1em 1em 0em;
  color: ${props => props.theme.colors.gray[3]};
  font-weight: ${props => props.theme.fontWeights.thin};
  font-size: ${props => props.theme.fontSizes.small};
  padding-right: 5em;
`

export const StyledButton = styled.button`
  border: none;
  border-radius: 0.6em;
  width: 3.6em;
  height: 3.6em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: -4px 8px 6px #d6dadf;
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.blue[0]};
`
