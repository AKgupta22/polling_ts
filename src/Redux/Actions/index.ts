import { REGISTRATION_REQUEST, REGISTRATION_SUCCESS, REGISTRATION_ERROR, LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_REQUEST, LOGIN_RESET, POLL_LIST_REQUEST, POLL_LIST_SUCCESS, POLL_LIST_ERROR, POLL_LIST_RESET, POLL_ADD_REQUEST, POLL_ADD_SUCCESS, POLL_ADD_ERROR, POLL_ADD_RESET, POLL_DEL_REQUEST, POLL_DEL_SUCCESS, POLL_DEL_ERROR, SINGLE_POLL_REQUEST, SINGLE_POLL_SUCCESS, SINGLE_POLL_ERROR, POLL_EDIT_REQUEST, POLL_EDIT_SUCCESS, POLL_EDIT_ERROR, POLL_EDIT_RESET, VOTE_SUCCESS, VOTE_ERROR, VOTE_REQUEST, VOTE_RESET, OPTION_ADD_REQUEST, OPTION_ADD_SUCCESS, OPTION_ADD_ERROR, OPTION_ADD_RESET, OPTION_DEL_REQUEST, OPTION_DEL_SUCCESS, OPTION_DEL_ERROR, POLL_DEL_RESET, OPTION_DEL_RESET } from "./actionTypes"


import { createAction } from "redux-actions"

export const registrationRequest = createAction(REGISTRATION_REQUEST)
export const registrationSuccess = createAction(REGISTRATION_SUCCESS)
export const registrationError = createAction(REGISTRATION_ERROR)

export const loginRequest = createAction(LOGIN_REQUEST)
export const loginSuccess = createAction(LOGIN_SUCCESS)
export const loginError = createAction(LOGIN_ERROR)
export const loginReset = createAction(LOGIN_RESET)

export const pollRequest = createAction(POLL_LIST_REQUEST)
export const pollSuccess = createAction(POLL_LIST_SUCCESS)
export const pollError = createAction(POLL_LIST_ERROR)
export const pollReset = createAction(POLL_LIST_RESET)

export const pollAddRequest = createAction(POLL_ADD_REQUEST)
export const pollAddSuccess = createAction(POLL_ADD_SUCCESS)
export const pollAddError = createAction(POLL_ADD_ERROR)
export const pollAddReset = createAction(POLL_ADD_RESET)

export const pollDelRequest = createAction(POLL_DEL_REQUEST)
export const pollDelSuccess = createAction(POLL_DEL_SUCCESS)
export const pollDelError = createAction(POLL_DEL_ERROR)
export const pollDelReset = createAction(POLL_DEL_RESET)


export const singlePollRequest = createAction(SINGLE_POLL_REQUEST)
export const singlePollSuccess = createAction(SINGLE_POLL_SUCCESS)
export const singlePollError = createAction(SINGLE_POLL_ERROR)

export const pollEditRequest = createAction(POLL_EDIT_REQUEST)
export const pollEditSuccess = createAction(POLL_EDIT_SUCCESS)
export const pollEditError = createAction(POLL_EDIT_ERROR)
export const pollEditReset = createAction(POLL_EDIT_RESET)

export const voteRequest = createAction(VOTE_REQUEST)
export const voteSuccess = createAction(VOTE_SUCCESS)
export const voteError = createAction(VOTE_ERROR)
export const voteReset = createAction(VOTE_RESET)

export const optionAddRequest = createAction(OPTION_ADD_REQUEST)
export const optionAddSuccess = createAction(OPTION_ADD_SUCCESS)
export const optionAddError = createAction(OPTION_ADD_ERROR)
export const optionAddReset = createAction(OPTION_ADD_RESET)

export const optionDelRequest = createAction(OPTION_DEL_REQUEST)
export const optionDelSuccess = createAction(OPTION_DEL_SUCCESS)
export const optionDelError = createAction(OPTION_DEL_ERROR)
export const optionDelReset = createAction(OPTION_DEL_RESET)