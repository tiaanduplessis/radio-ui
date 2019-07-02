import * as React from 'react'

import withIcon from './hoc/with-icon'

const Add = ({ size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    preserveAspectRatio="xMidYMid meet"
  >
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill={color} />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
)

export default withIcon(Add)
