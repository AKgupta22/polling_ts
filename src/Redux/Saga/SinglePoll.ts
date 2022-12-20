import { call, put, takeEvery } from "@redux-saga/core/effects";
import { SINGLE_POLL_REQUEST } from "../Actions/actionTypes"
import { singlePollSuccess, singlePollError } from "../Actions"
import FetchApi from "../API/FetchApi"
import { payloadType } from "../../TypeScript/tsConfig";

function* SinglePollFetch({ payload }: payloadType) {
  interface payloadType {
    data: {
      error: number
    }
  }
  const query = `list_poll?id=${payload.id}`
  try {
    const response: payloadType = yield call(FetchApi, query)
    if (response.data.error === 0)
      yield put(singlePollSuccess({ ...response.data }))
    else
      yield put(singlePollError(response.data))
  }
  catch (error) {
    yield put(singlePollError({ message: error }))
  }

}

function* singlePollFetchSaga() {
  yield takeEvery(SINGLE_POLL_REQUEST, SinglePollFetch)
}
export default singlePollFetchSaga;