import { Typography, TypographyProps } from "@mui/material";
import { styled as muiStyled } from "@mui/material/styles";

export const P = muiStyled((props: TypographyProps) => (
  <Typography {...props} />
))(({ theme }) => ({
  color: theme.palette.text.secondary,
}));
