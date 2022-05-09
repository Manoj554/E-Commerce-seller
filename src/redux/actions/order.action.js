import { orderConstraints } from "./actionConstraints";
import * as api from '../../apis/apis';

export const getAllOrders = () => async (dispatch) => {
    dispatch({ type: orderConstraints.GET_ALL_ORDERS_REQUEST });

    try {
        const { data } = await api.getAllOrdersApi();
        dispatch({
            type: orderConstraints.GET_ALL_ORDERS_SUCCESS, payload: {
                orders: data?.orders, msg: data?.msg
            }
        });
    } catch (error) {
        dispatch({ type: orderConstraints.GET_ALL_ORDERS_FAILED });
    }
}