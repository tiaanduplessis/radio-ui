const getErrors = (name, errors) => {
  const nestedName = name.split('.')

  if (nestedName.length === 1) {
    return errors[name] && errors[name].message ? errors[name].message  : ''
  }
  else {
    const nestedError = nestedName.reduce((obj, key) => (obj && obj[key] !== undefined) ? obj[key] : undefined, errors)
    return nestedError && nestedError.message ? nestedError.message : ''
  }
}

export default getErrors