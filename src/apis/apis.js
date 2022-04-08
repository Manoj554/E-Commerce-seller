import API from "./axios";

export const signUpApi = (data) => API.post('/auth/signup', data);

export const signInApi = (data) => API.post('/auth/signin', data);

export const signOutApi = () => API.get('/auth/signout');

export const getUserInfoApi = () => API.get('/auth/get-user-info');

export const addNewCategoryApi = (category) => API.post('/category/add-new-category', category);

export const getAllCategoriesApi = () => API.get('/category/get-all-category');

export const deleteCategoryApi = (id) => API.delete(`/category/delete-category/${id}`);

export const getCategoryInfoApi = (id) => API.get(`/category/get-category-info/${id}`);

export const editCategoryApi = (category) => API.patch('/category/edit-category', category);

export const addNewProductApi = (product) => API.post('/product/add-new-product', product);

export const getAllProductApi = () => API.get('/product/get-all-product');

export const editProductApi = (product) => API.patch('/product/edit-product', product);

export const deleteProductApi = (id) => API.delete(`/product/delete-product/${id}`);

