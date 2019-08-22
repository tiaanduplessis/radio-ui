import { errorForField } from '../components/utils'

export default function createDefaultInputProps({
  formik,
  name,
  onBlur,
  value,
  onChange,
  alertText,
}) {
  const hasFormik = formik && Object.values(formik).length > 0

  return {
    hasFormik,
    onBlur: onBlur ? onBlur : hasFormik && formik.handleBlur,
    value: value ? value : hasFormik && formik.values[name],
    onChange: onChange
      ? onChange
      : hasFormik && (({ target }) => formik.setFieldValue(name, target.value)),
    alertText: alertText
      ? alertText
      : hasFormik && errorForField(formik.errors, formik.touched, name),
  }
}
