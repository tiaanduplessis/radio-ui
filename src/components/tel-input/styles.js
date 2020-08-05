import styled from "styled-components";
import { colors, fontSizes, space, radii } from "../theme";
import InputField from "../input-field";

export const StyledInput = styled.input`
  width: 7em;
  height: 35px;
  outline: none;
  margin-top: 1.3em;
  position: absolute;
  color: ${colors.gray.xxdark};
  border-radius: ${radii.small};
  font-size: ${fontSizes.xsmall};
  padding: ${space[1]} ${space[2]};
  background-color: ${colors.white};
  border: 1px solid ${colors.gray.xxlight};

  ::placeholder {
    color: ${colors.gray.dark};
  }

  &:disabled {
    background-color: ${colors.gray.xxlight};
  }

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    /* stylelint-disable-next-line property-no-vendor-prefix */
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const StyledInputField = styled(InputField).attrs(() => ({
  inputStyle: {
    padding: `0 0 0 8em`
  }
}))``;
