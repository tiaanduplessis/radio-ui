import React from "react";
import { useFormContext } from "react-hook-form";
import Flex from "../flex";
import withInputWrapper from "../with-input-wrapper";
import withAutocomplete from "../with-auto-complete";
import { StyledCodeInput, StyledNumberInput } from "./styles";

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
  readOnly,
  required,
  errorName,
  placeholder,
  options = [],
  onChange = () => {},
  onClick = () => {}
}) => {
  const { watch, setValue, trigger } = useFormContext();

  const currentValue = watch(name);

  const { label: optionLabel, value: optionValue } = options.find(({ value }) =>
    currentValue?.includes(value)
  ) || { label: value, value: "" };

  return (
    <Flex>
      <StyledCodeInput
        value={optionLabel}
        onClick={onClick}
        onChange={onChange}
        placeholder="Code"
        disabled={disabled}
        readOnly={readOnly}
      />
      <StyledNumberInput
        id={id}
        name={name}
        type="number"
        label={label}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        placeholder={placeholder || label}
        onKeyDown={preventForbiddenKeys}
        value={currentValue?.replace(optionValue, "")}
        onBlur={async () => trigger(errorName || name)}
        onChange={e => setValue(name, `${optionValue}${e.target.value}`)}
      />
    </Flex>
  );
};

const WrappedInput = withInputWrapper(PrefixedInput);

const Input = props => <WrappedInput {...props} fullWidth />;

export default withAutocomplete(Input);
