import { call, put, takeEvery } from "@redux-saga/core/effects";
import { POLL_ADD_REQUEST } from "../Actions/actionTypes"
import { pollAddSuccess, pollAddError } from "../Actions"
import FetchApi from "../API/FetchApi"
import { payloadOption, responseType } from "../../TypeScript/tsConfig";

function* PollAddData({ payload }:payloadOption) {
  let query = `add_poll?title=${payload.data.title}&options=${payload.data.option1}`
  if (payload.data.option2)
    query = query + `____${payload.data.option2}`
  if (payload.data.option3)
    query = query + `____${payload.data.option3}`
  if (payload.data.option4)
    query = query + `____${payload.data.option4}`
  try {
    const response:responseType = yield call(FetchApi, query)
    if (response.data.error === 0)
      yield put(pollAddSuccess())
    else
      yield put(pollAddError())
  }
  catch (error) {
    yield put(pollAddError())
  }

}

function* PollAddSaga() {
  yield takeEvery(POLL_ADD_REQUEST, PollAddData)
}
export default PollAddSaga;