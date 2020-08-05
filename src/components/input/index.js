import React from "react";
import { useFormContext } from "react-hook-form";
import InputField from "../input-field";

const Input = props => {
  const { name } = props;
  const { register, setValue, triggerValidation } = useFormContext();

  return (
    <InputField
      {...props}
      onChange={e => setValue(name, e.target.value)}
      onBlur={async () => triggerValidation(name)}
      ref={register({ name })}
    />
  );
};

export default Input;
