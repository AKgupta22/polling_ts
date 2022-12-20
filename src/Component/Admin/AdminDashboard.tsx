import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pollRequest } from "../../Redux/Actions";
import getLocalStorage from "../../services/getLocalStorage";
import PollCard from "../Generic/PollCard";
import BackdropLoader from "../Generic/BackdropLoader";
import { Link, useNavigate } from "react-router-dom";
import Pagination from "../Generic/Pagination";
import Button from "../Generic/Button";
import { stateTypes } from "../../TypeScript/tsConfig";

export default function AdminDashboard() {
  
  const statePollList = useSelector(
    (state: stateTypes) => state.pollFetchReducer
  );
  const [data, setData] = useState<[]>([]);
  const dispatch = useDispatch();
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (statePollList.isSuccess === false) {
      dispatch(pollRequest({ token: getLocalStorage("token") }));
    }
    setRole(getLocalStorage("role") || "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statePollList.isSuccess]);

  const Logout = () => {
    localStorage.removeItem("login");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  };

  return (
    <div className="container-fluid" style={{ minHeight: "100vh" }}>
      <h2 className="text-light mb-2 p-4 text-center">
        {role === "admin" ? "Admin" : "User"} Dashboard{" "}
      </h2>
      {role === "admin" && (
        <div className="w-100 text-center mb-2">
          <Link
            to="/admin-add-poll"
            className="btn btn-sm btn-success text-light text-center p-3"
            style={{ borderRadius: "1rem" }}
          >
            Add Poll
          </Link>
        </div>
      )}
      <div className="w-100 text-center mb-2">
        <Button handler={Logout}>Logout</Button>
      </div>
      {statePollList.isLoading ? <BackdropLoader /> : ""}
      <div className="row">
        {data?.map((item, i) => (
          <div
            key={i}
            className="col-md-8 col-sm-10 col-11 m-auto mt-2 mb-2 my-card"
          >
            <PollCard item={item} role={role} />
          </div>
        ))}
      </div>
      <Pagination setData={setData} />
    </div>
  );
}
