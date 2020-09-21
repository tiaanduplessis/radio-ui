import React, { forwardRef } from "react";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Flex from "../flex";
import {
  StyledContainer,
  StyledLabel,
  StyledAsterisk,
  StyledAlertText,
  StyledInput,
  StyledTextArea
} from "./styles";

const InputField = forwardRef(
  (
    {
      id,
      name,
      value,
      disabled,
      required,
      alertText,
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
      ...props
    },
    ref
  ) => {
    const { errors } = useFormContext();

    const inputProps = {
      id,
      ref,
      type,
      name,
      value,
      onBlur,
      onClick,
      required,
      disabled,
      onChange,
      onKeyDown,
      style: inputStyle,
      autoComplete: "off",
      placeholder: placeholder || label,
      ...props
    };

    return (
      <StyledContainer fullWidth={fullWidth} style={containerStyle}>
        <Flex justifyContent="space-between">
          <StyledLabel htmlFor={id}>
            {label}
            {!disabled && required && (
              <StyledAsterisk aria-label="required">*</StyledAsterisk>
            )}
          </StyledLabel>
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <StyledAlertText>{alertText || message}</StyledAlertText>
            )}
          />
        </Flex>
        {type === "textarea" ? (
          <StyledTextArea {...inputProps} />
        ) : (
          <StyledInput {...inputProps} />
        )}
      </StyledContainer>
    );
  }
);

InputField.displayName = "InputField";

export default InputField;
