import { actionObject } from "../../TypeScript/tsConfig"
import { SINGLE_POLL_SUCCESS, SINGLE_POLL_ERROR, SINGLE_POLL_REQUEST } from "../Actions/actionTypes"
const intialstate = { isLoading: false, isSuccess: false, isError: false, data: {} }

const SinglePollReducer = (state = intialstate, action:actionObject) => {
  switch (action.type) {
  case SINGLE_POLL_REQUEST: {
    return {
      ...state, isLoading: true
    }
  }
  case SINGLE_POLL_SUCCESS: {
    return { isLoading: false, isError: false, isSuccess: true, data: { ...action.payload.data } }
  }
  case SINGLE_POLL_ERROR: {
    return {
      isLoading: false, isSuccess: false, isError: true, data: { ...action.payload }
    }
  }
  default: return state
  }
}

export default SinglePollReducer