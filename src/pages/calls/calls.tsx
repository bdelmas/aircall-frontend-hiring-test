import styled from "@emotion/styled";
import { Breadcrumbs, Typography } from "@mui/material";
import CottageIcon from "@mui/icons-material/Cottage";

import { LogoutIconComponent } from "../../ui/components/logout-icon.component";
import { CallListComponent } from "../../features/calls/calls-list/call-list.component";
import { H4 } from "../../ui/atoms/h4";

export function Calls() {
  return (
    <CallsContainer>
      <TitleContainer>
        <H4 sx={{ display: "inline-block" }}>Aircall</H4>
        <LogoutIconComponent />
      </TitleContainer>
      <BreadcumbsContainer>
        <Breadcrumbs aria-label="breadcrumb">
          <Typography
            sx={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              width: "160px",
              whiteSpace: "nowrap",
              display: "flex",
            }}
            color="text.primary"
          >
            <CottageIcon
              fontSize={"small"}
              sx={{ marginRight: "0.5rem", color: "rgba(12, 169, 253, 0.84)" }}
            />
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
  position: relative;
  margin: 1rem;
  max-width: 40rem;

  display: flex;
  justify-content: space-around;
  align-items: center;

  text-align: center;

  @media (min-width: 640px) {
    justify-content: space-between;
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
