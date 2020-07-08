import styled from 'styled-components'
import CircularProgress from '@material-ui/core/CircularProgress'

const Loader = styled(CircularProgress).attrs({
  size: '4em'
})`
  margin: 4em;

  circle {
    color: #64afcc;
  }
`

export default Loader
