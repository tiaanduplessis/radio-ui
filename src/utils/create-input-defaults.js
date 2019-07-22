export default function createDefaultInputProps({ formik, name, onBlur, value, onChange }) {
  const hasFormik = formik && Object.values(formik).length > 0
  return {
    onBlur: hasFormik ? formik.handleBlur : onBlur,
    value: hasFormik ? formik.values[name] : value,
    onChange: hasFormik
      ? ({ target }) => formik.setFieldValue(name, target.value)
      : onChange,
    alertText: hasFormik
      ? errorForField(formik.errors, formik.touched, name)
      : '',
  }
}
