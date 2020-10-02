import { css } from "styled-components";
import { colors, fontSizes, space, radii } from "./theme";

export const inputStyles = css`
  outline: none;
  color: ${colors.gray.xxdark};
  border-radius: ${radii.small};
  font-size: ${fontSizes.xsmall};
  padding: ${space[1]} ${space[2]};
  background-color: ${colors.white};
  border: 1px solid ${colors.gray.xxlight};

  ::placeholder {
    color: ${colors.gray.dark};
  }


  &:disabled, &:read-only {
    background-color: ${colors.gray.xxlight};
    pointer-events: none;
  }

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    /* stylelint-disable-next-line property-no-vendor-prefix */
    -webkit-appearance: none;
    margin: 0;
  }
`;
