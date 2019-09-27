import * as React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { byTheme } from 'styled-funcs'

const Container = styled.div`
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  position: relative;
  text-align: left;
  width: 100px;
  height: 32px;
  border-radius: 30px;
  line-height: ${byTheme('lineHeights.tight')};
  font-size: ${byTheme('fontSizes.xsmall')};
  font-family: ${byTheme('fonts[0]')};
`

const Input = styled.input.attrs({
  type: 'checkbox',
})`
  position: absolute;
  left: 0;
  top: 0;
  width: 100px;
  height: 32px;
  padding: ${byTheme('space[0]')};
  margin: ${byTheme('space[0]')};
  opacity: 0;
  z-index: ${byTheme('zIndices[1]')};
  cursor: pointer;
`

const Animate = styled.div`
  position: relative;
  width: 100px;
  height: 32px;
  background-color: ${byTheme('colors.secondary')};
  transition: background 0.25s ease-out 0s;

  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background-color: ${byTheme('colors.white')};
    top: 6px;
    left: 6px;
    transition: left 0.3s ease-out 0s;
    z-index: ${byTheme('zIndices[1]')};
  }

  ${Input}:checked + & {
    background-color: ${byTheme('colors.primary')};
  }

  ${Input}:checked + &:before {
    left: 75px;
    background-color: ${byTheme('colors.white')};
  }
`

const CheckboxState = styled.div`
  float: left;
  color: ${byTheme('colors.white')};
  font-weight: ${byTheme('fontWeights.bold')};
  padding-top: ${byTheme('space[2]')};
  transition: all 0.3s ease-out 0s;
`

const CheckboxOff = styled(CheckboxState)`
  margin-left: 45px;
  opacity: 1;

  ${Input}:checked + ${Animate} & {
    display: none;
    opacity: 0;
  }
`

const CheckboxOn = styled(CheckboxState)`
  display: none;
  float: right;
  margin-right: 45px;
  opacity: 0;

  ${Input}:checked + ${Animate} & {
    display: block;
    opacity: 1;
  }
`

const Toggle = ({ label, offText, onText, containerStyle, ...props }) => (
  <Container style={containerStyle}>
    <Input aria-label={label} {...props} />
    <Animate>
      <CheckboxOff>{offText}</CheckboxOff>
      <CheckboxOn>{onText}</CheckboxOn>
    </Animate>
  </Container>
)

Toggle.defaultProps = {
  offText: 'Closed',
  onText: 'Open',
  containerStyle: {},
}

Toggle.propTypes = {
  offText: PropTypes.string,
  onText: PropTypes.string,
  containerStyle: PropTypes.object,
  label: PropTypes.string.isRequired,
}

export default Toggle
