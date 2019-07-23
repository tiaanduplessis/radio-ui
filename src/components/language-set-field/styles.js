import styled from 'styled-components'
import StyledInput from '../styled-input'

export const Container = styled.div`
  width: 100%;
  height: 2.7em;
  display: flex;
  align-items: center;
  border-radius: 0.5em;
  background-color: ${props => props.theme.colors.gray.xlight};
  margin-bottom: 1em;
`

export const Inner = styled.div`
  width: 14em;
  border: solid 1px ${props => props.theme.colors.gray.light};
  border-radius: 0.5em;
  background-color: ${props => props.theme.colors.white};
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 1em;
`

export const Input = styled(StyledInput)`
  height: 100%;
  border-radius: 0.5em;
`

export const LanguageText = styled.div`
  font-size: 0.8em;
  font-weight: 600;
`

export const DefaultText = styled.div`
  padding-left: 0.5em;
  font-size: 0.7em;
`
