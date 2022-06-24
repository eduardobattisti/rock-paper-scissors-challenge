// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    font: {
      weight: {
        semiBold: number;
        bold: number;
      };
      size: {
        tiny: string;
        base: string;
        lg: string;
        xl: string;
      };
      spacing: {
        tiny: string;
        small: string;
        large: string;
      };
    };
    colors: {
      white: string;
      primary: {
        scissors: {
          from: string;
          to: string;
        };
        paper: {
          from: string;
          to: string;
        };
        rock: {
          from: string;
          to: string;
        };
        lizard: {
          from: string;
          to: string;
        };
        cyan: {
          from: string;
          to: string;
        };
      };
      neutral: {
        darkText: string;
        scoreText: string;
        headerOutline: string;
      };
      background: {
        from: string;
        to: string;
      };
    };
    screens: {
      mobile: string;
      tablet: string;
      desktop: string;
      hd: string;
      full: string;
    };
  }
}
