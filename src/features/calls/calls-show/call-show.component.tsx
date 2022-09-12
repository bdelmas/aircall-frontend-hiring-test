import { useEffect } from "react";
import { useParams } from "react-router";
import styled from "@emotion/styled";
import _ from "lodash";
import VoicemailIcon from "@mui/icons-material/Voicemail";
import CallMadeIcon from "@mui/icons-material/CallMade";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import dayjs from "dayjs";
import UnarchiveOutlinedIcon from "@mui/icons-material/UnarchiveOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";

import { useAppDispatch, useAppSelector } from "../../../app/app.hooks";
import {
  deleteCall,
  fetchCallShowPending,
  selectCallShowNodes,
} from "./call-show.slice";
import { H4 } from "../../../ui/atoms/h4";

export function CallShowComponent() {
  const dispatch = useAppDispatch();
  const call = useAppSelector(selectCallShowNodes);
  let { id } = useParams();

  useEffect(() => {
    dispatch(fetchCallShowPending({ id }));
    return () => {
      dispatch(deleteCall({}));
    };
  }, []);

  if (_.isEmpty(call)) return <></>;

  return (
    <>
      <CallShowContainer>
        <Row>
          <div>
            <CallIcon direction={call.direction} call_type={call.call_type} />{" "}
          </div>
          <div>{call.from}</div>
          <div style={{ marginLeft: "auto" }}>
            {dayjs(new Date(call.created_at)).fromNow()}
          </div>
          <div>
            {call.is_archived ? (
              <UnarchiveOutlinedIcon
                sx={{ color: "#acacac" }}
                fontSize={"small"}
              />
            ) : (
              <ArchiveOutlinedIcon
                sx={{ color: "#646464" }}
                fontSize={"small"}
              />
            )}
          </div>
        </Row>
        <Row>Caller's number: {call.from}</Row>
        <Row>Callee's number: {call.to}</Row>
        <Row>Aircall number used: {call.via}</Row>
        <Row>Lasted: {call.duration}s</Row>
      </CallShowContainer>
      {!_.isEmpty(call.notes) && (
        <CallShowContainer>
          <H4 sx={{ display: "inline-block" }}>Notes:</H4>
          {call.notes!.map((n) => {
            return <Note key={n.id}>{n.content}</Note>;
          })}
        </CallShowContainer>
      )}
    </>
  );
}

const CallShowContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  margin-top: 2rem;

  padding: 1rem;

  @media (min-width: 740px) {
    margin: 4rem;

    border-radius: 1rem;
    border: 1px solid #e7e7e7;
    box-shadow: 0 8px 15px 9px #80808021;
  }
`;

const Row = styled.div`
  flex: 1 1 auto;
  display: flex;

  padding: 1rem;

  & > :not([hidden]) ~ :not([hidden]) {
    margin-left: 1rem;
  }
`;

const Note = styled.div`
  flex: 1 1 auto;
  display: flex;

  padding: 1rem;

  & > :not([hidden]) ~ :not([hidden]) {
    margin-top: 1rem;
  }
`;

function CallIcon(props: { direction: string; call_type: string }) {
  const { direction, call_type } = props;

  if (call_type === "voicemail") {
    return <VoicemailIcon fontSize={"small"} sx={{ color: "yellow" }} />;
  }

  return direction === "outbound" ? (
    <CallMadeIcon sx={{ color: getColorCall(call_type) }} />
  ) : (
    <CallReceivedIcon sx={{ color: getColorCall(call_type) }} />
  );
}

function getColorCall(call_type: string) {
  if (call_type === "missed") {
    return "red";
  }

  return "green";
}
