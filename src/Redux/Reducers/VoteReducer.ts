import { ActionObject } from "../../TypeScript/tsConfig"
import { VOTE_SUCCESS, VOTE_ERROR, VOTE_REQUEST, VOTE_RESET } from "../Actions/actionTypes"
const intialstate = { isLoading: false, isSuccess: false, isError: false, data: {} }

const voteReducer = (state = intialstate, action:ActionObject) => {
  switch (action.type) {
  case VOTE_REQUEST: {
    return {
      ...state, isLoading: true
    }
  }
  case VOTE_SUCCESS: {
    return { isLoading: false, isError: false, isSuccess: true }
  }
  case VOTE_ERROR: {
    return {
      isLoading: false, isSuccess: false, isError: true, data: { ...action.payload }
    }
  }
  case VOTE_RESET:
    return intialstate
  default: return state
  }
}

export default voteReducer