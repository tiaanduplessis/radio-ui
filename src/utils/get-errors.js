import getNestedValueFromString from './get-nested-value-from-string'

const getErrors = (errors, name) => getNestedValueFromString(errors, `${name}.message`) || ''

export default getErrors