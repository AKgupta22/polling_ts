import { all } from "redux-saga/effects"
import RegisterSaga from "./UserAdd"
import LoginSaga from "./UserLogin"
import pollFetchSaga from "./PollFetch"
import PollAddSaga from "./PollAdd"
import pollDelSaga from "./PollDelete"
import singlePollFetchSaga from "./SinglePoll"
import pollEditSaga from "./PollEdit"
import VoteSaga from "./DoVote"
import optionAddSaga from "./OptionAdd"
import optionDelData from "./OptionDelete"

const allSaga = [RegisterSaga(), LoginSaga(), pollFetchSaga(), PollAddSaga(), pollDelSaga(), singlePollFetchSaga(), pollEditSaga(), VoteSaga(), optionAddSaga(),optionDelData()]
function* rootSaga() {
  yield all(allSaga)
}

export default rootSaga