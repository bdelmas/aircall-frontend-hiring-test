import LogoutIcon from "@mui/icons-material/Logout";
import { cleanCookies } from "universal-cookie/es6/utils";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../app/app.hooks";
import { logout } from "../../features/users/sign-in/sign-in.slice";

export function LogoutIconComponent() {
  const dispatch = useAppDispatch();
  let navigate = useNavigate();

  return (
    <LogoutIcon
      sx={{
        marginLeft: "auto",
        position: "absolute",
        right: 0,
        marginRight: "1rem",
        color: "#b066dc",
        cursor: "pointer",
      }}
      onClick={() => {
        cleanCookies();
        dispatch(logout());
        navigate("/sign-in");
      }}
    />
  );
}
