import styled from 'styled-components'

const Visuallyhidden = styled.span`
  border: 0;
  clip: rect(0 0 0 0);
  height: auto; /* new - was 1px */
  margin: 0; /* new - was -1px */
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap; /* 1 */
`

Visuallyhidden.displayName = 'Visuallyhidden'

export default Visuallyhidden
