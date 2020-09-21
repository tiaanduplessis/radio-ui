import styled, { css } from "styled-components";
import Flex from "../flex";
import { colors, fontSizes, fontWeights, space, radii } from "../theme";

const inputStyles = css`
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

export const StyledContainer = styled(Flex).attrs(() => ({
  flexDirection: "column"
}))`
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "calc(50% - 1em)")};
  margin-bottom: ${space[3]};
`;

export const StyledLabel = styled.label`
  height: 1em;
  margin-bottom: ${space[1]};
  color: ${colors.gray.xxdark};
  font-size: ${fontSizes.xsmall};
  font-weight: ${fontWeights.bold};
`;

export const StyledAsterisk = styled.span`
  color: ${colors.red[1]};
  margin-left: ${space[1]};
`;

export const StyledAlertText = styled.span.attrs({
  role: "alert"
})`
  font-style: italic;
  color: ${colors.red[1]};
  font-size: ${fontSizes.xsmall};
  font-weight: ${fontWeights.bold};
`;

export const StyledInput = styled.input`
  height: 35px;
  ${inputStyles}
`;

export const StyledTextArea = styled.textarea`
  resize: none;
  min-height: 10em;
  font-family: inherit;
  ${inputStyles}
`;
