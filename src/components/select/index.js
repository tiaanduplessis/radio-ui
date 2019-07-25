import React from 'react'
import ReactSelect from 'react-select'
import { connect } from 'formik'

import { Label, InputContainer } from './styles'
import InputWrapper from '../input-wrapper'

import createDefaultInputProps from '../../utils/create-input-defaults'
import theme from '../theme'

const styleOverride = ({ fontSize, width, rounded, isWhite, bordered }) => {
  return {
    indicatorSeparator: (provided, state) => ({
      display: 'none'
    }),
    control: (provided, state) => {
      // TODO: use variant instead of isWhite
      const backgroundColor =
        state.isDisabled || isWhite ? theme.colors.white : theme.colors.gray.xlight

      return {
        ...provided,
        backgroundColor: backgroundColor,
        border: state.isDisabled ? `border: 1px solid ${theme.colors.gray.xlight}` : 'none',
        fontFamily: theme.fonts.Montserrat,
        fontSize: fontSize ? theme.fontSizes[fontSize] : theme.fontSizes.small,
        borderRadius: rounded ? '2.5em' : '0.2em',
        width: width || '100%',
        boxShadow: rounded ? 'rgba(0, 0, 0, 0.15) 0px 0px 1em 1px' : 'none',
        padding: '0 0.8em',
        overflow: 'hidden',
        ...(bordered && {
          border: `solid 1px ${theme.colors.gray.light}`
        })
      }
    },

    placeholder: (provided, state) => ({
      color: theme.colors.gray.default
    }),
    singleValue: () => ({
      color: theme.colors.gray.xxdark
    }),
    indicatorsContainer: (provided, state) => ({
      display: state.isDisabled ? 'none' : 'flex'
    }),
    option: (defaultStyles, { isSelected, isFocused }) => {
      let color = theme.colors.white
      if (isFocused) color = theme.colors.xlight
      if (isSelected) color = theme.colors.gray.light

      return {
        ...defaultStyles,
        fontSize: theme.fontSizes.small,
        color: theme.colors.black,
        backgroundColor: color,
        ':active': {
          ...defaultStyles[':active'],
          backgroundColor:theme.colors.gray.xlight
        }
      }
    }
  }
}

const Select = ({
  containerStyle,
  rounded,
  isWhite,
  disabled,
  disableEmpty,
  options,
  formik,
  value,
  onBlur,
  onChange,
  placeholder,
  fontSize,
  bordered,
  multiple,
  alertText: alertTextOverride,
  ...otherProps
}) => {
  const {
    id = otherProps.name,
    label,
    inputStyle,
    name
  } = otherProps

  const { alertText, hasFormik, ...inputDefaults } = createDefaultInputProps({
    alertText: alertTextOverride,
    value,
    onBlur,
    onChange,
    name,
    formik,
  })

  const defaultOnChange = hasFormik && (value => formik.setFieldValue(name, value))
  const defaultValue = hasFormik && formik.values[name]

  return (
    <InputWrapper alertText={alertText} {...otherProps}>
      <ReactSelect
        {...inputDefaults}
        {...otherProps}
        onChange={onChange || defaultOnChange}
        value={value}
        placeholder={placeholder || label}
        styles={styleOverride({ rounded, isWhite, fontSize, bordered })}
        name={name}
        options={options}
        isDisabled={disableEmpty ? disabled || options.length === 0 : disabled}
        isMulti={multiple}
      />
    </InputWrapper>
  )
}

Select.defaultProps = {
  containerStyle: {}
}

export default connect(Select)
