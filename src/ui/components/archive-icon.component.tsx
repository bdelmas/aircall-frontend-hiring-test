import UnarchiveIcon from "@mui/icons-material/Unarchive";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";

export function ArchiveIconComponent(props: { isArchived: boolean }) {
  return props.isArchived ? (
    <UnarchiveIcon
      sx={{ color: "#acacac" }}
      fontSize={"small"}
      data-test-id="ArchiveIconComponent"
    />
  ) : (
    <ArchiveOutlinedIcon
      sx={{ color: "#b066dc" }}
      fontSize={"small"}
      data-test-id="ArchiveIconComponent"
    />
  );
}
