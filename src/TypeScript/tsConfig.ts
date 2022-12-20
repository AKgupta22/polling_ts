
export interface ArrayState {
    data: [],
    isLoading: boolean,
    isSuccess: boolean,
    isError: boolean

}
export interface ItemType {
    _id: string,
    options: [{
        option: string,
        vote: number
    }],
    title: string,
    data: string

}

export interface ErrorType {
    data: string
    error: number
}

export interface Events {
    preventDefault: Function,
    target: {
        value: string,
        name: string
    }
}

export interface ObjectState {
    data: ItemType,
    isLoading: boolean,
    isSuccess: boolean,
    isError: boolean

}
interface SignupType {
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

interface LoginType {
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

export interface StateTypes {
    UserReducer: SignupType,
    LoginReducer: LoginType,
    pollFetchReducer: ArrayState,
    PollAddReducer: ObjectState,
    PollDelReducer: ObjectState,
    SinglePollReducer: ObjectState,
    PollEditReducer: ObjectState,
    voteReducer: ObjectState,
    optionAddReducer: ObjectState,
    optionDelReducer: ObjectState

}


export interface InputProps {
    handleChange: Function,
    number: number,
    data: Object
}

export interface ActionObject {
    type: string,
    payload: {
        data: object
    }
}

export interface ActionArray {
    type: string,
    payload: {
        data: []
    }
}

export interface PayloadType {
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

export interface ResponseType {
    data: {
        error: number,
        data: Object
    }
}

export type PayloadOption = {
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
