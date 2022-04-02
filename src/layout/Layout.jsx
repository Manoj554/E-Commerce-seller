import React, { useEffect } from 'react';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { userLoggedInStatus } from '../redux/actions';
import Nprogress from 'nextjs-progressbar';

const Layout = ({ children }) => {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     if (!auth.authenticate) {
    //         dispatch(userLoggedInStatus());
    //     }
    // }, [auth.authenticate]);

    return (
        <div>
            <Nprogress
                height={7}
            />
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout;