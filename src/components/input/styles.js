import styled from 'styled-components'
import { byTheme } from 'styled-funcs'

export const StyledInput = styled.input.attrs({
  type: 'text',
})`
  background-color: ${byTheme('colors.gray[0]')};
  border: 1px solid ${byTheme('colors.gray[0]')};
  font-family: inherit;
  font-size: ${byTheme('fontSizes.small')};
  padding: ${byTheme('space[1]')} ${byTheme('space[2]')};
  height: 35px;
  color: ${byTheme('colors.gray[7]')};
  border-radius: ${byTheme('radii.small')};
  width: 100%;

  &:disabled {
    background-color: ${byTheme('colors.transparent')};
    border: 1px solid ${byTheme('colors.gray.default')};
  }

  ::placeholder {
    color: ${byTheme('colors.gray[5]')};
  }

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    /* stylelint-disable-next-line property-no-vendor-prefix */
    -webkit-appearance: none;
    margin: 0;
  }
`
