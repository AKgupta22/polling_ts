import React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert ,{AlertProps,AlertColor} from "@mui/material/Alert";
interface props{
  handleClose:Function,
  open:boolean,
  type:AlertColor,
  children:React.ReactNode
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SnackbarAuto(props:props) {
  
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={props.open}
        autoHideDuration={3000}
        onClose={(e)=>props.handleClose(e)}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
      >
        <Alert
          onClose={(e)=>props.handleClose(e)}
          severity={`${props.type}`}
          sx={{ width: "100%" }}
        >
          {props.children}
        </Alert>
      </Snackbar>
    </Stack>
  );
}

React.memo(SnackbarAuto);
