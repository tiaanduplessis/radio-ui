import * as React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'formik'

import StyledInput from './styled-input'
import InputWrapper from './input-wrapper'
import theme from './theme'
import defaultPropTypes from '../config/prop-types'
import createDefaultInputProps from '../utils/create-input-defaults'

import { errorForField } from './utils'

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
      ...otherProps
    } = this.props

    const {
      id,
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
          theme={theme}
          style={inputStyle}
          aria-label={label}
          aria-required={otherProps.required}
          placeholder={placeholder || label}
          disabled={disabled}
          name={name}
          {...inputDefaults}
        />
      </InputWrapper>
    )
  }
}

export default connect(Input)
