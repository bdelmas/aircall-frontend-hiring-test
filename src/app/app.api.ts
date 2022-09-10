import axios from "axios";
import Cookies from "universal-cookie";

export const ax = axios.create({
  baseURL: "https://frontend-test-api.aircall.dev",
});

export function getConfig() {
  const cookies = new Cookies();

  return {
    headers: {
      Authorization: "Bearer " + cookies.get("access_token"),
    },
  };
}
