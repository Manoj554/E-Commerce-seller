import { categoryConstraints } from "../actions/actionConstraints";

const initialState = {
    categories: [],
    loading: false,
    error: null,
    message: null,
    categoryInfo: {}
};

const categoryReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        //New Category
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
                error: payload?.msg
            }
            break;
        case categoryConstraints.ADD_NEW_CATEGORY_SUCCESS:
            state = {
                ...state,
                loading: false,
                error: null,
                message: payload?.msg,
                categories: payload.data
            }
            break;

        //All Category 
        case categoryConstraints.GET_ALL_CATEGORY_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case categoryConstraints.GET_ALL_CATEGORY_FAILED:
            state = {
                ...state,
                loading: false,
                message: null,
                error: payload?.msg,
                categories: []
            }
            break;
        case categoryConstraints.GET_ALL_CATEGORY_SUCCESS:
            state = {
                ...state,
                loading: false,
                error: null,
                message: payload?.msg,
                categories: payload?.data
            }
            break;

        //Category Information
        case categoryConstraints.GET_CATEGORY_INFO_REQUEST:
            state = {
                ...state,
                loading: true,
                categoryInfo: {}
            }
            break;
        case categoryConstraints.GET_CATEGORY_INFO_FAILED:
            state = {
                ...state,
                loading: false,
                message: null,
                error: payload?.msg,
            }
            break;
        case categoryConstraints.GET_CATEGORY_INFO_SUCCESS:
            state = {
                ...state,
                loading: false,
                error: null,
                message: payload?.msg,
                categoryInfo: payload?.data
            }
            break;

        //Delete Category 
        case categoryConstraints.DELETE_CATEGORY_REQUEST:
            state = {
                ...state,
                loading: true,
            }
            break;
        case categoryConstraints.DELETE_CATEGORY_FAILED:
            state = {
                ...state,
                loading: false,
                message: null,
                error: payload?.msg,
            }
            break;
        case categoryConstraints.DELETE_CATEGORY_SUCCESS:
            state = {
                ...state,
                loading: false,
                error: null,
                message: payload?.msg,
                categories: payload?.data
            }
            break;

        //Edit Category 
        case categoryConstraints.EDIT_CATEGORY_REQUEST:
            state = {
                ...state,
                loading: true,
            }
            break;
        case categoryConstraints.EDIT_CATEGORY_FAILED:
            state = {
                ...state,
                loading: false,
                message: null,
                error: payload?.msg,
            }
            break;
        case categoryConstraints.EDIT_CATEGORY_SUCCESS:
            state = {
                ...state,
                loading: false,
                error: null,
                message: payload?.msg,
                categories: payload?.data
            }
            break;
        default:
    }
    return state;
}

export default categoryReducer;