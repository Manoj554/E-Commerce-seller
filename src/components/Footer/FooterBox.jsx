import React from 'react';
import style from './styles/footer.module.css';

const FooterBox = ({ title, contents }) => {
    return (
        <>
            <div className={style.fbox}>
                <h3>{title}</h3>
                <ul>
                    {contents.map(val => (
                        <li key={val}>{val}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default FooterBox