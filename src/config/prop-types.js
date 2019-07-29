import PropTypes from 'prop-types'
import { layout, space } from 'styled-system'

export default {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  alertText: PropTypes.string,
  inputStyle: PropTypes.object,
  ...layout.propTypes,
  ...space.propTypes,
}
