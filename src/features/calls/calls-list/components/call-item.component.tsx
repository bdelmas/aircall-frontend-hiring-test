import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import CallMadeIcon from "@mui/icons-material/CallMade";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import VoicemailIcon from "@mui/icons-material/Voicemail";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import UnarchiveOutlinedIcon from "@mui/icons-material/UnarchiveOutlined";

export function CallItemComponent(props: { node: any }) {
  const { node } = props;
  dayjs.extend(relativeTime);

  return (
    <TableRow>
      <TableCell sx={{ width: "25px" }} component="th" scope="node">
        <CallIcon direction={node.direction} call_type={node.call_type} />
      </TableCell>
      <TableCell>{node.from}</TableCell>
      <TableCell align="right">
        {dayjs(new Date(node.created_at)).fromNow()}
      </TableCell>
      <TableCell align="right" sx={{ width: "25px" }}>
        {node.is_archived ? (
          <UnarchiveOutlinedIcon sx={{ color: "#acacac" }} fontSize={"small"} />
        ) : (
          <ArchiveOutlinedIcon sx={{ color: "#646464" }} fontSize={"small"} />
        )}
      </TableCell>
    </TableRow>
  );
}

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
