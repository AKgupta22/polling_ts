import { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import getlocalStorage from "../services/getLocalStorage";
interface props {
  children: ReactElement;
}

export default function AdminRoute(props: props) {
  const token = getlocalStorage("token");
  const role = getlocalStorage("role");
  if (token && role === "admin") return props.children;
  else return Navigate({ to: "/dashboard" });
}
