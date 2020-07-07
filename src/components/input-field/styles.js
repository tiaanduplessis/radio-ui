import { InputLabel, FormHelperText, OutlinedInput } from '@material-ui/core'
import styled from 'styled-components'

export const Label = styled(InputLabel).attrs(() => ({
  shrink: true
}))`
  color: #5C6C7F !important;
  position: static !important;
  font-weight: bold !important;
  
  .MuiInputLabel-asterisk {
    color: #ed7470;
  }
`

export const StyledInput = styled(OutlinedInput).attrs(() => ({
  variant: 'outlined',
  notched: false
}))`
  border-radius: 5px;
  border: 1px solid #eef2f4;

  input {
    color: #4a5b6d;
    padding: 0.6em;
    font-size: 0.875em;
  }

  .MuiOutlinedInput-notchedOutline {
    border: none;
  }
`

export const ErrorText = styled(FormHelperText).attrs(() => ({
  error: true
}))`
  font-weight: bold !important;
`