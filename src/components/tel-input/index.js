import React from "react";
import PrefixedInput from "./prefixed-input";
import { countries } from "./data";

const countryCodeToFlag = ({ code, label, value }) => {
  const flag =
    typeof String.fromCodePoint !== "undefined"
      ? code
          .toUpperCase()
          .replace(/./g, char =>
            String.fromCodePoint(char.charCodeAt(0) + 127397)
          )
      : code;

  return {
    label: `${flag} ${value} ${label}`,
    value
  };
};

const countryOptions = countries.map(countryCodeToFlag);

const TelInput = props => <PrefixedInput {...props} options={countryOptions} />;

export default TelInput;
