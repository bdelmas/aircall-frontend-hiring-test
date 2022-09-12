import { useEffect } from "react";
import { useParams } from "react-router";
import UnarchiveOutlinedIcon from "@mui/icons-material/UnarchiveOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import styled from "@emotion/styled";
import _ from "lodash";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";

import { useAppDispatch, useAppSelector } from "../../../app/app.hooks";
import {
  deleteCall,
  fetchCallShowPending,
  putCallShowArchivePending,
  selectCallShowNodes,
} from "./call-show.slice";
import { H4 } from "../../../ui/atoms/h4";
import { CallIconComponent } from "../../../ui/components/call-icon.component";
import { putCallListArchivePending } from "../calls-list/call-list.slice";
import { ArchiveIconComponent } from "../../../ui/components/archive-icon.component";

export function CallShowComponent() {
  const dispatch = useAppDispatch();
  const call = useAppSelector(selectCallShowNodes);
  let { id } = useParams();
  dayjs.extend(duration);
  dayjs.extend(relativeTime);

  useEffect(() => {
    dispatch(fetchCallShowPending({ id }));
    return () => {
      dispatch(deleteCall({}));
    };
  }, []);

  //TODO: add loading card effect
  if (_.isEmpty(call)) return <></>;

  return (
    <div>
      <CallShowDetailsContainer>
        <TitleContainer>
          <H4 sx={{ display: "inline-block" }}>Call Details</H4>
        </TitleContainer>
        <Row>
          <div>
            <CallIconComponent
              direction={call.direction}
              callType={call.call_type}
            />{" "}
          </div>
          <div>{call.from}</div>
          <div style={{ marginLeft: "auto" }}>
            {dayjs(new Date(call.created_at)).fromNow()}
          </div>
          <div
            onClick={() => dispatch(putCallShowArchivePending({ id: call.id }))}
            style={{ cursor: "pointer" }}
          >
            <ArchiveIconComponent isArchived={call.is_archived} />
          </div>
        </Row>
        <Row>Caller's number: {call.from}</Row>
        <Row>Callee's number: {call.to}</Row>
        <Row>Aircall number used: {call.via}</Row>
        <Row>
          Lasted: about {dayjs.duration(call.duration, "seconds").humanize()}
        </Row>
      </CallShowDetailsContainer>
      {!_.isEmpty(call.notes) && (
        <CallShowNoteContainer>
          <TitleContainer>
            <H4 sx={{ display: "inline-block" }}>Notes</H4>
          </TitleContainer>
          {call.notes!.map((n) => {
            return <Note key={n.id}>{n.content}</Note>;
          })}
        </CallShowNoteContainer>
      )}
    </div>
  );
}

const CallShowContainerBase = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  max-width: 40rem;
  margin: 2rem auto 0;

  padding: 1rem;

  background-color: white;
  box-shadow: 0px 5px 30px 2px #00000024;
  border: solid 1px #cfcfcf61;
  border-left: none;
  border-right: none;

  @media (min-width: 640px) {
    margin: 3rem auto;

    border-radius: 1rem;
    border: 1px solid #e7e7e7;
    box-shadow: 0 8px 15px 9px #80808021;
  }
`;

const CallShowDetailsContainer = styled(CallShowContainerBase)`
  max-width: 40rem;
`;

const CallShowNoteContainer = styled(CallShowContainerBase)``;

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

const TitleContainer = styled.div`
  margin: 0 1rem;
  text-align: center;

  @media (min-width: 640px) {
    text-align: left;
  }
`;
