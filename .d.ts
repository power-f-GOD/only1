import { PaletteColorVariant } from 'src/types';

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    success: PaletteColor;
    warning: PaletteColor;
    error: PaletteColor;
  }
  interface PaletteOptions {
    success?: PaletteColor;
    warning?: PaletteColor;
    error?: PaletteColor;
  }
}

declare module '@mui/material/styles/createTheme' {
  interface Theme {
    palette: {
      success: PaletteColorVariant;
      warning: PaletteColorVariant;
      error: PaletteColorVariant;
    };
  }
  interface ThemeOptions {
    palette?: Partial<
      Partial<{
        success: PaletteColorVariant;
        warning: PaletteColorVariant;
        error: PaletteColorVariant;
      }>
    >;
  }
}
