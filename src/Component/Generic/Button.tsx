import React from "react";
interface Props {
  children: React.ReactNode;
  handler: Function;
}
export default function Button(props: Props) {
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
