import React from "react";
import InputField from "../input-field";
import withAutocomplete from "../with-auto-complete";

const Select = props => <InputField {...props} fullWidth />;

export default withAutocomplete(Select);
