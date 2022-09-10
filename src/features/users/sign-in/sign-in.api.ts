import { ax } from "../../../app/app.api";

export type signInDTO = {
  data: {
    access_token: string;
    refresh_token: string;
    user: {
      id: string;
      username: string;
    };
  };
};

export type fetchSignInPayload = {
  username: string;
  password: string;
};

export function fetchSignIn(action: {
  payload: fetchSignInPayload;
  type: string;
}) {
  return () =>
    ax.post("/auth/login", {
      username: action.payload.username,
      password: action.payload.password,
    });
}

export const signInAPI = { fetchSignIn };
export default signInAPI;
