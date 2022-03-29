import React from 'react';
import style from './styles/navbar.module.css';
import Link from 'next/link';


const Navbar = () => {
    return (
        <>
            <div className={style.maindiv}>
                <div className={style.contentdiv}><img src="logo.jpg" height="60px"/></div>
                <div className={style.spacediv}></div>
                <div className={style.contentdiv}>
                    <Link href="/signin">
                        <a>Login</a>
                    </Link>

                </div>  
            </div>  
        </>
    )
}

export default Navbar