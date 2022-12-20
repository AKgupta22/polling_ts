import { call, put, takeEvery } from "@redux-saga/core/effects";
import { VOTE_REQUEST } from "../Actions/actionTypes"
import { voteSuccess, voteError } from "../Actions"
import FetchApiHeader from "../API/FetchApiHeader"
import { payloadType, responseType } from "../../TypeScript/tsConfig";

function* VoteData({ payload }: payloadType) {
  const query = `do_vote?id=${payload.id}&option_text=${payload.text}`
  try {
    const response: responseType = yield call(FetchApiHeader, query, payload.token)
    if (response.data.error === 0)
      yield put(voteSuccess())
    else
      yield put(voteError(response.data))
  }
  catch (error) {
    const data = {
      data: "Internal Server Error"
    }
    yield put(voteError(data))
  }

}

function* VoteSaga() {
  yield takeEvery(VOTE_REQUEST, VoteData)
}
export default VoteSaga;