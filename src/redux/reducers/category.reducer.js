import { categoryConstraints } from "../actions/actionConstraints";

const initialState = {
    loading: false,
    error: null,
    message: null
};

const categoryReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case categoryConstraints.ADD_NEW_CATEGORY_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case categoryConstraints.ADD_NEW_CATEGORY_FAILED:
            state = {
                ...state,
                loading: false,
                message: null,
                error: payload.msg
            }
            break;
        case categoryConstraints.ADD_NEW_CATEGORY_SUCCESS:
            state = {
                ...state,
                loading: false,
                error: null,
                message: payload.msg
            }
            break;

        default:
    }
    return state;
}

export default categoryReducer;