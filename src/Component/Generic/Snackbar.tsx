import * as React from "react";
import Stack from "@mui/material/Stack";
import MuiAlert from "@mui/material/Alert";
interface props{
  type:string,
  message:string
}
const Alert = React.forwardRef(function Alert(props:any, ref:any) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Snackbar({ type, message }:props) {
  
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Alert severity={`${type}`} className="m-auto w-75">
        {message}
      </Alert>
    </Stack>
  );
}
React.memo(Snackbar)
