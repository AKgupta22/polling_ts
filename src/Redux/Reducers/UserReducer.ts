import { actionObject } from "../../TypeScript/tsConfig"
import { REGISTRATION_SUCCESS, REGISTRATION_ERROR, REGISTRATION_REQUEST, LOGIN_RESET } from "../Actions/actionTypes"
const intialstate = { isLoading: false, isSuccess: false, isError: false, data: {} }

const UserReducer = (state = intialstate, action:actionObject) => {
  switch (action.type) {
  case REGISTRATION_REQUEST: {
    return {
      ...state, isLoading: true
    }
  }
  case REGISTRATION_SUCCESS: {
    return { isLoading: false, isError: false, isSuccess: true, data: { ...action.payload } }
  }
  case REGISTRATION_ERROR: {
    return {
      isLoading: false, isSuccess: false, isError: true, data: { ...action.payload }
    }
  }
  case LOGIN_RESET:
  {
    return { ...state, isSuccess: false }
  }
  default: return state
  }

}
export default UserReducer