import React from "react";
import { useFormContext } from "react-hook-form";
import InputField from "../input-field";

const Input = props => {
  const { name } = props;
  const { register, trigger } = useFormContext();

  return (
    <InputField {...props} onBlur={async () => trigger(name)} ref={register} />
  );
};

export default Input;
