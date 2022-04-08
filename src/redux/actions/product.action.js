import * as api from '../../apis/apis';
import { productConstraints } from "./actionConstraints"

export const addNewProductAction = (product, setFormData, defaultVal) => async (dispatch) => {
    dispatch({ type: productConstraints.ADD_NEW_PRODUCT_REQUEST });

    try {
        const { data } = await api.addNewProductApi(product);
        alert(data.msg);
        setFormData(defaultVal);
        dispatch({ type: productConstraints.ADD_NEW_PRODUCT_SUCCESS, payload: { data: data.products, msg: data.msg } });
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

export const editProductAction = (product, router) => async (dispatch) => {
    dispatch({ type: productConstraints.EDIT_PRODUCT_REQUEST });

    try {
        const { data } = await api.editProductApi(product);
        alert(data.msg);
        dispatch({ type: productConstraints.EDIT_PRODUCT_SUCCESS, payload: { data: data.products, msg: data.msg } });
        router.push('/products');
    } catch (error) {
        console.log(error);
        dispatch({ type: productConstraints.EDIT_PRODUCT_FAILED });
    }
}

export const deleteProductAction = (id) => async (dispatch) => {
    dispatch({ type: productConstraints.DELETE_PRODUCT_REQUEST });

    try {
        const { data } = await api.deleteProductApi(id);
        dispatch({ type: productConstraints.DELETE_PRODUCT_SUCCESS, payload: { data: data.products, msg: data.msg } });
    } catch (error) {
        dispatch({ type: productConstraints.DELETE_PRODUCT_FAILED });
    }
}

export const searchFieldAction = (query) => async (dispatch) => {
    dispatch({ type: productConstraints.SEARCH_PRODUCT_REQUEST });

    try {
        const { data } = await api.searchProductApi(query);
        dispatch({ type: productConstraints.SEARCH_PRODUCT_SUCCESS, payload: { data: data.products, msg: data.msg } });
    } catch (error) {
        dispatch({ type: productConstraints.SEARCH_PRODUCT_FAILED });
    }
}

export const searchProductByCategoryAction = (id) => async (dispatch) => {
    dispatch({ type: productConstraints.SEARCH_PRODUCT_BY_CATEGORY_REQUEST });
    try {
        const { data } = await api.searchProductByCategoryApi(id);
        dispatch({
            type: productConstraints.SEARCH_PRODUCT_BY_CATEGORY_SUCCESS, payload: {
                data: data.products, msg: data.msg
            }
        });
    } catch (error) {
        dispatch({ type: productConstraints.SEARCH_PRODUCT_BY_CATEGORY_FAILED });
    }
}