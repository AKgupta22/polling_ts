
export interface arrayState {
    data: [],
    isLoading: boolean,
    isSuccess: boolean,
    isError: boolean

}
export interface itemType {
    _id: string,
    options: [{
        option: string,
        vote: number
    }],
    title: string,
    data: string

}

export interface errorType {
    data: string
    error: number
}

export interface events {
    preventDefault: Function,
    target: {
        value: string,
        name: string
    }
}

export interface objectState {
    data: itemType,
    isLoading: boolean,
    isSuccess: boolean,
    isError: boolean

}
interface signupType {
    data: {
        data: {
            username: string,
            password: string
        },
        message: string
    },
    isLoading: boolean,
    isSuccess: boolean,
    isError: boolean
}

interface loginType {
    data: {
        token: string,
        decoded: {
            role: string
        },
        data: string
    },
    isLoading: boolean,
    isSuccess: boolean,
    isError: boolean
}

export interface stateTypes {
    UserReducer: signupType,
    LoginReducer: loginType,
    pollFetchReducer: arrayState,
    PollAddReducer: objectState,
    PollDelReducer: objectState,
    SinglePollReducer: objectState,
    PollEditReducer: objectState,
    voteReducer: objectState,
    optionAddReducer: objectState,
    optionDelReducer: objectState

}


export interface inputProps {
    handleChange: Function,
    number: number,
    data: Object
}

export interface actionObject {
    type: string,
    payload: {
        data: object
    }
}

export interface actionArray {
    type: string,
    payload: {
        data: []
    }
}

export interface payloadType {
    payload: {
        text: string,
        id: string,
        token: string,
        newTitle:string,
        username:string,
        password:string,
        role:string
    },
    type: string
}

export interface responseType {
    data: {
        error: number,
        data: Object
    }
}

export type payloadOption = {
    payload: {
        data: {
            title: string,
            option1: string,
            option2: string,
            option3: string,
            option4: string,
        }
    },
    type: string
}
