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
  justify-content: space-between;
  margin: ${byTheme('space[3]')};
`

export const ActionsContainer = styled.div`
  position: absolute;
  top: 0;
  right: 1em;
  display: flex;
  align-items: center;
`
