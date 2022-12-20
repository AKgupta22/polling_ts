import { actionObject } from "../../TypeScript/tsConfig"
import { POLL_ADD_SUCCESS, POLL_ADD_ERROR, POLL_ADD_REQUEST, POLL_ADD_RESET } from "../Actions/actionTypes"
const intialstate = { isLoading: false, isSuccess: false, isError: false }

const PollAddReducer = (state = intialstate, action:actionObject) => {
  switch (action.type) {
  case POLL_ADD_REQUEST: {
    return {
      ...state, isLoading: true
    }
  }
  case POLL_ADD_SUCCESS: {
    return { isLoading: false, isError: false, isSuccess: true }
  }
  case POLL_ADD_ERROR: {
    return {
      isLoading: false, isSuccess: false, isError: true
    }
  }
  case POLL_ADD_RESET:
  { return { ...state, isSuccess: false } }

  default: return state
  }
}

export default PollAddReducer