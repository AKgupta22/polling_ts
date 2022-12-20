import { actionArray } from "../../TypeScript/tsConfig"
import { POLL_LIST_SUCCESS, POLL_LIST_ERROR, POLL_LIST_REQUEST, POLL_LIST_RESET } from "../Actions/actionTypes"
const intialstate = { isLoading: false, isSuccess: false, isError: false, data: [] }

const pollFetchReducer = (state = intialstate, action:actionArray) => {
  switch (action.type) {

  case POLL_LIST_REQUEST: {
    return {
      ...state, isLoading: true
    }
  }
  case POLL_LIST_SUCCESS: {
    return { isLoading: false, isError: false, isSuccess: true, data: [...action.payload.data.reverse()] }
  }
  case POLL_LIST_ERROR: {
    return {
      isLoading: false, isSuccess: false, isError: true, data: []
    }
  }
  case POLL_LIST_RESET: {
    return { ...state, isSuccess: false }
  }
  default: return state
  }
}

export default pollFetchReducer