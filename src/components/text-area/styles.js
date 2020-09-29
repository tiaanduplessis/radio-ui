import styled from "styled-components";
import { inputStyles } from "components/inputs/styles";

export const StyledTextArea = styled.textarea`
  resize: none;
  min-height: 10em;
  font-family: inherit;
  ${inputStyles}
`;
