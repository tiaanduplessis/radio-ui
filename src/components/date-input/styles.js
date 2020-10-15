import styled from "styled-components";
import DatePicker from "react-datepicker";
import { inputStyles } from "../input-styles";

export const StyledDatePicker = styled(DatePicker)`
  height: 35px;
  width: calc(100% - 1.6em);
  ${inputStyles}
`;
