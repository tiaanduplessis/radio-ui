import React from 'react'
import { useFormContext } from 'react-hook-form'
import PropTypes from 'prop-types'
import { Container, Input, Animate, CheckboxOff, CheckboxOn } from './styles'

const Toggle = ({
  id,
  label,
  offText,
  onText,
  containerStyle,
  name,
  required,
  onChange,
  disabled,
  ...otherProps
}) => {
  const { register } = useFormContext()
  return (
    <Container style={containerStyle}>
      <Input
        id={id}
        aria-label={label}
        aria-required={required}
        disabled={disabled}
        name={name}
        onChange={onChange}
        ref={register}
        {...otherProps}
      />
      <Animate>
        <CheckboxOff>{offText}</CheckboxOff>
        <CheckboxOn>{onText}</CheckboxOn>
      </Animate>
    </Container>
  )
}

Toggle.defaultProps = {
  offText: 'Closed',
  onText: 'Open',
  containerStyle: {},
}

Toggle.propTypes = {
  offText: PropTypes.string,
  onText: PropTypes.string,
  containerStyle: PropTypes.object,
  label: PropTypes.string.isRequired,
}

export default Toggle
