import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { flexBetween } from '../utils/mixins'
import { byTheme } from 'styled-funcs'
import Close from '@lessondesk/material-icons/dist/Close'

const Container = styled.div`
  ${flexBetween};
  background: ${byTheme('colors.gray[0]')};
  min-width: 120px;
  max-width: 300px;
  height: 40px;
  border-radius: ${byTheme('radii.full')};
  color: ${byTheme('colors.gray[7]')};
  border: 1px solid ${byTheme('colors.gray[3]')};
  padding: 0 ${byTheme('space[3]')};
`

const Name = styled.span`
  font-weight: ${byTheme('fontWeights.semi')};
`

const CloseButton = styled.button`
  color: ${byTheme('colors.gray[7]')};
  background: ${byTheme('colors.transparent')};
`

const Tag = ({ name, value, onClose }) => (
  <div>
    <Container>
      <span>
        <Name>{name}</Name>
        {`: ${value}`}
      </span>
      {onClose && (
        <CloseButton type="button" aria-label="Close">
          <Close color="inherit" />
        </CloseButton>
      )}
    </Container>
  </div>
)

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClose: PropTypes.func,
}

export default Tag
