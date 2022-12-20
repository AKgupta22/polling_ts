import { call, put, takeEvery } from "@redux-saga/core/effects";
import { POLL_LIST_REQUEST } from "../Actions/actionTypes"
import { pollSuccess, pollError } from "../Actions"
import FetchApi from "../API/FetchApi"
import {  responseType } from "../../TypeScript/tsConfig";

function* PollFetchData() {
  const query = "list_polls"
  try {
    const response:responseType = yield call(FetchApi, query)
    if (response.data.error === 0)
      yield put(pollSuccess({ ...response.data }))
    else
      yield put(pollError(response.data))
  }
  catch (error) {
    yield put(pollError({ message: error }))
  }

}

function* pollFetchSaga() {
  yield takeEvery(POLL_LIST_REQUEST, PollFetchData)
}
export default pollFetchSaga;