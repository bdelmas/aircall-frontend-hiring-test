import styled from "@emotion/styled";
import CottageIcon from "@mui/icons-material/Cottage";
import { Link as RouterLink } from "react-router-dom";
import { Breadcrumbs, Typography } from "@mui/material";
import { useParams } from "react-router";

import { CallShowComponent } from "../../features/calls/calls-show/call-show.component";
import { LogoutIconComponent } from "../../ui/components/logout-icon.component";
import { H4 } from "../../ui/atoms/h4";

export function Call() {
  const { id } = useParams();

  return (
    <CallsContainer>
      <TitleContainer>
        <H4 sx={{ display: "inline-block" }}>{`Aircall <3`}</H4>
        <LogoutIconComponent />
      </TitleContainer>
      <BreadcumbsContainer>
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/calls">
            <CottageIcon fontSize={"small"} />
            Calls
          </Link>
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
  position: relative;
  margin: 1rem;
  text-align: center;
  max-width: 40rem;

  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 640px) {
    justify-content: space-between;
    margin: 2rem auto;
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
  display: flex;

  svg {
    margin-right: 0.5rem;
    color: rgba(12, 169, 253, 0.84);
  }
`;
