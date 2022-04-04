import * as api from '../../apis/apis';
import { categoryConstraints } from "./actionConstraints"

export const addNewCategory = (category, setModal, setFormData, defaultVal) => async (dispatch) => {
    dispatch({ type: categoryConstraints.ADD_NEW_CATEGORY_REQUEST });

    try {
        const { data } = await api.addNewCategoryApi(category);
        console.log(data);
        alert(data.msg);
        setModal(false);
        setFormData(defaultVal);
        dispatch({ type: categoryConstraints.ADD_NEW_CATEGORY_SUCCESS });
    } catch (error) {
        console.log(error.response);
        dispatch({ type: categoryConstraints.ADD_NEW_CATEGORY_FAILED });
    }
}