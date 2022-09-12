import { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";

import { useAppDispatch, useAppSelector } from "../../../app/app.hooks";
import {
  fetchCallListPending,
  selectCallListNodes,
  selectCallListTotalCount,
} from "./call-list.slice";
import { CallItemComponent } from "./components/call-item.component";
import styled from "@emotion/styled";
import { H4 } from "../../../ui/atoms/h4";
import { Pagination } from "@mui/material";

export function CallListComponent() {
  const dispatch = useAppDispatch();
  const nodes = useAppSelector(selectCallListNodes);
  const totalCount = useAppSelector(selectCallListTotalCount);
  const maxPage = Math.floor(totalCount / 10);

  useEffect(() => {
    dispatch(fetchCallListPending({}));
  }, []);

  return (
    <CallListContainer>
      <TitleContainer>
        <H4
          sx={{
            display: "inline-block",
            backgroundImage:
              "linear-gradient(310deg, rgb(127 155 255), #b066dcc9)",
          }}
        >
          Calls List
        </H4>
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
      <PaginationContainer>
        <Pagination
          count={maxPage}
          color="primary"
          sx={{ textAlign: "center" }}
          onChange={(e, v) =>
            dispatch(fetchCallListPending({ offset: Math.floor(v * 10 - 10) }))
          }
        />
      </PaginationContainer>
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

const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 2rem 0;
`;
