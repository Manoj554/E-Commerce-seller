import React from 'react';
import FooterBox from './FooterBox';
import style from './styles/footer.module.css';
import { FaLinkedinIn, FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { footerData } from '../../utils/staticData/footer';

const Footer = () => {
    return (
        <>
            <footer>
                <div className={style.footer}>
                    <div className={style.container}>
                        <div className={style.left}>
                            <div className={style.logo}>
                                <img src="/logo5.png" alt="Logo" />

                            </div>
                            <p className={style.text}>Cart Anything - Bringing the art to the cart.</p>
                        </div>
                        <div className={style.right}>
                            {footerData.length > 0 && footerData.map((val) => {
                                return <FooterBox key={val} title={val.title} contents={val.contents} />
                            })}
                        </div>
                    </div>
                </div>
                <div className={style.copyright}>
                    <p>All rights reserved &copy; 2022 - Cartany</p>
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