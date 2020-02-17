import styled from 'styled-components'
import { byTheme } from 'styled-funcs'

export const StyledInputArea = styled.textarea`
  background-color: ${byTheme('colors.white')};
  border: 1px solid ${byTheme('colors.gray[0]')};
  font-family: inherit;
  font-size: ${byTheme('fontSizes.small')};
  padding: ${byTheme('space[1]')} ${byTheme('space[2]')};
  min-height: 10em;
  resize: none;
  color: ${byTheme('colors.gray[7]')};
  border-radius: ${byTheme('radii.small')};
  width: 100%;

  &:disabled {
    background-color: ${byTheme('colors.gray[0]')};
  }

  ::placeholder {
    color: ${byTheme('colors.gray[4]')};
  }

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    /* stylelint-disable-next-line property-no-vendor-prefix */
    -webkit-appearance: none;
    margin: 0;
  }
`
