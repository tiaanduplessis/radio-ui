import React, { useRef, useState, useCallback, useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { StyledContainer, StyledList, StyledListItem, StyledNoOptionsListItem } from './styles'
import withAutocomplete from '../with-auto-complete'
import InputField from '../input-field'

const TelInput = ({
  id,
  name,
  label,
  disabled,
  required,
  fullWidth,
  placeholder,
  options = [],
  onChange = () => {},
  onInputChange = () => {}
}) => {
  return (
    <Autocomplete
      name={name}
      fullWidth={fullWidth}
      options={options}
      renderInput={({ trigger, handleInputChange, inputValue }) => {
        console.log(inputValue)
        return (
          <InputField
            id={id}
            fullWidth
            name={name}
            label={label}
            value={inputValue}
            required={required}
            disabled={disabled}
            placeholder={placeholder}
            onChange={handleInputChange}
            onClick={trigger}
          />
        )
      }}
    />
  )
}

export default withAutocomplete(TelInput)