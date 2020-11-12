import React, { useCallback } from "react";
import { useFormContext } from "react-hook-form";
import Input from "../input";

const TimeInput = props => {
  const { name, onChange = () => {} } = props;

  const { watch, setValue, register } = useFormContext();

  register({ name });
  const currentValue = watch(name);

  const getTimeString = () =>
    currentValue ? currentValue.replace("Z", "") : "";

  const handleTimeChange = useCallback(
    event => {
      const { value } = event.target;

      setValue(name, `${value}Z`);
      onChange(event);
    },
    [setValue, name, onChange]
  );

  return (
    <Input
      {...props}
      type="time"
      step="1"
      noRef
      value={getTimeString()}
      onChange={handleTimeChange}
    />
  );
};

export default TimeInput;
