import styled from 'styled-components'

import theme from '../../config/theme'

const { fontSizes, fontWeights, colors, borderRadius } = theme

export const StyledLabel = styled.label`
  display: block;
  font-family: inherit;
  color: ${colors.abbey};
  font-weight: ${fontWeights.bold};
  font-size: ${fontSizes.xsmall};
  margin-bottom: 0.4em;
`

export const StyledInputContainer = styled.div`
  min-width: 300px;
  width: ${props => props.width || '45%'};
  margin-bottom: 1.5em;
  position: relative;
  @media (max-width: 990px) {
    width: 100%;
  }
`

export const StyledInput = styled.input`
  background-color: ${props =>
    props.disabled ? colors.transparent : colors.grayExtraLight};
  border: 1px solid
    ${props => (props.disabled ? colors.gray : colors.grayExtraLight)};
  font-family: inherit;
  font-size: ${fontSizes.small};
  padding: 0.5em 1em;
  height: 35px;
  border-radius: ${borderRadius.small};
  width: 100%;

  ::placeholder {
    color: ${colors.grayDark};
  }

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    /* stylelint-disable-next-line property-no-vendor-prefix */
    -webkit-appearance: none;
    margin: 0;
  }
`

export const StyledErrorText = styled.span.attrs({
  role: 'alert',
})`
  position: absolute;
  top: 0;
  right: 0;
  font-size: ${fontSizes.xsmall};
  font-style: italic;
  color: ${colors.red};
  font-weight: ${fontWeights.bold};
`
