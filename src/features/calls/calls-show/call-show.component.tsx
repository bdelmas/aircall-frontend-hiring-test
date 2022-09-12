import { useEffect } from "react";
import { useParams } from "react-router";
import UnarchiveOutlinedIcon from "@mui/icons-material/UnarchiveOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import styled from "@emotion/styled";
import _ from "lodash";
import dayjs from "dayjs";

import { useAppDispatch, useAppSelector } from "../../../app/app.hooks";
import {
  deleteCall,
  fetchCallShowPending,
  selectCallShowNodes,
} from "./call-show.slice";
import { H4 } from "../../../ui/atoms/h4";
import { CallIconComponent } from "../../../ui/components/call-icon.component";

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
            <CallIconComponent
              direction={call.direction}
              callType={call.call_type}
            />{" "}
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
