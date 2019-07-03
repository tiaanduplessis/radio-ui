import * as React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import theme from '../../config/theme'

const { colors } = theme

const ToggleContainer = styled.div`
  display: block;
  padding-bottom: 3px;
  width: 60px;
  height: 40px;
  position: relative;
`

const ToggleInput = styled.input`
  display: none;
`

const ToggleLabel = styled.label`
  cursor: pointer;
  position: relative;
  height: 40px;
  background-color: ${colors.darkGray};

  ::before {
    background: ${colors.gray};
    border-radius: 8px;
    content: '';
    height: 15px;
    margin-top: 15px;
    position: absolute;
    opacity: 0.3;
    transition: all 0.4s ease-in-out;
    width: 40px;
  }

  ::after {
    background: ${colors.darkGray};
    border-radius: 16px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
    content: '';
    height: 24px;
    left: 0px;
    margin-top: 13px;
    position: absolute;
    top: -3px;
    transition: all 0.3s ease-in-out;
    width: 24px;
  }

  /* stylelint-disable-next-line selector-type-no-unknown */
  ${ToggleInput}:checked + &::before {
    background: ${colors.gray};
    opacity: 0.5;
  }

  /* stylelint-disable-next-line selector-type-no-unknown */
  ${ToggleInput}:checked + &::after {
    background: ${colors.primary};
    left: 20px;
  }
`

class Toggle extends React.PureComponent {
  static defaultProps = {
    checked: false,
  }

  static propTypes = {
    checked: PropTypes.bool,
  }

  render() {
    return (
      <ToggleContainer>
        <ToggleInput type="checkbox" {...this.props} />
        <ToggleLabel htmlFor={this.props.id} />
      </ToggleContainer>
    )
  }
}

export default Toggle
