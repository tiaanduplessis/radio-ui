import React, { forwardRef } from "react";
import { useFormContext } from "react-hook-form";
import Flex from "../flex";
import getErrors from "../../utils/get-errors";
import {
  StyledContainer,
  StyledLabel,
  StyledAsterisk,
  StyledAlertText,
  StyledInput
} from "./styles";

const InputField = forwardRef(
  (
    {
      id,
      name,
      value,
      disabled,
      required,
      fullWidth,
      label = "",
      placeholder,
      type = "text",
      inputStyle = {},
      onBlur = () => {},
      onClick = () => {},
      containerStyle = {},
      onChange = () => {},
      onKeyDown = () => {},
      alertText: alertTextOverride
    },
    ref
  ) => {
    const { errors } = useFormContext();

    const alertText = alertTextOverride || getErrors(errors, name);

    return (
      <StyledContainer fullWidth={fullWidth} style={containerStyle}>
        <Flex justifyContent="space-between">
          <StyledLabel htmlFor={id}>
            {label}
            {!disabled && required && (
              <StyledAsterisk aria-label="required">*</StyledAsterisk>
            )}
          </StyledLabel>
          {alertText && <StyledAlertText>{alertText}</StyledAlertText>}
        </Flex>
        <StyledInput
          id={id}
          ref={ref}
          type={type}
          name={name}
          value={value}
          onBlur={onBlur}
          onClick={onClick}
          style={inputStyle}
          required={required}
          disabled={disabled}
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder={placeholder || label}
        />
      </StyledContainer>
    );
  }
);

InputField.displayName = "InputField";

export default InputField;
