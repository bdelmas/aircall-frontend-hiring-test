import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Button, FormControlLabel, FormGroup, TextField } from "@mui/material";
import styled from "@emotion/styled";

import { Password } from "../../../ui/molecules/password";
import { H4 } from "../../../ui/atoms/h4";
import { P } from "../../../ui/atoms/p";
import { Switch } from "../../../ui/atoms/switch";
import theme from "../../../ui/themes";
import { useAppDispatch, useAppSelector } from "../../../app/app.hooks";
import { fetchSignInPending, selectIsSignedIn } from "./sign-in.slice";

interface State {
  username: string;
  password: string;
  showPassword: boolean;
  rememberMe: boolean;
}

export function SingInCard() {
  const dispatch = useAppDispatch();
  const isSignedIn = useAppSelector(selectIsSignedIn);
  let navigate = useNavigate();

  const [values, setValues] = useState<State>({
    username: "",
    password: "",
    showPassword: false,
    rememberMe: true,
  });

  useEffect(() => {
    if (isSignedIn) {
      return navigate("/calls");
    }
  }, [isSignedIn]);

  const handleRememberMeChange = (
    event: ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValues({ ...values, rememberMe: checked });
  };

  const handleChange =
    (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <SignInCard>
      <Stack>
        <Row>
          <H4>Welcome Back</H4>
          <P sx={{ paddingTop: "1rem" }}>
            Enter your username and password to sing in
          </P>
        </Row>
        <Row>
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            value={values.username}
            onChange={handleChange("username")}
          />
        </Row>
        <Row>
          <Password
            values={values}
            handleChange={handleChange("password")}
            handleClickShowPassword={handleClickShowPassword}
            handleMouseDownPassword={handleMouseDownPassword}
          />
        </Row>
        <Row>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  onChange={handleRememberMeChange}
                  checked={values.rememberMe}
                />
              }
              label="Remember me"
              sx={{ color: theme.palette.text.secondary, userSelect: "none" }}
            />
          </FormGroup>
        </Row>
        <Row>
          <Button
            onClick={() =>
              dispatch(
                fetchSignInPending({
                  username: values.username,
                  password: values.password,
                })
              )
            }
            variant="contained"
            sx={{
              backgroundImage:
                "linear-gradient(310deg, rgb(33, 82, 255), rgb(33, 212, 253))",
            }}
          >
            Sign In
          </Button>
        </Row>
      </Stack>
    </SignInCard>
  );
}

const SignInCard = styled.div`
  min-height: 4rem;

  background-color: white;
  box-shadow: 0 16px 30px 2px #00000024;
  border: solid 1px #cfcfcf61;
  padding: 2rem;

  @media (min-width: 640px) {
    width: 16rem;
    margin: auto;
    border-radius: 1rem;
  }
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;

  & > :not([hidden]) ~ :not([hidden]) {
    padding-top: 2rem;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  //background-image: linear-gradient(159deg,#20da72,#7f87ff 49%,#f65aad 76%,#ec3d43);
  //background-image: linear-gradient(162deg,#36db26 22%,#7f87ff 49%,#f65aad 76%,#ec3d43);
`;
