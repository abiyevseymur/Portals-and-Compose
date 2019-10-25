import { SIGN_IN } from "./constants"




export const SignIn = (data) => {
    return {
        type: SIGN_IN,
        payload:data
    }
}