import React, { useState, useEffect, useRef } from 'react'
import { useFormContext } from 'react-hook-form'
import InputField from '../input-field'
import { StyledContainer, StyledList, StyledListItem } from './styles' 

const Select = ({ fullWidth, id, label, name, options, placeholder, disabled, required, onChange, onInputChange }) => {
  const { register, watch, setValue } = useFormContext()

  register({ name }, { required: { value: true, message: 'Required'} })

  const selectValue = watch(name)

  const [listOpen, setListOpen] = useState(false)
  const [inputValue, setInputValue] = useState(options.find(({ value }) => value === selectValue)?.label || '')
  const [filteredOptions, setFilteredOptions] = useState(options)

  const containerRef = useRef(null)
  useEffect(() => {
    const handleClickOutside = e => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        e.preventDefault()
        e.stopPropagation()
        setListOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [containerRef])

  useEffect(() => {
    setFilteredOptions(options)
    setInputValue(filteredOptions.find(({ value }) => value === selectValue)?.label || '')
  }, [options])

  const handleListItemClicked = ({ value, label }) => {
    setValue(name, value)
    setInputValue(label)
    onChange({ label, value })
    setListOpen(false)
  }

  const renderListOptions = ({ label, value }) => (
    <StyledListItem key={value} onClick={() => handleListItemClicked({ value, label })}>
      {label}
    </StyledListItem>
  )

  const NoOptions = (
    <StyledListItem center onClick={() => handleListItemClicked({ value: '', label: '' })}>
      No Options
    </StyledListItem>
  )

  return (
    <StyledContainer ref={containerRef}>
      <InputField
        id={id}
        name={name}
        label={label}
        value={inputValue}
        required={required}
        disabled={disabled}
        fullWidth={fullWidth}
        placeholder={placeholder}
        onClick={() => setListOpen(true)}
        onChange={e => {
          setInputValue(e.target.value)
          setFilteredOptions(
            options.filter(({ label }) => label.toLowerCase().includes(e.target.value.toLowerCase()))
          )
          onInputChange(e.target.value)
        }}
      />
      {listOpen && (
        <StyledList fullWidth={fullWidth}>
          {filteredOptions.length ? filteredOptions.map(renderListOptions) : NoOptions}
        </StyledList>
      )}
    </StyledContainer>
  )
}

Select.defaultProps = {
  options: [],
  onChange: () => {},
  onInputChange: () => {}
}

export default Select