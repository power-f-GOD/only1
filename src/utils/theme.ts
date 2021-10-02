/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Theme, createTheme } from '@mui/material/styles';

interface RGBColor {
  r: number;
  g: number;
  b: number;
  a: number;
}

const primary: RGBColor = { r: 57, g: 84, b: 255, a: 1 };
const secondary: RGBColor = { r: 149, g: 57, b: 255, a: 1 };
const success: RGBColor = { r: 0, g: 176, b: 0, a: 1 };
const warning: RGBColor = { r: 255, g: 211, b: 57, a: 1 };
const error: RGBColor = { r: 255, g: 109, b: 57, a: 1 };
const grey: RGBColor = { r: 31, g: 33, b: 39, a: 1 };

export const theme: Theme = createTheme({
  palette: {
    primary: {
      light: `rgba(${primary.r}, ${primary.g}, ${primary.b}, 0.4)`,
      main: `rgba(${primary.r}, ${primary.g}, ${primary.b}, 0.7)`,
      dark: `rgba(${primary.r}, ${primary.g}, ${primary.b}, 1)`
    },
    secondary: {
      light: `rgba(${secondary.r}, ${secondary.g}, ${secondary.b}, 0.4)`,
      main: `rgba(${secondary.r}, ${secondary.g}, ${secondary.b}, 0.7)`,
      dark: `rgba(${secondary.r}, ${secondary.g}, ${secondary.b}, 1)`
    },
    success: {
      light: `rgba(${success.r}, ${success.g}, ${success.b}, 0.4)`,
      main: `rgba(${success.r}, ${success.g}, ${success.b}, 0.7)`,
      dark: `rgba(${success.r}, ${success.g}, ${success.b}, 1)`
    },
    warning: {
      light: `rgba(${warning.r}, ${warning.g}, ${warning.b}, 0.4)`,
      main: `rgba(${warning.r}, ${warning.g}, ${warning.b}, 0.7)`,
      dark: `rgba(${warning.r}, ${warning.g}, ${warning.b}, 1)`
    },
    error: {
      light: `rgba(${error.r}, ${error.g}, ${error.b}, 0.4)`,
      main: `rgba(${error.r}, ${error.g}, ${error.b}, 0.7)`,
      dark: `rgba(${error.r}, ${error.g}, ${error.b}, 1)`
    },
    grey: {
      100: `rgba(${grey.r}, ${grey.g}, ${grey.b}, 0.1)`,
      200: `rgba(${grey.r}, ${grey.g}, ${grey.b}, 0.2)`,
      300: `rgba(${grey.r}, ${grey.g}, ${grey.b}, 0.3)`,
      400: `rgba(${grey.r}, ${grey.g}, ${grey.b}, 0.4)`,
      500: `rgba(${grey.r}, ${grey.g}, ${grey.b}, 0.5)`,
      600: `rgba(${grey.r}, ${grey.g}, ${grey.b}, 0.6)`,
      700: `rgba(${grey.r}, ${grey.g}, ${grey.b}, 0.7)`,
      800: `rgba(${grey.r}, ${grey.g}, ${grey.b}, 0.8)`,
      900: `rgba(${grey.r}, ${grey.g}, ${grey.b}, 0.9)`
    }
  }
});
