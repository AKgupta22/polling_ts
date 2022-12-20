import { call, put, takeEvery } from "@redux-saga/core/effects";
import { OPTION_ADD_REQUEST } from "../Actions/actionTypes"
import { optionAddSuccess, optionAddError } from "../Actions"
import FetchApi from "../API/FetchApi"
import { payloadType, responseType } from "../../TypeScript/tsConfig";

function* optionAddData({ payload }:payloadType) {
  let query = `add_new_option?id=${payload.id}&option_text=${payload.text}`
  const response:responseType = yield call(FetchApi, query)
  try {
    if (response.data.error === 0)
      yield put(optionAddSuccess())
    else
      yield put(optionAddError({ response }))
  }
  catch (error) {
    yield put(optionAddError({ response }))
  }

}

function* optionAddSaga() {
  yield takeEvery(OPTION_ADD_REQUEST, optionAddData)
}
export default optionAddSaga;