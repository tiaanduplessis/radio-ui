import React from "react";
import Input from "../input";
import withAutocomplete from "../with-auto-complete";

const Select = props => <Input {...props} fullWidth noRef />;

export default withAutocomplete(Select);
