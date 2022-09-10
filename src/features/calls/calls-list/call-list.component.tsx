import { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";

import { useAppDispatch, useAppSelector } from "../../../app/app.hooks";
import { fetchCallListPending, selectCallListNodes } from "./call-list.slice";
import { CallItemComponent } from "./components/call-item.component";
import styled from "@emotion/styled";

export function CallListComponent() {
  const dispatch = useAppDispatch();
  const nodes = useAppSelector(selectCallListNodes);

  useEffect(() => {
    dispatch(fetchCallListPending({}));
  }, []);

  return (
    <CallListContainer>
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
  width: auto;
  margin-top: 2rem;

  @media (min-width: 740px) {
    margin: 4rem;

    border-radius: 1rem;
    border: 1px solid #e7e7e7;
    box-shadow: 0 8px 15px 9px #80808021;
  }
`;
