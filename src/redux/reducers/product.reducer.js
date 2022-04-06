import { productConstraints } from "../actions/actionConstraints";

const initialState = {
    products: [],
    loading: false,
    error: null,
    message: null
};

const productReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case productConstraints.ADD_NEW_PRODUCT_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case productConstraints.ADD_NEW_PRODUCT_FAILED:
            state = {
                ...state,
                loading: false,
                message: null,
                error: payload?.msg
            }
            break;
        case productConstraints.ADD_NEW_PRODUCT_SUCCESS:
            state = {
                ...state,
                loading: false,
                error: null,
                message: payload?.msg
            }
            break;

        case productConstraints.GET_ALL_PRODUCT_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case productConstraints.GET_ALL_PRODUCT_FAILED:
            state = {
                ...state,
                loading: false,
                message: null,
                error: payload?.msg,
                products: []
            }
            break;
        case productConstraints.GET_ALL_PRODUCT_SUCCESS:
            state = {
                ...state,
                loading: false,
                error: null,
                message: payload?.msg,
                products: payload?.data
            }
            break;

        default:
    }
    return state;
}

export default productReducer;