import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategoriesAction, getAllProductAction, signOutAction } from '../redux/actions';
import jwtDecode from 'jwt-decode';

const PrivatePage = ({ children }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const category = useSelector(state => state.category);
    const product = useSelector(state => state.product);

    const validateToken = async () => {
        try {
            const { data } = await axios.get('/api/getcookie');// 1

            if (data.token) {
                const { exp } = jwtDecode(data.token);
                const limit = Math.round(new Date().getTime() / 1000);
                if (exp > limit) {
                    return true;
                }
                return false;
            }
        } catch (error) {
            // console.log(error);
            return false;
        }
    }

    useEffect(async () => {
        if (!(await validateToken())) {
            router.push('/signin');
        }
        if (auth.authenticate && category.categories.length == 0) {
            dispatch(getAllCategoriesAction());
        }
        if (auth.authenticate && product.products.length == 0) {
            dispatch(getAllProductAction());
        }
    }, [auth.authenticate, category.categories.length]);

    return (
        <>
            {children}
        </>
    )
}

export default PrivatePage;