import axios from "axios";
import { signOutAction } from "../redux/actions";
import store from '../redux/store';
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

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
        alert(err.response.data.msg);
        if (err.response.status === 401) {
            store.dispatch(signOutAction());
        }
        if (err.response.status === 413) {
            alert("File size should be less than '5MB'.");
        }
    }
    return Promise.reject(err);

});

export default API;