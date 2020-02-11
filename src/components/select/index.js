import React from 'react'
import { useFormContext } from 'react-hook-form'
import ReactSelect from 'react-select'
import getErrors from '../../utils/get-errors'
import InputWrapper from '../input-wrapper'
import { colors, radii, fontSizes, fonts } from '../theme'

const styleOverride = ({ fontSize, width, shape, variant, hasShadow }) => ({
  indicatorSeparator: () => ({
    display: 'none',
  }),
  control: (provided, state) => {
    const backgroundColor = colors.white

    return {
      ...provided,
      backgroundColor: backgroundColor,
      border:
        state.isDisabled && !hasShadow
          ? `border: 1px solid ${colors.gray.default}`
          : `border: 1px solid ${colors.gray.xlight}`,
      borderColor: state.isDisabled ? colors.gray.default : colors.gray.xlight,
      fontFamily: fonts.Montserrat,
      fontSize: fontSize ? fontSizes[fontSize] : fontSizes.small,
      borderRadius: shape === 'rounded' ? radii.full : radii.small,
      width: width || '100%',
      boxShadow: hasShadow ? 'rgba(0, 0, 0, 0.15) 0px 0px 1em 1px' : 'none',
      padding: '0 0.8em',
      overflow: 'hidden',
      ...(variant === 'dark' && {
        border: `solid 1px ${colors.gray.default}`,
      }),
    }
  },

  placeholder: () => ({
    color: colors.gray.default,
  }),
  singleValue: () => ({
    color: colors.gray.xxdark,
  }),
  indicatorsContainer: (provided, state) => ({
    display: state.isDisabled ? 'none' : 'flex',
  }),
  option: (defaultStyles, { isSelected, isFocused }) => {
    let color = colors.white
    if (isFocused) {
      color = colors.xlight
    }
    if (isSelected) {
      color = colors.gray.light
    }

    return {
      ...defaultStyles,
      fontSize: fontSizes.small,
      color: colors.black,
      backgroundColor: color,
      ':active': {
        ...defaultStyles[':active'],
        backgroundColor: colors.gray.xlight,
      },
    }
  },
})

const Select = ({
  shape,
  variant,
  hasShadow,
  disabled,
  disableEmpty,
  options = [],
  onChange,
  placeholder,
  fontSize,
  bordered,
  multiple,
  alertText: alertTextOverride,
  name,
  required,
  onInputChange,
  ...otherProps
}) => {
  const { errors, watch, triggerValidation, setValue, register, reset, getValues } = useFormContext()
  const currentValue = watch(name)

  const getLabel = () => (options && Array.isArray(options) ? options.find(({ value }) => value === currentValue) : '')

  const getSelectValue = () => (
    options.length && getLabel() ? 
    {
      value: currentValue,
      label: getLabel().label
    }
    :
    ''
  )

  return (
    <InputWrapper
      alertText={alertTextOverride || getErrors(name, errors)}
      required={required}
      disabled={disabled}
      {...otherProps}
    >
      <ReactSelect
        name={name}
        onInputChange={onInputChange}
        placeholder={placeholder}
        styles={styleOverride({ shape, variant, fontSize, bordered, hasShadow })}
        options={options}
        isDisabled={disableEmpty ? disabled || options.length === 0 : disabled}
        isMulti={multiple}
        required={required}
        value={getSelectValue()}
        onBlur={async () => await triggerValidation(name)}
        onChange={async ({ value, label }) => {
          setValue(name, value)
          await triggerValidation({ name })
          // const values = getValues()
          // reset(values)
          onChange({ value, label })
        }}
        ref={register({ name })}
        {...otherProps}
      />
    </InputWrapper>
  )
}

Select.defaultProps = {
  containerStyle: {},
  options: [],
  onChange: () => { },
  onInputChange: () => { }
}

export default Select
