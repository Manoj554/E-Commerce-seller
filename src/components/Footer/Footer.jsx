import React from 'react';
import FooterBox from './FooterBox';
import style from './styles/footer.module.css';
import { FaLinkedinIn, FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <footer>
                <div className={style.footer}>
                    <div className={style.container}>
                        <div className={style.left}>
                            <div className={style.logo}>
                                <img src="/logo.png" alt="Logo" />
                                <span className={style.title}>CartAny</span>
                            </div>
                            <p className={style.text}>Air plant banjo lyft occupy retro adaptogen indego</p>
                        </div>
                        <div className={style.right}>
                            <FooterBox />
                            <FooterBox />
                            <FooterBox />
                        </div>
                    </div>
                </div>
                <div className={style.copyright}>
                    <p>All rights reserved &copy; 2022 - CartAny</p>
                    <ul className={style.socialmedia}>
                        <li>
                            <FaFacebookF />
                        </li>
                        <li>
                            <FaInstagram />
                        </li>
                        <li>
                            <FaTwitter />
                        </li>
                        <li>
                            <FaLinkedinIn />
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer