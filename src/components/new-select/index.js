import React from 'react'
import InputField from '../input-field'
import withAutocomplete from '../with-auto-complete'

const Select = props => <InputField {...props} />

export default withAutocomplete(Select)

//TODO: finish withAutoComplete