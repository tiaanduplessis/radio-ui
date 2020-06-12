import React from 'react'
import { OverflowMenu } from '../'

export default {
  component: OverflowMenu,
  title: 'OverflowMenu'
}

export const PositionRight = () => (
  <OverflowMenu position="right">
    <h1>Item 1</h1>
    <h1>Item 2</h1>
  </OverflowMenu>
)

export const Bottom = () => (
  <OverflowMenu position="bottom">
    <h1>Item 1</h1>
    <h1>Item 2</h1>
  </OverflowMenu>
)
