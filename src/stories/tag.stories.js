import React from 'react'
import { Tag } from '../'

export default {
  component: Tag,
  title: 'Tag'
}

export const Basic = () => <Tag name="foo" value="bar" />

export const Close = () => <Tag name="foo" value="bar" onClose={() => console.log('clicked')} />
