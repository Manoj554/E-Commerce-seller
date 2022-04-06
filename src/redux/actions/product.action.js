import * as api from '../../apis/apis';
import { productConstraints } from "./actionConstraints"

export const addNewProductAction = (product, setFormData, defaultVal) => async (dispatch) => {
    dispatch({ type: productConstraints.ADD_NEW_PRODUCT_REQUEST });

    try {
        const { data } = await api.addNewProductApi(product);
        console.log(data);
        alert(data.msg);
        setFormData(defaultVal);
        dispatch({ type: productConstraints.ADD_NEW_PRODUCT_SUCCESS });
    } catch (error) {
        console.log(error.response);
        dispatch({ type: productConstraints.ADD_NEW_PRODUCT_FAILED });
    }
}

export const getAllProductAction = () => async (dispatch) => {
    dispatch({ type: productConstraints.GET_ALL_PRODUCT_REQUEST });

    try {
        const { data } = await api.getAllProductApi();
        console.log(data);
        dispatch({ type: productConstraints.GET_ALL_PRODUCT_SUCCESS, payload: { data: data.products, msg: data.msg } });
    } catch (error) {
        dispatch({ type: productConstraints.GET_ALL_PRODUCT_FAILED, payload: { msg: error?.response.data.msg } });
    }
}

// export const deleteCategoryAction = (id) => async (dispatch) => {
//     dispatch({ type: categoryConstraints.DELETE_CATEGORY_REQUEST });

//     try {
//         const { data } = await api.deleteCategoryApi(id);
//         console.log(data);
//         dispatch({ type: categoryConstraints.DELETE_CATEGORY_SUCCESS });
//     } catch (error) {
//         dispatch({ type: categoryConstraints.DELETE_CATEGORY_FAILED });
//     }
// }