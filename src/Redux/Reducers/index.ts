import UserReducer from "./UserReducer"
import LoginReducer from "./LoginReducer"
import pollFetchReducer from "./PollFetchReducer"
import PollAddReducer from "./PollAddReducer"
import PollDelReducer from "./PollDeleteReducer"
import SinglePollReducer from "./SinglePollReducer"
import PollEditReducer from "./PollEditReducer"
import voteReducer from "./VoteReducer"
import optionAddReducer from "./OptionAddReducer"
import optionDelReducer from "./OptionDeleteReducer"
import { combineReducers } from "redux"

const AllReducers = combineReducers({
  UserReducer,
  LoginReducer,
  pollFetchReducer,
  PollAddReducer,
  PollDelReducer,
  SinglePollReducer,
  PollEditReducer,
  voteReducer,
  optionAddReducer,
  optionDelReducer
})
export default AllReducers