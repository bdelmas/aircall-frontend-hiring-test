import { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";

import { useAppDispatch, useAppSelector } from "../../../app/app.hooks";
import { fetchCallListPending, selectCallListNodes } from "./call-list.slice";
import { CallItemComponent } from "./components/call-item.component";
import styled from "@emotion/styled";
import { H4 } from "../../../ui/atoms/h4";

export function CallListComponent() {
  const dispatch = useAppDispatch();
  const nodes = useAppSelector(selectCallListNodes);

  useEffect(() => {
    dispatch(fetchCallListPending({}));
  }, []);

  return (
    <CallListContainer>
      <TitleContainer>
        <H4 sx={{ display: "inline-block" }}>Calls List</H4>
      </TitleContainer>
      <TableContainer
        sx={{
          width: "auto",
        }}
      >
        <Table aria-label="simple table">
          <TableBody>
            {nodes.map((n) => (
              <CallItemComponent key={n.id} node={n} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </CallListContainer>
  );
}

const CallListContainer = styled.div`
  max-width: 40rem;

  width: auto;
  margin-top: 2rem;

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

const TitleContainer = styled.div`
  margin: 0 1rem;
  text-align: center;

  @media (min-width: 640px) {
    text-align: left;
  }
`;
