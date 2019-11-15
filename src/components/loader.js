import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Loader = styled.div`
  border-radius: 10em;
  width: 4em;
  height: 4em;
  margin: 4em;
  animation: ${rotate} 1s linear infinite;
  border-top: 0.4em solid #64afcc;
  border-right: 0.4em solid #64afcc;
  border-bottom: 0.4em solid #64afcc;
  border-left: 0.4em solid transparent;
`

export default Loader
