import { call, put, takeEvery } from "@redux-saga/core/effects";
import { LOGIN_REQUEST } from "../Actions/actionTypes"
import { loginSuccess, loginError } from "../Actions"
import FetchApi from "../API/FetchApi"
import jwt_decode from "jwt-decode";
import { PayloadType } from "../../TypeScript/tsConfig";

function* LoginData({ payload }: PayloadType) {
  const query = `login?username=${payload.username}&password=${payload.password}`
  interface responseType {
    data: {
      error: number,
      token: string
    }
  }
  try {
    const response: responseType = yield call(FetchApi, query)
    if (response.data.error === 0) {
      const decoded = jwt_decode(response.data.token)
      yield put(loginSuccess({ ...response.data, decoded }))
    }
    else
      yield put(loginError(response.data))
  }
  catch (error) {
    const data = {
      data: "Internal server error"
    }
    yield put(loginError(data))
  }

}

function* LoginSaga() {
  yield takeEvery(LOGIN_REQUEST, LoginData)
}
export default LoginSaga;