import React from "react";
interface Props{
  text:string,
  handler:Function
}
export default function AlertAdd({ text ,handler }:Props) {
  
  return (
    <div
      className="alert alert-danger alert-dismissible fade show mt-2"
      role="alert"
    >
      {text}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={(e)=>handler(e)}
      ></button>
    </div>
  )
}
React.memo(AlertAdd)
