import React from "react";
import { Grid } from "@mui/material";
interface props{
  heading:string,
  children:any
}

export default function Wrapper(props:props) {
  return (
    <Grid container spacing={2} className="flex-form">
      <Grid item lg={4} md={3} sm={2} xs={1}></Grid>
      <Grid
        item
        lg={4}
        md={6}
        sm={8}
        xs={10}
        style={{ background: "white", padding: 0, borderRadius: "12px" }}
      >
        <h3 className="text-dark text-center mt-2">{props.heading}</h3>
        {props.children}
      </Grid>
      <Grid item lg={4} md={3} sm={2} xs={1}></Grid>
    </Grid>
  );
}

React.memo(Wrapper)
