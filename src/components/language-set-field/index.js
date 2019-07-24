import React from 'react'

import {
  Container,
  Inner,
  Input,
  LanguageText,
  DefaultText
} from './styles'

const LanguageSetField = ({
  locale,
  default: defaultLanguage,
  containerId,
  languages,
  inputProps,
  value,
  onChange,
  onBlur,
  ...otherProps
}) => {
  console.log(languages, locale)
  const language = languages.find(
    ({ code }) => code === locale
  )
  console.log(language)

  return (
    <Container id={containerId} {...otherProps}>
      <Inner>
        <LanguageText>{language ? language.value || locale : locale}</LanguageText>
        {defaultLanguage && <DefaultText>(default)</DefaultText>}
      </Inner>
      <Input value={value} onChange={onChange} {...inputProps} />
    </Container>
  )
}

LanguageSetField.defaultProps = {
  languages: []
}

export default React.memo(LanguageSetField)
