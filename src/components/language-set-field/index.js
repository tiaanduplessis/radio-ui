import React from 'react'

import { Container, Inner, Input, LanguageText, DefaultText } from './styles'

const LanguageSetField = ({
  locale,
  default: defaultLanguage,
  containerId,
  languages,
  inputProps,
  value,
  onChange,
  ...otherProps
}) => {
  const language = languages.find(({ code }) => code === locale)

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
  languages: [],
}

export default React.memo(LanguageSetField)
