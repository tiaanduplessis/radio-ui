import { errorForField } from '../components/utils'

export default function createDefaultInputProps({ name, onBlur, value, onChange, alertText }) {
  return {
    onBlur,
    value,
    onChange,
    alertText,
  }
}
