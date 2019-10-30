import React from 'react'
import { connect } from 'formik'
import './styles.css'

import createDefaultInputProps from '../../utils/create-input-defaults'

import InputWrapper from '../input-wrapper'

const defaultMasks = {
  za: '+.. .. ... ....',
}

const TelInput = props => {
  // const {
  //   formik,
  //   masks,
  //   value,
  //   onBlur,
  //   onChange,
  //   placeholder,
  //   defaultCountry = 'za',
  //   inputProps,
  //   disabled,
  //   alertText: alertTextOverride,
  //   ...otherProps
  // } = props

  // const { id = otherProps.name, label, name } = otherProps

  // const { alertText, hasFormik, ...inputDefaults } = createDefaultInputProps({
  //   alertText: alertTextOverride,
  //   value,
  //   onBlur,
  //   onChange,
  //   name,
  //   formik,
  // })

  // const defaultOnChange = hasFormik && (value => formik.setFieldValue(name, value))
  // const defaultValue = hasFormik && formik.values[name]

  return (
    <div></div>
  )
}

export default connect(TelInput)
