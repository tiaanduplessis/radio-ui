import React from 'react'
import ReactSelect from 'react-select'
import { connect } from 'formik'

import { Label, InputContainer } from './styles'
import S from '../../../styled'

import createDefaultInputProperties from '../../../utils/create-default-input-properties'

import theme from '../../../config/theme'

const { colors, fonts, fontSizes } = theme

const styleOverride = ({ fontSize, width, rounded, isWhite, bordered }) => {
  return {
    indicatorSeparator: (provided, state) => ({
      display: 'none'
    }),
    control: (provided, state) => {
      // TODO: use variant instead of isWhite
      const backgroundColor =
        state.isDisabled || isWhite ? colors.white : colors.grayExtraLight

      return {
        ...provided,
        backgroundColor: backgroundColor,
        border: state.isDisabled ? 'border: 1px solid #E8E8E8' : 'none',
        fontFamily: fonts.Montserrat,
        fontSize: fontSize ? fontSizes[fontSize] : fontSizes.small,
        borderRadius: rounded ? '2.5em' : '0.2em',
        width: width || '100%',
        boxShadow: rounded ? 'rgba(0, 0, 0, 0.15) 0px 0px 1em 1px' : 'none',
        padding: '0 0.8em',
        overflow: 'hidden',
        ...(bordered && {
          border: `solid 1px ${colors.lightGray}`
        })
      }
    },

    placeholder: (provided, state) => ({
      color: '#aaa'
    }),
    singleValue: () => ({
      color: '#545454'
    }),
    indicatorsContainer: (provided, state) => ({
      display: state.isDisabled ? 'none' : 'flex'
    }),
    option: (defaultStyles, { isSelected, isFocused }) => {
      let color = colors.white
      if (isFocused) color = colors.grayExtraLight
      if (isSelected) color = '#e1e1e1'

      return {
        ...defaultStyles,
        fontSize: fontSizes.small,
        color: colors.black,
        backgroundColor: color,
        ':active': {
          ...defaultStyles[':active'],
          backgroundColor: colors.grayExtraLight
        }
      }
    }
  }
}

const Select = ({
  containerStyle,
  id,
  label,
  rounded,
  noLabel,
  isWhite,
  name,
  disabled,
  disableEmpty,
  options,
  formik,
  placeholder,
  width,
  minWidth,
  fontSize,
  bordered,
  multiple,
  errorText: errorTextOverride,
  ...otherProps
}) => {
  const { errorText, ...inputDefaults } = createDefaultInputProperties({
    name,
    formik
  })

  return (
    <InputContainer
      width={width}
      minWidth={minWidth}
      style={containerStyle}
      disabled={disabled}
    >
      {noLabel ? '' : <Label htmlFor={id}>{label}</Label>}
      <ReactSelect
        {...inputDefaults}
        {...otherProps}
        placeholder={placeholder || label}
        styles={styleOverride({ rounded, isWhite, fontSize, bordered })}
        name={name}
        options={options}
        isDisabled={disableEmpty ? disabled || options.length === 0 : disabled}
        isMulti={multiple}
      />
      {errorText && <S.ErrorText>{errorTextOverride || errorText}</S.ErrorText>}
    </InputContainer>
  )
}

Select.defaultProps = {
  containerStyle: {}
}

export default connect(Select)
