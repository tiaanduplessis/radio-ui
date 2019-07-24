import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ContainerAlt = styled.div`
  position: relative;
  height: 40px;
  display: flex;
  align-items: center;
  width: auto;
  min-width: 250px;
`

export const Input = styled.input`
  border: none;
  background: transparent;
  box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.09);
  border-radius: 10em;
  padding: 0.6em;
  margin-right: 1em;
  transition: transform 0.3s, opacity 0.3s;
  width: 15em;
  transform: ${props => (props.expanded ? 'scaleX(1)' : 'scaleX(0)')};
  transform-origin: right;
  opacity: ${props => (props.expanded ? '1' : '0')};
  font-size: inherit;
`

export const InputAlt = styled.input`
  border: none;
  background: #f0f0f0;
  color: #999;
  box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.09);
  border-radius: 10em;
  padding: 0.6em 1em;
  margin-right: 1em;
  transition: transform 0.3s, opacity 0.3s;
  width: 100%;
  transform: ${props => (props.expanded ? 'scaleX(1)' : 'scaleX(0)')};
  transform-origin: right;
  opacity: ${props => (props.expanded ? '1' : '0')};
  font-size: ${props => props.theme.fontSizes.small};
  font-family: inherit;
  height: 100%;
`
