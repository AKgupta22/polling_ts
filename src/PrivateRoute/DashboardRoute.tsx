import { Navigate } from "react-router-dom";
import getlocalStorage from "../services/getLocalStorage";
interface props{
  children:any
}

export default function DashbaordRoute(props:props) {
  const token = getlocalStorage("token");
  if (token) return { ...props.children };
  else return Navigate({ to: "/" });
}
