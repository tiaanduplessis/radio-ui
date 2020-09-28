import React from "react";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import {
  StyledContainer,
  StyledFlex,
  StyledLabel,
  StyledAsterisk,
  StyledAlertText
} from "./styles";

const withInputWrapper = WrappedComponent => props => {
  const {
    id,
    name,
    disabled,
    required,
    alertText,
    fullWidth,
    label = "",
    containerStyle = {}
  } = props;

  const { errors } = useFormContext();

  return (
    <StyledContainer fullWidth={fullWidth} style={containerStyle}>
      <StyledFlex>
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
      </StyledFlex>
      <WrappedComponent {...props} />
    </StyledContainer>
  );
};

export default withInputWrapper;
