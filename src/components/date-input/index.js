import React from "react";
import { useFormContext } from "react-hook-form";
import withInputWrapper from "../with-input-wrapper";
import { StyledDatePicker } from "./styles";

import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";

const DateInput = props => {
  const {
    name,
    errorName,
    placeholder,
    label,
    onChange = () => {},
    onBlur = () => {},
    dateFormat = "dd/MM/yyyy"
  } = props;

  const { watch, trigger, setValue, register } = useFormContext();

  register({ name });
  const currentValue = watch(name);

  const getDateString = () =>
    currentValue ? new Date(currentValue).toDateString() : "";

  return (
    <StyledDatePicker
      {...props}
      autoComplete="off"
      dateFormat={dateFormat}
      placeholderText={placeholder || label}
      value={getDateString()}
      onBlur={async e => {
        onBlur(e);
        await trigger(errorName || name);
      }}
      onChange={value => {
        setValue(name, value.toISOString());
        onChange(value);
      }}
    />
  );
};

export default withInputWrapper(DateInput);
