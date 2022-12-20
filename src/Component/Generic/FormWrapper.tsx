import React from "react";
import { Box } from "@mui/system";
interface props {
  children: React.ReactNode;
  handler: Function;
}
export default function FormWrapper(props: props) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "100%" },
      }}
      autoComplete="off"
      onSubmit={(e) => props.handler(e)}
      className="w-75 m-auto p-4"
    >
      {props.children}
    </Box>
  );
}

React.memo(FormWrapper);
