import * as React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'formik'

import { createDefaultInputProps } from './utils'

import {
  StyledInput,
  StyledInputContainer,
  StyledLabel,
  StyledErrorText,
} from './styles'

class Input extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    errorText: PropTypes.string,
    containerStyle: PropTypes.object,
    width: PropTypes.string,
  }

  static defaultProps = {
    label: '',
    containerStyle: {},
  }

  render() {
    const {
      id,
      label,
      placeholder,
      width,
      containerStyle,
      errorStyle,
      name,
      formik,
      errorText: errorTextOverride,
      ...otherProps
    } = this.props

    const { errorText, ...inputDefaults } = createDefaultInputProps({
      name,
      formik,
    })

    return (
      <StyledInputContainer style={containerStyle} width={width}>
        {!!label.length && (
          <StyledLabel htmlFor={id} required={otherProps.required}>
            {label}
          </StyledLabel>
        )}
        <StyledInput
          aria-label={label}
          aria-required={otherProps.required}
          placeholder={placeholder || label}
          name={name}
          {...inputDefaults}
          {...otherProps}
        />
        {errorText && (
          <StyledErrorText style={errorStyle}>
            {errorTextOverride || errorText}
          </StyledErrorText>
        )}
      </StyledInputContainer>
    )
  }
}

export default connect(Input)
