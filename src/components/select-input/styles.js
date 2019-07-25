import styled from 'styled-components'

import fonts from '../../../config/fonts'

export const Label = styled.label`
  display: block;
  font-weight: ${fonts.weights.bold};
  font-family: ${fonts.primaryFamily};
  color: #525252;
  font-size: ${fonts.sizes.xsmall};
  margin-bottom: 0.4em;
`

export const InputContainer = styled.div`
  min-width: ${({ minWidth }) => minWidth || '300px'};
  width: ${({ width }) => width || '48%'};
  margin-bottom: 1.5em;
  position: relative;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'unset')};
  @media (max-width: 990px) {
    width: 100%;
  }
`
