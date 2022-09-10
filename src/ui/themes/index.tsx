import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#2392fe",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    common: {
      black: "#46505A",
    },
    // // Used by the functions below to shift a color's luminance by approximately
    // // two indexes within its tonal palette.
    // // E.g., shift from Red 500 to Red 300 or Red 700.
    // tonalOffset: 0.2,
  },
});

export default theme;
