import React from 'react';
import style from './styles/footer.module.css';

const FooterBox = () => {
    return (
        <>
            <div className={style.fbox}>
                <h3>Online Shoping</h3>
                <ul>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Kids</li>
                    <li>More</li>
                </ul>
            </div>
        </>
    )
}

export default FooterBox