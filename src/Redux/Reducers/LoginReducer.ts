import { actionObject } from "../../TypeScript/tsConfig"
import { LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_REQUEST, LOGIN_RESET } from "../Actions/actionTypes"
const intialstate = { isLoading: false, isSuccess: false, isError: false, data: {} }

const LoginReducer = (state = intialstate, action:actionObject) => {
  switch (action.type) {
  case LOGIN_REQUEST: {
    return {
      ...state, isLoading: true
    }
  }
  case LOGIN_SUCCESS: {
    return { isLoading: false, isError: false, isSuccess: true, data: { ...action.payload } }
  }
  case LOGIN_ERROR: {
    return {
      isLoading: false, isSuccess: false, isError: true, data: { ...action.payload }
    }
  }
  case LOGIN_RESET:
  {return {...state, isSuccess: false }}
  default:
    return state
  }
}
export default LoginReducer