import React, { Component } from 'react'
// import toast from 'just-toasty'
import { connect } from 'formik'
import { Bomb } from '@lessondesk/material-icons'

import InputWrapper from '../input-wrapper'
import StyledInput from '../styled-input'
import TranslateModal from '../modals/translate-modal'
import ModalWrapper from '../modals/modal-wrapper'

import createDefaultInputProps from '../../utils/create-input-defaults'

import { Container, TranslateIconContainer } from './styles'

class TranslationInput extends Component {
  static defaultProps = {
    type: 'lesson'
  }

  state = {
    showModal: false
  }

  componentDidMount() {
    const { formik } = this.props
    const hasFormik = Object.keys(formik).length > 0

    if (!hasFormik) {
      throw Error('Translate input currently only supports formik')
    }
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal })

  handleTranslationsSubmit = languageSets => {
    const { formik, name } = this.props
    const hasEmptySet = languageSets.some(languageSet => !languageSet.value)
    if (hasEmptySet) {
      // toast('Oops! Please add all required translations.')
      return
    }
    formik.setFieldValue(name, languageSets)

    this.toggleModal()
  }

  updateDefaultValue = value => {
    const { formik, name } = this.props
    const { values, setFieldValue } = formik
    const currentValue = values[name]
    currentValue[0].value = value
    return setFieldValue(name, currentValue)
  }

  render () {
    const { showModal } = this.state

    const {
      inputProps,
      containerStyle,
      width,
      type,
      formik,
      value,
      onBlur,
      onChange,
      placeholder,
      onLanguagesChange,
      alertText: alertTextOverride,
      disabled,
      languages,
      ...otherProps
    } = this.props

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

    console.log(formik.values[name])

    return (
      <InputWrapper alertText={alertTextOverride || alertText} {...otherProps}>
        <Container>
          <StyledInput
            {...inputDefaults}
            value={formik.values[name][0].value}
            onChange={({ target }) => this.updateDefaultValue(target.value)}
            name={name}
            placeholder={placeholder || label}
            disabled={disabled}
            {...inputProps}
          />
          <TranslateIconContainer onClick={this.toggleModal}>
             <Bomb />
          </TranslateIconContainer>
          <ModalWrapper isOpen={showModal} onRequestClose={this.toggleModal}>
            <TranslateModal
              values={formik.values[name]}
              placeholder={placeholder || label}
              onClose={this.toggleModal}
              onSubmit={this.handleTranslationsSubmit}
              onLanguagesChange={onLanguagesChange}
              type={type}
              disabled={disabled}
              languages={languages}
            />
          </ModalWrapper>
        </Container>
      </InputWrapper>
    )
  }
}

export default connect(TranslationInput)
