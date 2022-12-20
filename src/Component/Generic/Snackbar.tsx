import * as React from "react";
import Stack from "@mui/material/Stack";
import MuiAlert,{AlertProps,AlertColor} from "@mui/material/Alert";

interface Props {
  type: AlertColor;
  message: string;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Snackbar({ type, message }: Props) {
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Alert severity={`${type}`} className="m-auto w-75">
        {message}
      </Alert>
    </Stack>
  );
}
React.memo(Snackbar);
