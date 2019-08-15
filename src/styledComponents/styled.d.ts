// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      main: string;
      secondary: string;
      success: string;
      danger: string;
      light: string;
      light2: string;
      light3: string;
      gray: string;
      muted: string;
      yellow: string;
      red: string;
      blue: string;
      dark: string;
    };
  }
}