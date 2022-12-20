import { actionObject } from "../../TypeScript/tsConfig"
import { POLL_EDIT_REQUEST, POLL_EDIT_SUCCESS, POLL_EDIT_ERROR, POLL_EDIT_RESET } from "../Actions/actionTypes"
const intialstate = { isLoading: false, isSuccess: false, isError: false, data: {} }

const PollEditReducer = (state = intialstate, action:actionObject) => {
  switch (action.type) {

  case POLL_EDIT_REQUEST: {
    return {
      ...state, isLoading: true
    }
  }
  case POLL_EDIT_SUCCESS: {
    return { isLoading: false, isError: false, isSuccess: true, data: {} }
  }
  case POLL_EDIT_ERROR: {
    return {
      isLoading: false, isSuccess: false, isError: true, data: { ...action.payload }
    }
  }
  case POLL_EDIT_RESET:
  {
    return { ...state, isSuccess: false }
  }
  default: return state
  }
}

export default PollEditReducer