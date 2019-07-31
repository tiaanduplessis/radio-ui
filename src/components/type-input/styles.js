import styled from 'styled-components'

export const Container = styled.div`
  height: 38px;
  display: flex;
  align-items: center;
`

export const Value = styled.button`
  padding: 0.3em 1em;
  margin-right: 1em;
  font-size: 1em;
  border-radius: 1.1em;
  border: none;
  cursor: pointer;

  ${({ selected }) =>
    selected
      ? `
    color: ${props => props.theme.colors.black};
    background-color: ${props => props.theme.colors.white};
    box-shadow: 0 0 1em 0 ${props => props.theme.colors.gray.default};
  `
      : `
    color: ${props => props.theme.colors.gray.dark};
    background-color: ${props => props.theme.colors.gray.xlight};
  `}
`
