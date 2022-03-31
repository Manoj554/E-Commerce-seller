import API from "./axios";

export const signUpApi = (data) => API.post('/auth/signup', data);

export const signInApi = (data) => API.post('/auth/signin', data);

export const signOutApi = () => API.get('/auth/signout');