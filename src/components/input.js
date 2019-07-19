import * as React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { layout, space } from 'styled-system'

import { connect } from 'formik'

import theme from './theme'

import { errorForField } from './utils'

function createDefaultInputProps({ formik, name, onBlur, value, onChange }) {
  const hasFormik = formik && Object.values(formik).length > 0
  return {
    onBlur: hasFormik ? formik.handleBlur : onBlur,
    value: hasFormik ? formik.values[name] : value,
    onChange: hasFormik
      ? ({ target }) => formik.setFieldValue(name, target.value)
      : onChange,
    alertText: hasFormik
      ? errorForField(formik.errors, formik.touched, name)
      : '',
  }
}

const StyledLabel = styled.label`
  display: block;
  font-family: inherit;
  color: ${props => props.theme.colors.gray.xxdark};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.xsmall};
  margin-bottom: 0.4em;
`

StyledLabel.displayName = 'InputLabel'

const StyledInputContainer = styled.div`
  min-width: 300px;
  width: 45%;
  margin-bottom: 1.5em;
  position: relative;
  @media (max-width: 990px) {
    width: 100%;
  }

  ${space}
  ${layout}
`

StyledInputContainer.displayName = 'InputContainer'

const StyledInput = styled.input`
  background-color: ${props =>
    props.disabled
      ? props.theme.colors.transparent
      : props.theme.colors.gray.xlight};
  border: 1px solid
    ${props =>
    props.disabled
      ? props.theme.colors.gray.default
      : props.theme.colors.gray.xlight};
  font-family: inherit;
  font-size: ${props => props.theme.fontSizes.small};
  padding: 0.5em 1em;
  height: 35px;
  border-radius: ${props => props.theme.radii.small};
  width: 100%;

  ::placeholder {
    color: ${props => props.theme.colors.gray.xxdark};
  }

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    /* stylelint-disable-next-line property-no-vendor-prefix */
    -webkit-appearance: none;
    margin: 0;
  }
`

StyledInput.displayName = 'Input'

const StyledAlertText = styled.span.attrs({
  role: 'alert',
})`
  position: absolute;
  top: 0;
  right: 0;
  font-size: ${props => props.theme.fontSizes.xsmall};
  font-style: italic;
  color: ${props => props.theme.colors.red};
  font-weight: ${props => props.theme.fontWeights.bold};
`

class Input extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    alertText: PropTypes.string,
    inputStyle: PropTypes.object,
    ...layout.propTypes,
    ...space.propTypes,
  }

  static defaultProps = {
    label: '',
    inputStyle: {},
    theme: theme,
  }

  render() {
    const {
      id,
      label,
      placeholder,
      inputStyle,
      alertStyle,
      name,
      formik,
      alertText: alertTextOverride,
      disabled,
      theme,
      value,
      onBlur,
      onChange,
      ...otherProps
    } = this.props

    const { alertText, ...inputDefaults } = createDefaultInputProps({
      value,
      onBlur,
      onChange,
      name,
      formik,
    })

    return (
      <StyledInputContainer theme={theme} {...otherProps}>
        {!!label.length && (
          <StyledLabel
            theme={theme}
            htmlFor={id}
            required={otherProps.required}
          >
            {label}
          </StyledLabel>
        )}

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
        {alertText ||
          (alertTextOverride && (
            <StyledAlertText style={alertStyle}>
              {alertText || alertTextOverride}
            </StyledAlertText>
          ))}
      </StyledInputContainer>
    )
  }
}

export default connect(Input)
