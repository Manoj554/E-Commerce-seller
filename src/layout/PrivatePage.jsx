import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategoriesAction } from '../redux/actions';

const PrivatePage = ({ children }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const category = useSelector(state => state.category);

    useEffect(() => {
        if (!auth.authenticate) {
            router.push('/signin');
        }
        console.log(auth.authenticate);
        if (auth.authenticate && category.categories.length == 0) {
            dispatch(getAllCategoriesAction());
        }
    }, [auth.authenticate, category.categories.length]);

    return (
        <>
            {children}
        </>
    )
}

export default PrivatePage;