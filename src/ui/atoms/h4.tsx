import { Typography, TypographyProps } from "@mui/material";
import { styled as muiStyled } from "@mui/material/styles";

export const H4 = muiStyled((props: TypographyProps) => (
  <Typography variant="h4" {...props} />
))(({ theme }) => ({
  fontWeight: 700,
  backgroundImage:
    "linear-gradient(310deg, rgb(33, 82, 255), rgb(33, 212, 253))",
  backgroundClip: "text",
  textFillColor: "transparent",
}));
