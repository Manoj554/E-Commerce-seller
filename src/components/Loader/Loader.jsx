import React, { useEffect, useState, } from 'react';
import style from './loader.module.css';
import { CircularProgress } from '@mui/material';

const Loader = () => {

    return (
        <div className={style.container}>
            <div className={style.loader}></div>
            <h2 className={style.loading}>
                Loading . . .
            </h2>
        </div>
    )
}

export default Loader;