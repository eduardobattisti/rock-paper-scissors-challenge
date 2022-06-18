import React from "react";
import { ThemeProvider, Theme as ITheme } from "styled-components";

const theme: ITheme = {
  font: {
    weight: {
      semiBold: 600,
      bold: 700,
    },
    size: {
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
    },
    spacing: {
      tiny: "1px",
      small: "2px",
      large: "3px",
    },
  },
  colors: {
    white: "#fff",
    primary: {
      scissors: {
        from: "hsl(39, 89%, 49%)",
        to: "hsl(40, 84%, 53%)",
      },
      paper: {
        from: "hsl(230, 89%, 62%)",
        to: "hsl(230, 89%, 65%)",
      },
      rock: {
        from: "hsl(349, 71%, 52%)",
        to: "hsl(349, 70%, 56%)",
      },
      lizard: {
        from: "hsl(261, 73%, 60%)",
        to: "hsl(261, 72%, 63%)",
      },
      cyan: {
        from: "hsl(189, 59%, 53%)",
        to: "hsl(189, 58%, 57%)",
      },
    },
    neutral: {
      darkText: "hsl(229, 25%, 31%)",
      scoreText: "hsl(229, 64%, 46%)",
      headerOutline: "hsl(217, 16%, 45%)",
    },
    background: {
      from: "hsl(214, 47%, 23%)",
      to: "hsl(237, 49%, 15%)",
    },
  },
  screens: {
    mobile: "375px",
    tablet: "768px",
    desktop: "1133px",
    hd: "1366px",
    full: "1920",
  },
};

const Theme = ({ children }: { children: JSX.Element }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
