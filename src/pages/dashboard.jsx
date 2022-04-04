import React from 'react';
import Loader from '../components/Loader/Loader';
import PrivatePage from '../layout/PrivatePage';
import Dashboard from '../contents/Dashboard/Dashboard';

const dashboard = () => {
    return (
        <PrivatePage>
            <Dashboard />
            
        </PrivatePage>
    )
}

export default dashboard