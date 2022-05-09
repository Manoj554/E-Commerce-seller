import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategoriesAction, getAllOrders, getAllProductAction, signOutAction } from '../redux/actions';
import jwtDecode from 'jwt-decode';

const PrivatePage = ({ children }) => {
    const router = useRouter();
    const [pageState, setPageState] = useState(false);
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const category = useSelector(state => state.category);
    const product = useSelector(state => state.product);
    const order = useSelector(state => state.order);

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
            setPageState(false);
            return router.push('/signin');
        }
        setPageState(true);
        if (auth.authenticate) {
            if (category.categories.length == 0) {
                dispatch(getAllCategoriesAction());
            }
            if (product.products.length == 0) {
                dispatch(getAllProductAction());
            }
            if (order.orders.length == 0) {
                dispatch(getAllOrders());
            }
        }
    }, [auth.authenticate, category.categories.length]);

    return (
        <>
            {pageState && children}
        </>
    )
}

export default PrivatePage;