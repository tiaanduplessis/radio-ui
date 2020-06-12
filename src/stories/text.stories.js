import React from 'react'
import { Text } from '../'

export default {
  component: Text,
  title: 'Text',
}

export const FontSizes = () => (
  <>
    <Text fontSize="xxsmall">xxsmall</Text>
    <Text fontSize="xsmall">xsmall</Text>
    <Text fontSize="small">small</Text>
    <Text fontSize="medium">medium</Text>
    <Text fontSize="large">large</Text>
    <Text fontSize="xlarge">xlarge</Text>
    <Text fontSize="xxlarge">xxlarge</Text>
  </>
)

export const FontWeights = () => (
  <>
    <Text fontWeight="hairline">hairline</Text>
    <Text fontWeight="thin">thin</Text>
    <Text fontWeight="light">light</Text>
    <Text fontWeight="medium">medium</Text>
    <Text fontWeight="semi">semi</Text>
    <Text fontWeight="bold">bold</Text>
    <Text fontWeight="extrabold">extrabold</Text>
  </>
)

export const Colors = () => (
  <>
    <Text color="white">white</Text>
    <Text color="gray.xlight">gray.xlight</Text>
    <Text color="gray.light">gray.light</Text>
    <Text color="gray.default">gray.default</Text>
    <Text color="gray.dark">gray.dark</Text>
    <Text color="gray.xdark">gray.xdark</Text>
    <Text color="gray.xxdark">gray.xxdark</Text>
    <Text color="black">black</Text>
    <Text color="primary">primary</Text>
  </>
)
