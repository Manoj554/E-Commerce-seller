import axios from "axios";
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
    }
    return Promise.reject(err);

});

export default API;