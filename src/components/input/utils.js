/**
 * Formik utility function for getting error for select inputs
 */
function errorForField(errors, touched, fieldname) {
  return errors[fieldname] && touched[fieldname] ? errors[fieldname] : ''
}

export function createDefaultInputProps({ formik, name }) {
  const hasFormik = formik && Object.values(formik).length > 0
  return {
    onBlur: hasFormik ? formik.handleBlur : undefined,
    value: hasFormik ? formik.values[name] : '',
    onChange: hasFormik
      ? ({ target }) => formik.setFieldValue(name, target.value)
      : undefined,
    errorText: hasFormik
      ? errorForField(formik.errors, formik.touched, name)
      : '',
  }
}
