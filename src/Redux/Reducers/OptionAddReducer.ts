import { actionObject } from "../../TypeScript/tsConfig"
import { OPTION_ADD_SUCCESS, OPTION_ADD_ERROR, OPTION_ADD_REQUEST, OPTION_ADD_RESET } from "../Actions/actionTypes"
const intialstate = { isLoading: false, isSuccess: false, isError: false }

const optionAddReducer = (state = intialstate, action:actionObject) => {
  switch (action.type) {
  case OPTION_ADD_REQUEST: {
    return {
      ...state, isLoading: true
    }
  }
  case OPTION_ADD_SUCCESS: {
    return { isLoading: false, isError: false, isSuccess: true }
  }
  case OPTION_ADD_ERROR: {
    return {
      isLoading: false, isSuccess: false, isError: true
    }
  }
  case OPTION_ADD_RESET:
  {return {...state, isSuccess: false }}
  default: return state
  }
}

export default optionAddReducer