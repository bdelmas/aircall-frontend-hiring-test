import { CallListComponent } from "../../features/calls/calls-list/call-list.component";
import { H4 } from "../../ui/atoms/h4";
import styled from "@emotion/styled";

export function Calls() {
  return (
    <CallsContainer>
      <TitleContainer>
        <H4 sx={{ display: "inline-block" }}>Call history</H4>
      </TitleContainer>
      <CallListComponent />
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
