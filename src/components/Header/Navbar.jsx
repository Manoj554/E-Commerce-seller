import React from 'react';
import style from './styles/navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
    return (
        <>
            <div>
                <Link href="/" passHref>
                    <a>Home</a>
                </Link>
                <br />
                <br />
            </div>
        </>
    )
}

export default Navbar