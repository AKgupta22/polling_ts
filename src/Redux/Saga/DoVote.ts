import { call, put, takeEvery } from "@redux-saga/core/effects";
import { VOTE_REQUEST } from "../Actions/actionTypes"
import { voteSuccess, voteError } from "../Actions"
import FetchApiHeader from "../API/FetchApiHeader"
import { PayloadType, ResponseType } from "../../TypeScript/tsConfig";

function* VoteData({ payload }: PayloadType) {
  const query = `do_vote?id=${payload.id}&option_text=${payload.text}`
  try {
    const response: ResponseType = yield call(FetchApiHeader, query, payload.token)
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