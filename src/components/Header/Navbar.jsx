import React from 'react';
import style from './styles/navbar.module.css';
import Link from 'next/link';


const Navbar = () => {
    return (
        <>
            <div className={style.maindiv}>
                <div className={style.contentlogo}><img src="logo5.png" /></div>
                <div className={style.spacediv}>
                    <ul className={style.navcontent}>
                      
                      <li>
                        <Link href="/home">
                            <a>Orders</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/home">
                            <a>Category</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/home">
                            <a>Products</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/home">
                            <a>My users</a>
                        </Link>
                      </li>
                    </ul>
                </div>
                <div className={style.contentlogin}>
                    <Link href="/signin">
                        <a>Login</a>
                    </Link>

                </div>  
            </div>  
            <div className={style.navmargin}>

            </div>
        </>
    )
}

export default Navbar