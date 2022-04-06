import * as api from '../../apis/apis';
import { categoryConstraints } from "./actionConstraints"

export const addNewCategoryAction = (category, setFormData, defaultVal) => async (dispatch) => {
    dispatch({ type: categoryConstraints.ADD_NEW_CATEGORY_REQUEST });

    try {
        const { data } = await api.addNewCategoryApi(category);
        console.log(data);
        alert(data.msg);
        setFormData(defaultVal);
        dispatch({ type: categoryConstraints.ADD_NEW_CATEGORY_SUCCESS, payload: { data: data.category, msg: data.msg } });
    } catch (error) {
        console.log(error.response);
        dispatch({ type: categoryConstraints.ADD_NEW_CATEGORY_FAILED });
    }
}

export const getAllCategoriesAction = () => async (dispatch) => {
    dispatch({ type: categoryConstraints.GET_ALL_CATEGORY_REQUEST });

    try {
        const { data } = await api.getAllCategoriesApi();
        console.log(data);
        dispatch({ type: categoryConstraints.GET_ALL_CATEGORY_SUCCESS, payload: { data: data.categories, msg: data.msg } });
    } catch (error) {
        dispatch({ type: categoryConstraints.GET_ALL_CATEGORY_FAILED, payload: { msg: error?.response.data.msg } });
    }
}

export const deleteCategoryAction = (id) => async (dispatch) => {
    dispatch({ type: categoryConstraints.DELETE_CATEGORY_REQUEST });

    try {
        const { data } = await api.deleteCategoryApi(id);
        // console.log(data);
        dispatch({ type: categoryConstraints.DELETE_CATEGORY_SUCCESS });
    } catch (error) {
        dispatch({ type: categoryConstraints.DELETE_CATEGORY_FAILED });
    }
}

export const getCategoryInfoAction = (id) => async (dispatch) => {
    dispatch({ type: categoryConstraints.GET_CATEGORY_INFO_REQUEST });

    try {
        const { data } = await api.getCategoryInfoApi(id);
        // console.log(data);
        dispatch({ type: categoryConstraints.GET_CATEGORY_INFO_SUCCESS, payload: { data: data.categoryInfo, msg: data.msg } });
    } catch (error) {
        let err = error.response.data.msg;
        dispatch({ type: categoryConstraints.GET_CATEGORY_INFO_FAILED, payload: { msg: err } });
    }
};

export const editCategoryAction = (category) => async (dispatch) => {
    dispatch({ type: categoryConstraints.EDIT_CATEGORY_REQUEST });

    try {
        const { data } = await api.editCategoryApi(category);
        dispatch({ type: categoryConstraints.EDIT_CATEGORY_SUCCESS });
    } catch (error) {
        console.log(error);
        dispatch({ type: categoryConstraints.EDIT_CATEGORY_FAILED });
    }
}