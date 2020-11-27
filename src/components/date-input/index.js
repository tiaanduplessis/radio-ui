import React from "react";
import { useFormContext } from "react-hook-form";
import withInputWrapper from "../with-input-wrapper";
import { StyledDatePicker } from "./styles";

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
    currentValue ? new Date(`${currentValue}Z`).toDateString() : "";

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
        const offset = value.getTimezoneOffset() * 60 * 1000;
        const newDate = new Date(value.getTime() - offset);
        setValue(name, newDate.toISOString().replace("Z", ""));
        onChange(value);
      }}
    />
  );
};

export default withInputWrapper(DateInput);
