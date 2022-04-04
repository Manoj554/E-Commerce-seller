import API from "./axios";

export const signUpApi = (data) => API.post('/auth/signup', data);

export const signInApi = (data) => API.post('/auth/signin', data);

export const signOutApi = () => API.get('/auth/signout');

export const getUserInfoApi = () => API.get('/auth/get-user-info');

export const addNewCategoryApi = (category) => API.post('/category/add-new-category', category);