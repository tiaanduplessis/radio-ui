import * as React from 'react'

import withIcon from './hoc/with-icon'

const Help = ({ size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
  >
    <circle cx="12" cy="12" r="12" fill="none" />
    <path
      d="M21.3,21.762V23.35H16.62V21.042c0-2.657,4-4.159,4-5.745A1.852,1.852,0,0,0,18.758,13.5c-1.082,0-1.968.983-2.823,2.137L13,12.8C14.762,10.456,16.8,9,19.312,9,22.66,9,25.3,11.459,25.3,15.355c0,3.752-4,4.676-4,6.408ZM18.638,29.5A2.563,2.563,0,1,1,21.2,26.937,2.562,2.562,0,0,1,18.638,29.5Z"
      transform="translate(-7 -7)"
      fill={color}
      fillRule="evenodd"
    />
  </svg>
)

export default withIcon(Help)
