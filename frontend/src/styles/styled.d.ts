import 'styled-components'; /* importar para sobrescrever partes */

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,
  
    colors: {
      textLight: string,
      textDark: string,
      textThemed:string,
      primary: string,
      primaryAccent: string,
      secondary: string,
      secondaryAccent: string,
      fallbackWhite: string,
    },

    fonts: string | string[],

    fontSizes: {
      smaller: string,
      small: string,
      medium: string,
      xMedium: string,
      large: string,
      xLarge: string;
      xxLarge: string;
    },
  }
}