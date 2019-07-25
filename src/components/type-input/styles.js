import styled from 'styled-components'
import theme from '../theme'

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
    color: ${theme.colors.black};
    background-color: ${theme.colors.white};
    box-shadow: 0 0 1em 0 ${theme.colors.gray.default};
  `
      : `
    color: ${theme.colors.gray.dark};
    background-color: ${theme.colors.gray.xlight};
  `}
`
