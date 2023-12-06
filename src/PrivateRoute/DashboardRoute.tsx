import { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import getlocalStorage from "../services/getLocalStorage";
interface Props{
  children:ReactElement
}

export default function DashbaordRoute(props:Props) {
  const token = getlocalStorage("token");
  if (token) return props.children ;
  else return Navigate({ to: "/" });
}
