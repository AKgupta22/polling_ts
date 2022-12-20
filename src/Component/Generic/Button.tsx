import React from "react";
interface props{
  children:any,
  handler:any
}
export default function Button(props:props) {
  
  return (
    <button className="btn background text-light text-center mx-1" onClick={props.handler} style={{height:"fit-content"}}>
      {props.children}
    </button>
  );
}
React.memo(Button)