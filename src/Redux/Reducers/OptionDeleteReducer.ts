import { ActionObject } from "../../TypeScript/tsConfig";
import {
  OPTION_DEL_SUCCESS,
  OPTION_DEL_ERROR,
  OPTION_DEL_REQUEST,
  OPTION_DEL_RESET,
} from "../Actions/actionTypes";
const intialstate = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  data: {},
};

const optionDelReducer = (state = intialstate, action:ActionObject) => {
  switch (action.type) {
  case OPTION_DEL_REQUEST: {
    return {
      ...state,
      isLoading: true,
    };
  }
  case OPTION_DEL_SUCCESS: {
    return { isLoading: false, isError: false, isSuccess: true };
  }
  case OPTION_DEL_ERROR: {
    return {
      isLoading: false,
      isSuccess: false,
      isError: true,
      data: { ...action.payload },
    };
  }
  case OPTION_DEL_RESET: {
    return {...state, isSuccess: false }
  }
  default: return state
  }
};

export default optionDelReducer;
