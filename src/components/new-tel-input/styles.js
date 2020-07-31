import styled from 'styled-components'
import { colors, space, radii } from '../theme'

export const StyledContainer = styled.div`
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'calc(50% - 1em)'};
`

export const StyledList = styled.ul`
  position: absolute;
  border-radius: ${radii.small};
  background-color: ${colors.white};
  border: 1px solid ${colors.gray.xxlight};
  margin-top: calc(-${space[2]} - ${space[1]});
  width: ${({ fullWidth }) => fullWidth ? 'calc(100% - 2em)' : 'calc(50% - 2em)'};
`

export const StyledListItem = styled.li`
  cursor: pointer;
  padding: ${space[2]} ${space[2]};

  &:hover {
    background-color: ${colors.gray.xxlight};
  }
`

export const StyledNoOptionsListItem = styled(StyledListItem)`
  text-align: center;
  color: ${colors.gray.dark};
`