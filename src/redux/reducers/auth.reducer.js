import { authConstraints } from "../actions/actionConstraints";

const initialState = {
    message: null,
    error: null,
    loading: false,
    token: null,
    authenticate: false
}

const authReducer = (state = initialState, action) => {
    console.log(action);
    const { type, payload } = action;

    switch (type) {
        //Signup
        case authConstraints.SIGNUP_REQUEST:
            state = {
                ...initialState,
                loading: true
            }
            break;
        case authConstraints.SIGNUP_FAILED:
            state = {
                ...state,
                loading: false,
                message: null,
                error: payload?.msg
            }
            break;
        case authConstraints.SIGNUP_SUCCESS:
            state = {
                ...state,
                loading: false,
                error: null,
                message: payload?.msg
            }
            break;

        //Signin
        case authConstraints.SIGNIN_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case authConstraints.SIGNIN_FAILED:
            state = {
                ...state,
                loading: false,
                message: null,
                error: payload?.msg,
                authenticate: false
            }
            break;
        case authConstraints.SIGNIN_SUCCESS:
            state = {
                ...state,
                loading: false,
                authenticate: true,
                error: null,
                message: payload?.msg
            }
            break;

        //Signout
        case authConstraints.SIGNOUT_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case authConstraints.SIGNOUT_FAILED:
            state = {
                ...state,
                loading: false,
                message: null,
                error: payload?.msg
            }
            break;
        case authConstraints.SIGNOUT_SUCCESS:
            state = {
                ...initialState
            }
            break;

        //UserLoggedIn
        case authConstraints.CHECKING_LOGIN_STATUS:
            state = {
                ...state,
                loading: true
            }
            break;
        case authConstraints.USER_NOT_FOUND:
            state = {
                ...state,
                loading: false,
                authenticate: false
            }
            break;
        case authConstraints.USER_LOGGEDIN:
            state = {
                ...state,
                authenticate: true,
                loading: false
            }
        default:

    }
    return state;
}

export default authReducer;