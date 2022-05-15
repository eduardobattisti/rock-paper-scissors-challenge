import Theme from "@/Theme";
import React from "react";
import { render } from "@testing-library/react";

const themeWrapper = (children: React.ReactElement) =>
  render(<Theme>{children}</Theme>);

export default themeWrapper;
