import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useEffect } from "react";

import { useAppSelector } from "../../app/app.hooks";
import { selectIsSignedIn } from "../../features/users/sign-in/sign-in.slice";

export default function MainProtected() {
  const isSignedIn = useAppSelector(selectIsSignedIn);
  let navigate = useNavigate();

  useEffect(() => {
    if (!isSignedIn) {
      return navigate("/sign-in");
    }
  }, []);

  return (
    <div>
      {/*<h1>Bookkeeper</h1>*/}
      {/*<nav*/}
      {/*  style={{*/}
      {/*    borderBottom: "solid 1px",*/}
      {/*    paddingBottom: "1rem",*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <Link to="/sign-in">Sign In</Link> | <Link to="/calls">Calls</Link>*/}
      {/*</nav>*/}
      <Outlet />
    </div>
  );
}
