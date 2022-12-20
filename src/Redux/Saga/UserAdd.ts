import { call, put, takeEvery } from "@redux-saga/core/effects";
import { REGISTRATION_REQUEST } from "../Actions/actionTypes"
import { registrationSuccess, registrationError } from "../Actions"
import FetchApi from "../API/FetchApi"
import { PayloadType, ResponseType } from "../../TypeScript/tsConfig";

function* RegisterData({ payload }:PayloadType) {
  
  const query = `add_user?username=${payload.username}&password=${payload.password}&role=${payload.role}`
  try {
    const response:ResponseType = yield call(FetchApi, query)
    if (response.data.error === 0)
      yield put(registrationSuccess(response.data))
    else
      yield put(registrationError(response.data))
  }
  catch (error) {
    yield put(registrationError(error))
  }

}

function* RegisterSaga() {
  yield takeEvery(REGISTRATION_REQUEST, RegisterData)
}
export default RegisterSaga;