import React from 'react'

import { Card } from '../'

export default {
  component: Card,
  title: 'Card'
}

export const Empty = () => <Card />
export const WithTitle = () => <Card title="Example"></Card>
