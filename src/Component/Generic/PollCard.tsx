import React, { useEffect, useState } from "react";
import Button from "./Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import {
  pollDelRequest,
  optionDelRequest,
  optionDelReset,
  pollReset,
  pollDelReset,
} from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import getLocalStorage from "../../services/getLocalStorage";
import Loader from "./Loader";
import UserDashBoard from "../User/UserDashboard";
import LinkButton from "../Generic/LinkButton";
import SnackbarAuto from "./SnackbarAuto";
import { Events, ItemType, StateTypes } from "../../TypeScript/tsConfig";

interface props {
  item: ItemType;
  role: string;
}

export default function PollCard({ item, role }: props) {
  
  const dispatch = useDispatch();
  const statePollList = useSelector(
    (state: StateTypes) => state.pollFetchReducer
  );
  const optionDelstate = useSelector(
    (state: StateTypes) => state.optionDelReducer
  );
  const pollDelState = useSelector((state: StateTypes) => state.PollDelReducer);
  const [delid, setDelid] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (optionDelstate.isLoading) setOpen(true);
    if (optionDelstate.isSuccess) {
      dispatch(optionDelReset());
      dispatch(pollReset());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [optionDelstate.isSuccess]);

  useEffect(() => {
    if (pollDelState.isSuccess) {
      dispatch(pollDelReset());
      dispatch(pollReset());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pollDelState.isSuccess]);

  const handleClose = (event: Events, reason: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const deletePoll = (id: string) => {
    setDelid(id);
    dispatch(
      pollDelRequest({
        token: getLocalStorage("token"),
        id: id,
      })
    );
  };

  const deleteOption = (id: string, text: string, length: number) => {
    if (length <= 1) deletePoll(id);
    else {
      setOpen(true);
      dispatch(
        optionDelRequest({
          token: getLocalStorage("token"),
          id: id,
          text: text,
        })
      );
    }
  };

  return (
    <div className="row poll-card">
      {optionDelstate.isLoading && (
        <SnackbarAuto type="success" open={open} handleClose={handleClose}>
          Deleting....
        </SnackbarAuto>
      )}

      {optionDelstate.isError && (
        <SnackbarAuto type="error" open={open} handleClose={handleClose}>
          Techincal error
        </SnackbarAuto>
      )}

      <div className="col-12">
        <div className="d-flex justify-content-evenly admin-action">
          <h2 className="text-success p-2 m-auto admin-action_h2">
            Poll{" "}
            {statePollList.data.findIndex(
              (element:ItemType) => element._id === item._id
            ) + 1}{" "}
            : {item.title}
          </h2>
          {role === "admin" && (
            <div className="d-flex justify-content-center p-2 admin-action_btn">
              <Button handler={() => deletePoll(item._id)}>
                {pollDelState.isLoading && delid === item._id ? (
                  <Loader />
                ) : (
                  <DeleteIcon />
                )}
              </Button>
              <LinkButton to={`/admin-edit-poll/${item._id}`}>
                <EditIcon />
              </LinkButton>

              {item.options.length < 4 && (
                <LinkButton to={`/admin-add-option/${item._id}`}>
                  <AddIcon />
                </LinkButton>
              )}
            </div>
          )}
        </div>
        {item.options?.map((option, i) => (
          <div key={i} className="d-flex justify-content-evenly mt-2 mb-2">
            <h5 className="p-1 w-75">
              Option {i + 1} : {option.option}
            </h5>
            {role === "admin" && <h5 className="p-1">Vote : {option.vote}</h5>}
            {role === "admin" && (
              <Button
                handler={() =>
                  deleteOption(item._id, option.option, item.options.length)
                }
              >
                <DeleteIcon />
              </Button>
            )}
            {role === "Guest" && (
              <UserDashBoard item={item} name={option.option} index={i} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
React.memo(PollCard);
