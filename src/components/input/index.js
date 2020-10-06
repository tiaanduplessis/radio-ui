import React from "react";
import { useFormContext } from "react-hook-form";
import withInputWrapper from "../with-input-wrapper";
import { StyledInput } from "./styles";

const Input = props => {
  const {
    name,
    errorName,
    placeholder,
    label,
    onBlur = () => {},
    noRef
  } = props;
  const { register, trigger } = useFormContext();

  return (
    <StyledInput
      {...props}
      ref={noRef ? null : register}
      autoComplete="off"
      onBlur={async e => {
        onBlur(e);
        await trigger(errorName || name);
      }}
      placeholder={placeholder || label}
    />
  );
};

export default withInputWrapper(Input);
