import React from "react";
import { ThemeProvider, Box, Normalize } from "../src";

export const decorators = [
  Story => (
    <ThemeProvider>
      <>
        <Normalize />
        <Box p={3}>
          <Story />
        </Box>
      </>
    </ThemeProvider>
  )
];

export const parameters = {
  viewMode: "docs"
};
