import React from "react";
import { Link } from "react-router-dom";
interface Props{
  to:string,
  children:React.ReactNode
}
const LinkButton = (props:Props) => (
  
  <Link className="btn background text-light text-center mx-1" to={props.to} style={{height:"min-content"}}>
    {props.children}
  </Link>
);

export default LinkButton;
