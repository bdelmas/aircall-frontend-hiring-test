import { CallListComponent } from "../../features/calls/calls-list/call-list.component";
import { H4 } from "../../ui/atoms/h4";
import styled from "@emotion/styled";
import { Breadcrumbs, Typography } from "@mui/material";

export function Calls() {
  return (
    <CallsContainer>
      <TitleContainer>
        <H4 sx={{ display: "inline-block" }}>Aircall</H4>
      </TitleContainer>
      <BreadcumbsContainer>
        <Breadcrumbs aria-label="breadcrumb">
          <Typography
            sx={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              width: "160px",
              whiteSpace: "nowrap",
            }}
            color="text.primary"
          >
            Calls
          </Typography>
        </Breadcrumbs>
      </BreadcumbsContainer>
      <CallListComponent />
    </CallsContainer>
  );
}

const CallsContainer = styled.div``;

const TitleContainer = styled.div`
  margin: 1rem;
  max-width: 40rem;
  text-align: center;

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
