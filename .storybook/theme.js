import { create } from "@storybook/theming";

import theme from "../src/components/theme";

export default create({
  base: "light",
  colorPrimary: theme.colors.primary,
  colorSecondary: theme.colors.gray[3],
  appBg: theme.colors.white,
  appContentBg: theme.colors.white,
  appBorderColor: theme.colors.gray[1],
  appBorderRadius: theme.radii[1],
  fontBase: theme.fonts[0],
  fontCode: "monospace",
  textColor: theme.colors.dark,
  barTextColor: theme.colors.gray[3],
  barSelectedColor: theme.colors.primary,
  barBg: theme.colors.white,
  inputBg: theme.colors.white,
  inputBorder: theme.colors.gray[0],
  inputTextColor: theme.colors.black,
  inputBorderRadius: theme.radii[1],
  brandTitle: "Radio Retail | UI",
  brandUrl: "http://www.zapop.com/service/radioretail/"
});
