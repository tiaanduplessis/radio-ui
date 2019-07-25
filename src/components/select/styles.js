import styled from 'styled-components'


export const Label = styled.label`
  display: block;
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.gray.xxxdark};
  font-size: ${props => props.theme.fontSizes.xsmall};
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
