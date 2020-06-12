import React from 'react'

import { Tooltip } from '../'

export default {
  component: Tooltip,
  title: 'Tooltip'
}

export const Basic = () => (
  <div>
    <Tooltip />
    <p data-tip="hello world">Tooltip</p>
  </div>
)
