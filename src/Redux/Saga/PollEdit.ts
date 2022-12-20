import { call, put, takeEvery } from "@redux-saga/core/effects";
import { POLL_EDIT_REQUEST } from "../Actions/actionTypes"
import { pollEditSuccess, pollEditError } from "../Actions"
import FetchApi from "../API/FetchApi"
import { payloadType, responseType } from "../../TypeScript/tsConfig";

function* PollEditData({ payload }:payloadType) {
  const query = `update_poll_title?id=${payload.id}&title=${payload.newTitle}`
  try {
    const response:responseType = yield call(FetchApi, query)
    if (response.data.error === 0)
      yield put(pollEditSuccess())
    else
      yield put(pollEditError(response.data))
  }
  catch (error) {
    const data = {
      data: "Internal Server Error"
    }
    yield put(pollEditError(data))
  }

}

function* pollEditSaga() {
  yield takeEvery(POLL_EDIT_REQUEST, PollEditData)
}
export default pollEditSaga;