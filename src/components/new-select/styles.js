import styled from 'styled-components'
import { colors, space, radii } from '../theme'

export const StyledContainer = styled.div``

export const StyledList = styled.ul`
  position: absolute;
  top: 4.4em;
  width: ${({ fullWidth }) => fullWidth ? 'calc(100% - 2em)' : 'calc(50% - 2em)'};
  border-radius: ${radii.small};
  background-color: ${colors.white};
  border: 1px solid ${colors.gray.xxlight};
`

export const StyledListItem = styled.li`
  cursor: pointer;
  padding: ${space[2]} ${space[2]};
  text-align: ${({ center }) => center ? 'center' : 'left'};

  &:hover {
    background-color: ${colors.gray.xxlight};
  }
`