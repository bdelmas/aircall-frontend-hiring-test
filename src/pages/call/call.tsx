import styled from "@emotion/styled";

import { CallShowComponent } from "../../features/calls/calls-show/call-show.component";
import { H4 } from "../../ui/atoms/h4";
import { Breadcrumbs, Typography } from "@mui/material";
import { useParams } from "react-router";
import { Link as RouterLink } from "react-router-dom";

export function Call() {
  const { id } = useParams();

  return (
    <CallsContainer>
      <TitleContainer>
        <H4 sx={{ display: "inline-block" }}>{`Aircall <3`}</H4>
      </TitleContainer>
      <BreadcumbsContainer>
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/calls">Calls</Link>
          <Typography
            sx={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              width: "160px",
              whiteSpace: "nowrap",
            }}
            color="text.primary"
          >
            {id}
          </Typography>
        </Breadcrumbs>
      </BreadcumbsContainer>
      <CallShowComponent />
    </CallsContainer>
  );
}

const CallsContainer = styled.div``;

const TitleContainer = styled.div`
  margin: 1rem auto;
  text-align: center;
  max-width: 40rem;

  @media (min-width: 640px) {
    margin: 2rem auto;
    text-align: left;
  }
`;

const BreadcumbsContainer = styled.div`
  margin: 2rem;
  max-width: 40rem;

  @media (min-width: 640px) {
    margin: 1rem auto;
    text-align: left;
  }
`;

const Link = styled(RouterLink)`
  color: #595959;
  text-decoration: none;
`;
