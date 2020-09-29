import styled from "styled-components";
import Flex from "../flex";
import { colors, fontSizes, fontWeights, space } from "../theme";

export const StyledContainer = styled(Flex).attrs({
  flexDirection: "column"
})`
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "calc(50% - 1em)")};
  margin-bottom: ${space[3]};
`;

export const StyledFlex = styled(Flex)`
  justify-content: space-between;
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
