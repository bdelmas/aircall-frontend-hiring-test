import Grid2 from "@mui/material/Unstable_Grid2";
import styled from "@emotion/styled";

import { SingInCard } from "../../features/users/sign-in/sign-in-card.component";

import background from "../../ui/assets/sign-in-background.jpeg";

export function SignIn() {
  return (
    <Grid2
      container
      sx={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <GridItemLeft>
        <SingInCard />
      </GridItemLeft>
      <GridItemRight />
    </Grid2>
  );
}

const GridItem = styled.div`
  flex: 1 1 0;
`;

const GridItemLeft = styled(GridItem)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-image: url(${background});
  background-position: center;
  background-size: contain;
`;

const GridItemRight = styled(GridItem)`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    z-index: -1;

    background-image: linear-gradient(
      45deg,
      rgb(33, 82, 255),
      rgb(33 212 253),
      rgb(176 102 220)
    );
  }
`;
