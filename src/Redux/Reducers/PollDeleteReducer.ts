import { ActionObject } from "../../TypeScript/tsConfig"
import { POLL_DEL_SUCCESS, POLL_DEL_ERROR, POLL_DEL_REQUEST, POLL_DEL_RESET } from "../Actions/actionTypes"
const intialstate = { isLoading: false, isSuccess: false, isError: false, data: {} }

const PollDelReducer = (state = intialstate, action:ActionObject) => {
  switch (action.type) {
  case POLL_DEL_REQUEST: {
    return {
      ...state, isLoading: true
    }
  }
  case POLL_DEL_SUCCESS: {
    return { isLoading: false, isError: false, isSuccess: true }
  }
  case POLL_DEL_ERROR: {
    return {
      isLoading: false, isSuccess: false, isError: true, data: { ...action.payload }
    }
  }
  case POLL_DEL_RESET:
  { return { ...state, isSuccess: false } }

  default: return state
  }
}

export default PollDelReducer