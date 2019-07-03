import * as React from 'react'

import withIcon from './hoc/with-icon'

const Download = ({ size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="19.765"
    height={size}
    viewBox={`0 0 19.765 ${size}`}
  >
    <path
      d="M58.015,8.471H52.368V0H43.9V8.471H38.25l9.882,9.882ZM38.25,21.176V24H58.015V21.176Z"
      transform="translate(-38.25)"
      fill={color}
    />
  </svg>
)

export default withIcon(Download)
