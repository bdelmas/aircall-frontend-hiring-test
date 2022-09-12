import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import styled from "@emotion/styled";

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
    <Container>
      <Outlet />
    </Container>
  );
}

const Container = styled.div`
  // Footer
  margin-bottom: 10rem;
`;
