import React from "react";
import { useFormContext } from "react-hook-form";
import Input from "../input";

const TimeInput = props => {
  const { name, onChange = () => {} } = props;

  const { watch, setValue, register } = useFormContext();

  register({ name });
  const currentValue = watch(name);

  const getTimeString = () =>
    currentValue ? currentValue.replace("Z", "") : "";

  return (
    <Input
      {...props}
      type="time"
      step="1"
      noRef
      value={getTimeString()}
      onChange={e => {
        const { target } = e;
        const { value } = target;

        setValue(name, `${value}Z`);
        onChange(e);
      }}
    />
  );
};

export default TimeInput;
