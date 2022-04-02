import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const PrivatePage = ({ children }) => {
    const router = useRouter();
    const auth = useSelector(state => state.auth);

    // useEffect(() => {
    //     if (!auth.authenticate) {
    //         router.push('/signin');
    //     }
    // }, [auth.authenticate]);

    return (
        <>
            {children}
        </>
    )
}

export default PrivatePage;