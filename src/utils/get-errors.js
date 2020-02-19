const getErrors = (name, errors) => {
  const nestedName = name.split('.')

  if (nestedName.length === 1) {
    return errors[name] && errors[name].message ? errors[name].message  : ''
  }
  else {
    const flattenedError = nestedName.reduce((obj, key) => (obj && obj[key] !== undefined) ? obj[key] : undefined, errors)
    return flattenedError && flattenedError.message ? flattenedError.message : ''
  }
}

export default getErrors