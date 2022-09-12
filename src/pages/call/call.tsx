import styled from "@emotion/styled";

import { CallShowComponent } from "../../features/calls/calls-show/call-show.component";
import { H4 } from "../../ui/atoms/h4";
import { Breadcrumbs, Typography } from "@mui/material";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export function Call() {
  const { id } = useParams();

  return (
    <CallsContainer>
      <TitleContainer>
        <H4 sx={{ display: "inline-block" }}>Call Details</H4>
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
  margin: 2rem;
  text-align: center;

  @media (min-width: 700px) {
    margin: 1rem 4rem;
    text-align: left;
  }
`;

const BreadcumbsContainer = styled.div`
  margin: 2rem;
  text-align: center;

  @media (min-width: 700px) {
    margin: 1rem 4rem;
    text-align: left;
  }
`;
