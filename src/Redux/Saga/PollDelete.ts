import { call, put, takeEvery } from "@redux-saga/core/effects";
import { POLL_DEL_REQUEST } from "../Actions/actionTypes"
import { pollDelSuccess, pollDelError } from "../Actions"
import FetchApi from "../API/FetchApi"
import { payloadType, responseType } from "../../TypeScript/tsConfig";

function* PollDelData({ payload }:payloadType) {
  const query = `delete_poll?id=${payload.id}`
  try {
    const response:responseType = yield call(FetchApi, query)
    if (response.data.error === 0)
      yield put(pollDelSuccess())
    else
      yield put(pollDelError(response.data))
  }
  catch (error) {
    const data = {
      data: "Internal Server Error"
    }
    yield put(pollDelError(data))
  }

}

function* pollDelSaga() {
  yield takeEvery(POLL_DEL_REQUEST, PollDelData)
}
export default pollDelSaga;