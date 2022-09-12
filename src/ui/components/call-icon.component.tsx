import VoicemailIcon from "@mui/icons-material/Voicemail";
import CallMadeIcon from "@mui/icons-material/CallMade";
import CallReceivedIcon from "@mui/icons-material/CallReceived";

export function CallIconComponent(props: {
  direction: string;
  callType: string;
}) {
  const { direction, callType } = props;

  if (callType === "voicemail") {
    return <VoicemailIcon fontSize={"small"} sx={{ color: "#facc15" }} />;
  }

  return direction === "outbound" ? (
    <CallMadeIcon sx={{ color: getColorCall(callType) }} />
  ) : (
    <CallReceivedIcon sx={{ color: getColorCall(callType) }} />
  );
}

function getColorCall(callType: string) {
  if (callType === "missed") {
    return "#ef4444";
  }

  return "#0cc20c";
}
