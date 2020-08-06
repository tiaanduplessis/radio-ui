import styled from "styled-components";
import { space, color, layout, flexbox } from "styled-system";

import theme from "./theme";

const Box = styled.div.attrs(props => ({
  theme: props.theme || theme
}))`
  ${space}
  ${layout}
  ${color}
  ${flexbox}
`;

Box.displayName = "Box";

Box.propTypes = {
  ...space.propTypes,
  ...layout.propTypes,
  ...color.propTypes,
  ...flexbox.propTypes
};

export default Box;
