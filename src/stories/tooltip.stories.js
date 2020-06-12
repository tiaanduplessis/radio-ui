import React from 'react'

import { Tooltip } from '../'

import mdx from '../docs/tooltip.mdx'

export default {
  component: Tooltip,
  title: 'Tooltip',
  parameters: {
    docs: mdx
  }
}

export const Basic = () => (
  <div>
    <Tooltip />
    <p data-tip="hello world">Tooltip</p>
  </div>
)
