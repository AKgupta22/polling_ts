import React, { useEffect, useState } from "react";
import TablePagination from "@mui/material/TablePagination";
import { useSelector } from "react-redux";
import setLocalStorage from "../../services/setLocalStorage";
import getLocalStorage from "../../services/getLocalStorage";
import removeLocalStorage from "../../services/removeLocalStorage";
import { events, stateTypes } from "../../TypeScript/tsConfig";
interface props {
  setData: Function;
}

export default function Pagination({ setData }: props) {
  
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [count, setCount] = useState(0);
  const pollListState = useSelector(
    (state: stateTypes) => state.pollFetchReducer
  );

  useEffect(() => {
    if (getLocalStorage("rows"))
      setRowsPerPage(parseInt(getLocalStorage("rows") || ""));
    if (getLocalStorage("page"))
      setPage(parseInt(getLocalStorage("page") || ""));
  }, []);

  useEffect(() => {
    setCount(pollListState.data.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pollListState.isSuccess]);

  useEffect(() => {
    let tempData = [...pollListState.data];
    const startIndex = page * rowsPerPage;
    const lastIndex = startIndex + rowsPerPage;
    tempData = tempData.slice(startIndex, lastIndex);
    if (tempData.length <= 0) {
      if (count > 0) setPage((prev) => prev - 1);
    }
    setData(tempData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rowsPerPage, page, pollListState.isSuccess]);

  const handleChangePage:Function = (event: events, newPage: number) => {
    setLocalStorage("page", newPage);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: events) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    removeLocalStorage("page");
    setLocalStorage("rows", event.target.value);
    setPage(0);
  };

  return (
    <TablePagination
      className="d-flex justify-content-center pagination"
      component="div"
      count={count}
      page={page}
      onPageChange={(e,n)=>handleChangePage(e,n)}
      rowsPerPage={rowsPerPage}
      rowsPerPageOptions={[5, 10, 15]}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}
React.memo(Pagination);
