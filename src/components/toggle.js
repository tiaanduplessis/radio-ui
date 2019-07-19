import * as React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { space, layout } from 'styled-system'

import theme from './theme'

const ToggleContainer = styled.div`
  display: block;
  padding-bottom: 3px;
  width: 60px;
  height: 40px;
  position: relative;
  ${space}
  ${layout}
`

const ToggleInput = styled.input`
  display: none;
`

const ToggleLabel = styled.label`
  cursor: pointer;
  position: relative;
  height: 40px;
  background-color: ${props => props.theme.colors.gray.xdark};

  ::before {
    background: ${props => props.theme.colors.gray.default};
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
    background: ${props => props.theme.colors.gray.xdark};
    border-radius: 16px;
    box-shadow: ${props => props.theme.shadows[0]};
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
    background: ${props => props.theme.colors.gray.default};
    opacity: 0.5;
  }

  /* stylelint-disable-next-line selector-type-no-unknown */
  ${ToggleInput}:checked + &::after {
    background: ${props => props.theme.colors.primary};
    left: 20px;
  }
`

class Toggle extends React.PureComponent {
  static defaultProps = {
    checked: false,
    inputStyle: {},
    theme: theme,
  }

  static propTypes = {
    checked: PropTypes.bool,
    ...layout.propTypes,
    ...space.propTypes,
  }

  render() {
    const {
      theme,
      id,
      onBlur,
      onChange,
      inputStyle,
      checked,
      ...otherProps
    } = this.props

    return (
      <ToggleContainer theme={theme} {...otherProps}>
        <ToggleInput
          style={inputStyle}
          checked={checked}
          onChange={onChange}
          onBlur={onBlur}
          id={id}
          theme={theme}
          type="checkbox"
        />
        <ToggleLabel theme={theme} htmlFor={this.props.id} />
      </ToggleContainer>
    )
  }
}

export default Toggle
