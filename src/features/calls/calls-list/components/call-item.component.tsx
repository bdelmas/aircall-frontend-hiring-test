import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useNavigate } from "react-router";

import { CallIconComponent } from "../../../../ui/components/call-icon.component";
import { putCallListArchivePending } from "../call-list.slice";
import { useAppDispatch } from "../../../../app/app.hooks";
import { ArchiveIconComponent } from "../../../../ui/components/archive-icon.component";

export function CallItemComponent(props: { node: any }) {
  const { node } = props;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  dayjs.extend(relativeTime);

  return (
    <TableRow sx={{ cursor: "pointer" }}>
      <TableCell
        sx={{ width: "25px", cursor: "pointer" }}
        component="th"
        scope="node"
        onClick={() => navigate(`/calls/${node.id}`)}
      >
        <CallIconComponent
          direction={node.direction}
          callType={node.call_type}
        />
      </TableCell>
      <TableCell onClick={() => navigate(`/calls/${node.id}`)}>
        <div>{node.from}</div>
      </TableCell>
      <TableCell align="right" onClick={() => navigate(`/calls/${node.id}`)}>
        {dayjs(new Date(node.created_at)).fromNow()}
      </TableCell>
      <TableCell
        align="right"
        sx={{ width: "25px" }}
        onClick={() => dispatch(putCallListArchivePending({ id: node.id }))}
      >
        <ArchiveIconComponent isArchived={node.is_archived} />
      </TableCell>
    </TableRow>
  );
}
