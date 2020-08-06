import styled from "styled-components";
import { background, space, layout, flexbox } from "styled-system";
import PropTypes from "prop-types";
import theme from "./theme";

const image = props => `url(${props.source})`;

const BackgroundImage = styled.div.attrs(props => ({
  theme: props.theme || theme
}))`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${image};
  ${space}
  ${background}
  ${layout}
  ${flexbox}
`;

BackgroundImage.propTypes = {
  source: PropTypes.string.isRequired,
  ...space.propTypes,
  ...background.propTypes,
  ...layout.propTypes,
  ...flexbox.propTypes
};

BackgroundImage.displayName = "BackgroundImage";

export default BackgroundImage;
