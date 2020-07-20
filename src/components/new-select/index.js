import React, { useRef, useState, useCallback, useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import InputField from '../input-field'
import { StyledContainer, StyledList, StyledListItem, StyledNoOptionsListItem } from './styles' 

const Select = ({
  id,
  name,
  label,
  options,
  disabled,
  required,
  onChange,
  fullWidth,
  placeholder,
  onInputChange
}) => {
  const { register, watch, setValue, triggerValidation } = useFormContext()

  register({ name }, { required: { value: true, message: 'Required'} })

  const selectValue = watch(name)

  const containerRef = useRef(null)

  const [listOpen, setListOpen] = useState(false)
  const [filteredOptions, setFilteredOptions] = useState(options)
  const [inputValue, setInputValue] = useState(options.find(({ value }) => value === selectValue)?.label || '')

  const adjustValues = useCallback(() => {
    setFilteredOptions(options)
    setInputValue(options.find(({ value }) => value === selectValue)?.label || '')
  }, [options, selectValue])

  useEffect(() => {
    adjustValues()
  }, [adjustValues])
  
  useEffect(() => {
    const handleClickOutside = e => {
      const validate = async () => await triggerValidation(name)

      if (containerRef.current && !containerRef.current.contains(e.target)) {
        e.preventDefault()
        e.stopPropagation()

        if (listOpen) validate()
        
        setListOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [containerRef, triggerValidation, name, listOpen])

  const handleInputChange = e => {
    setValue(name, '')
    setInputValue(e.target.value)
    setFilteredOptions(
      options.filter(
        ({ label }) => label.toLowerCase().includes(e.target.value.toLowerCase())
      )
    )
    onInputChange(e.target.value)
  }

  const handleListItemClicked = ({ value, label }) => {
    setValue(name, value)
    adjustValues()
    onChange({ label, value })
  }

  const ListOptions = () => filteredOptions.map(({ label, value }) => (
    <StyledListItem key={value} onClick={() => handleListItemClicked({ value, label })}>
      {label}
    </StyledListItem>
  ))

  const NoOptions = () => (
    <StyledNoOptionsListItem onClick={() => handleListItemClicked({ value: '', label: '' })}>
      No Options
    </StyledNoOptionsListItem>
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
        onChange={handleInputChange}
        onClick={() => setListOpen(true)}
      />
      {listOpen && (
        <StyledList fullWidth={fullWidth}>
          {filteredOptions.length ? <ListOptions /> : <NoOptions />}
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