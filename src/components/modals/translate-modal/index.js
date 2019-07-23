import React, { Component } from 'react'

import LanguageSetField from '../../language-set-field'
import Button from '../../button'

import {
  Container,
  EditTextContainer,
  EditText,
  EditButton,
  Actions
} from './styles'

class TranslateModal extends Component {
  static defaultProps = {
    values: [],
    maxTranslationLength: 120
  }

  state = {
    languageSets: []
  }

  componentDidMount () {
    const { values } = this.props
    const clonedObjects = values.map(obj => Object.assign({}, obj))
    this.setState({ languageSets: clonedObjects })
  }

  componentWillReceiveProps (props) {
    const { values: formikLanguageSets } = props
    if (formikLanguageSets) {
      this.updateLanguageSets(formikLanguageSets)
    }
  }

  updateLanguageSets (formikLanguageSets) {
    const { languageSets: currentLanguageSets } = this.state
    const newLanguageSets = formikLanguageSets.reduce((acc, set, i) => {
      const currentSet = currentLanguageSets[i]

      if (currentSet && currentSet.locale === set.locale) {
        return acc.concat(currentSet)
      }
      return acc.concat(Object.assign({}, set))
    }, [])

    this.setState({
      languageSets: newLanguageSets
    })
  }

  handleValueChange = (i, value) => {
    const { languageSets } = this.state
    const { maxTranslationLength } = this.props

    languageSets[i].value = value.slice(0, maxTranslationLength)
    this.setState({ languageSets })
  }

  render () {
    const {
      placeholder,
      onSubmit,
      languagesContainer,
      onLanguagesChange,
      type,
      disabled,
      languages
    } = this.props
    const { languageSets } = this.state

    return (
      <Container>
        {languageSets.map((languageSet, i) => (
          <LanguageSetField
            key={languageSet.locale}
            {...languageSet}
            placeholder={placeholder}
            onChange={({ target }) => this.handleValueChange(i, target.value)}
            disabled={disabled}
            languages={languages}
          />
        ))}

        <Actions>
          <EditTextContainer>
            <EditButton onClick={onLanguagesChange}>Edit</EditButton>
            <EditText>
              &nbsp; {`language preferences for this ${type}.`}
            </EditText>
          </EditTextContainer>

          <Button
            primary
            raised
            onClick={() => onSubmit(languageSets)}
            disabled={disabled}
          >
            Save
          </Button>
        </Actions>
      </Container>
    )
  }
}

export default TranslateModal
