import React from "react";
import { useFormContext } from "react-hook-form";
import { StyledInput, StyledInputField } from "./styles";
import withAutocomplete from "../with-auto-complete";

const forbiddenKeyCodes = [69, 187, 188, 189, 190];

const preventForbiddenKeys = e => {
  const key = e.which || e.keyCode;

  if (forbiddenKeyCodes.includes(key)) {
    e.preventDefault();
  }
};

const PrefixedInput = ({
  id,
  name,
  label,
  value,
  disabled,
  required,
  placeholder,
  options = [],
  onChange = () => {},
  onClick = () => {}
}) => {
  const { watch, setValue, triggerValidation } = useFormContext();

  const currentValue = watch(name);

  const { label: optionLabel, value: optionValue } = options.find(({ value }) =>
    currentValue?.includes(value)
  ) || { label: value, value: "" };

  return (
    <>
      <StyledInput
        value={optionLabel}
        onClick={onClick}
        onChange={onChange}
        placeholder="Code"
        disabled={disabled}
      />
      <StyledInputField
        id={id}
        fullWidth
        name={name}
        type="number"
        label={label}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
        onKeyDown={preventForbiddenKeys}
        value={currentValue?.replace(optionValue, "")}
        onBlur={async () => triggerValidation(name)}
        onChange={e => setValue(name, `${optionValue}${e.target.value}`)}
      />
    </>
  );
};

export default withAutocomplete(PrefixedInput);
