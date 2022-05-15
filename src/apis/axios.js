import axios from "axios";
import { signOutAction } from "../redux/actions";
import { authConstraints } from "../redux/actions/actionConstraints";
import store from '../redux/store';
const baseUrl = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_PRODUCTION_BASE_URL : process.env.NEXT_PUBLIC_LOCAL_BASE_URL;

const API = axios.create({
    baseURL: baseUrl,
});

API.interceptors.request.use(async (req) => {
    const { data } = await axios.get('/api/getcookie');
    req.headers.Authorization = data.token;
    return req;
});

API.interceptors.response.use((res) => {
    return res;
}, (err) => {
    if (err.response) {
        // if (err.response.status === 401) {
        //     store.dispatch(signOutAction());
        // }
        if (err.response.status === 413) {
            alert("File size should be less than '5MB'.");
        }
        store.dispatch({ type: "HELPERCALL" });
        store.dispatch({ type: authConstraints.API_REQUEST_FAILED_WITH_ERROR, payload: err.response?.data?.msg });
    }
    return Promise.reject(err);

});

export default API;