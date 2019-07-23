import * as React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'formik'

import StyledInput from './styled-input'
import InputWrapper from './input-wrapper'
import theme from './theme'
import defaultPropTypes from '../config/prop-types'
import createDefaultInputProps from '../utils/create-input-defaults'

class Input extends React.PureComponent {
  static propTypes = defaultPropTypes

  static defaultProps = {
    label: '',
    inputStyle: {},
    theme: theme,
  }

  render() {
    const {
      formik,
      alertText: alertTextOverride,
      disabled,
      theme,
      value,
      onBlur,
      onChange,
      inputProps,
      ...otherProps
    } = this.props

    const {
      id = otherProps.name,
      label,
      placeholder,
      inputStyle,
      name
    } = otherProps

    const { alertText, ...inputDefaults } = createDefaultInputProps({
      value,
      onBlur,
      onChange,
      name,
      formik,
    })

    return (
      <InputWrapper alertText={alertTextOverride || alertText} {...otherProps}>
        <StyledInput
          {...inputDefaults}
          style={inputStyle}
          aria-label={label}
          aria-required={otherProps.required}
          placeholder={placeholder || label}
          disabled={disabled}
          name={name}
          {...inputProps}
        />
      </InputWrapper>
    )
  }
}

export default connect(Input)
