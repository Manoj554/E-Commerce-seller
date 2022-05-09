import { orderConstraints } from "../actions/actionConstraints";

const initialState = {
    loading: false,
    orders: [],
    error: null,
    message: null
};

const orderReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case orderConstraints.GET_ALL_ORDERS_REQUEST:
            state = {
                ...state,
                loading: true,
            };
            break;
        case orderConstraints.GET_ALL_ORDERS_FAILED:
            state = {
                ...state,
                loading: false,
            };
            break;
        case orderConstraints.GET_ALL_ORDERS_SUCCESS:
            state = {
                ...state,
                loading: false,
                orders: payload?.orders
            };
            break;
        default:
    }
    return state;
}

export default orderReducer;