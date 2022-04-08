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
        //Add Product
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
                message: payload?.msg,
                products: payload?.data
            }
            break;

        //Get All Products
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

        //Edit Product
        case productConstraints.EDIT_PRODUCT_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case productConstraints.EDIT_PRODUCT_FAILED:
            state = {
                ...state,
                loading: false,
                message: null,
                error: payload?.msg,
            }
            break;
        case productConstraints.EDIT_PRODUCT_SUCCESS:
            state = {
                ...state,
                loading: false,
                error: null,
                message: payload?.msg,
                products: payload?.data
            }
            break;

        //Delete Product
        case productConstraints.DELETE_PRODUCT_REQUEST:
            state = {
                ...state,
                deleting: true
            }
            break;
        case productConstraints.DELETE_PRODUCT_FAILED:
            state = {
                ...state,
                deleting: false,
                message: null,
                error: payload?.msg,
            }
            break;
        case productConstraints.DELETE_PRODUCT_SUCCESS:
            state = {
                ...state,
                deleting: false,
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