import { SIGN_IN } from "../action/constants";

const initialState = {
    auth: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                login: action.payload.login,
                password:action.payload.password,
                auth:action.payload.auth
            }
      
        default:
            return state;
    }
}