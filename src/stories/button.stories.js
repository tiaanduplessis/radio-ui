import React from 'react'
import { Button } from '../'

export default {
  component: Button,
  title: 'Button',
}

export const Variants = () => (
  <>
    <Button>Default</Button>
    <Button variant="primary" m={2}>
      Primary
    </Button>
    <Button variant="secondary" m={2}>
      Secondary
    </Button>
    <Button variant="minimal" m={2}>
      Minimal
    </Button>
    <Button variant="danger" m={2}>
      Danger
    </Button>
    <Button variant="primary" m={2} disabled={true}>
      Disabled
    </Button>
  </>
)

export const Sizes = () => (
  <>
    <Button variant="primary" size="compact" m={2}>
      Compact
    </Button>
    <Button variant="primary" size="default" m={2}>
      Default
    </Button>
    <Button variant="primary" size="large" m={2}>
      Large
    </Button>
  </>
)

export const Shapes = () => (
  <>
    <Button shape="square" variant="primary" m={2}>
      Square
    </Button>
    <Button shape="round" variant="primary" m={2}>
      Round
    </Button>
    <Button shape="rounded" variant="primary" m={2}>
      Rounded
    </Button>
    <Button shape="block" variant="primary" m={2}>
      Block
    </Button>
  </>
)
