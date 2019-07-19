import React from 'react';
import { ThemeProvider } from "@lessondesk/schoolbus"

const Wrapper = ({ children }) => (
  <ThemeProvider>{children}</ThemeProvider>
);

export default Wrapper;
