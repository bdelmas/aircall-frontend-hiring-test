import * as React from "react";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";

interface PropsType {
  values: {
    showPassword: boolean;
    password: string;
  };
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClickShowPassword: React.MouseEventHandler<HTMLButtonElement>;
  handleMouseDownPassword: React.MouseEventHandler<HTMLButtonElement>;
}

export function Password(props: PropsType) {
  return (
    <FormControl variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={props.values.showPassword ? "text" : "password"}
        value={props.values.password}
        onChange={props.handleChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={props.handleClickShowPassword}
              onMouseDown={props.handleMouseDownPassword}
              edge="end"
            >
              {props.values.showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
    </FormControl>
  );
}
