import React from "react";
interface props {
  children: React.ReactNode;
  handler: Function;
}
export default function Button(props: props) {
  return (
    <button
      className="btn background text-light text-center mx-1"
      onClick={(e) => props.handler(e)}
      style={{ height: "fit-content" }}
    >
      {props.children}
    </button>
  );
}
React.memo(Button);
