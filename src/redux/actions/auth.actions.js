import axios from 'axios';
import * as api from '../../apis/apis';
import { authConstraints } from "./actionConstraints";

export const signUpAction = (userData, setState, defaultValue, router) => async (dispatch) => {
    dispatch({ type: authConstraints.SIGNUP_REQUEST });

    try {
        const { data } = await api.signUpApi(userData);
        setState(defaultValue);
        dispatch({ type: authConstraints.SIGNUP_SUCCESS, payload: data.msg });
        router.push('/signin');
    } catch (error) {
        dispatch({ type: authConstraints.SIGNUP_FAILED });
    }
}

export const signInAction = (userData, setState, defaultValue) => async (dispatch) => {
    dispatch({ type: authConstraints.SIGNIN_REQUEST });

    try {
        const { data } = await api.signInApi(userData);
        await axios.post('/api/login', { token: data.user.token });
        setState({ user: '', password: '' });
        dispatch({ type: authConstraints.SIGNIN_SUCCESS, payload: data.msg });
    } catch (error) {
        dispatch({ type: authConstraints.SIGNIN_FAILED });
    }
}

export const signOutAction = () => async (dispatch) => {
    dispatch({ type: authConstraints.SIGNOUT_REQUEST });

    try {
        const { data } = await api.signOutApi();
        await axios.get('/api/logout');
        dispatch({ type: authConstraints.SIGNOUT_SUCCESS });
    } catch (error) {
        dispatch({ type: authConstraints.SIGNOUT_FAILED });
    }
}

export const userLoggedInStatus = () => async (dispatch) => {
    dispatch({ type: authConstraints.CHECKING_LOGIN_STATUS });

    try {
        const { data } = await api.getUserInfoApi();
        dispatch({ type: authConstraints.USER_LOGGEDIN });
    } catch (error) {
        signOutAction();
        dispatch({ type: authConstraints.USER_NOT_FOUND });
    }
}