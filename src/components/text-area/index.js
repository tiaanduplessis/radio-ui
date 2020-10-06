import React from "react";
import { useFormContext } from "react-hook-form";
import withInputWrapper from "../with-input-wrapper";
import { StyledTextArea } from "./styles";

const TextArea = props => {
  const { name, errorName, placeholder, label, onBlur = () => {} } = props;
  const { register, trigger } = useFormContext();

  return (
    <StyledTextArea
      {...props}
      ref={register}
      autoComplete="off"
      onBlur={async e => {
        onBlur(e);
        await trigger(errorName || name);
      }}
      placeholder={placeholder || label}
    />
  );
};

export default withInputWrapper(TextArea);
